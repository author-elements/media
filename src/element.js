class AuthorMediaElement extends AuthorBaseElement(HTMLElement) {
  constructor () {
    super(`{{TEMPLATE-STRING}}`)

    this.UTIL.defineAttributes({
      src: {
        default: null
      }
    })

    this.UTIL.defineProperties({
      xhr: {
        private: true,
        readonly: true,
        default: new XMLHttpRequest()
      },

      cache: {
        private: true,
        readonly: true,
        default: window.caches.open('author-media')
      },

      placeholder: {
        private: true,
        readonly: true,
        default: `<svg width="300px" height="300px" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>placeholder</title>
          <g id="placeholder" fill="#F2F2F2" stroke="#D0D0D0" stroke-width="3">
            <rect id="rectangle" x="1.5" y="1.5" width="297" height="297"></rect>
            <line x1="2" y1="2" x2="298" y2="298" id="line"></line>
            <line x1="2" y1="2" x2="298" y2="298" id="line" transform="translate(150.000000, 150.000000) scale(-1, 1) translate(-150.000000, -150.000000) "></line>
          </g>
        </svg>`
      }
    })

    this.UTIL.definePrivateMethods({
      inject: code => this.innerHTML = code,

      render: async () => {
        if (!this.src) {
          return this.PRIVATE.inject(this.PRIVATE.placeholder)
        }

        let cache = await this.PRIVATE.cache
        let cachedRequest = await cache.match(this.src)

        if (!cachedRequest) {
          this.PRIVATE.xhr.open('GET', this.src)
          return this.PRIVATE.xhr.send()
        }

        let reader = cachedRequest.body.getReader()
        reader.read().then(({ value }) => this.PRIVATE.inject(new TextDecoder('utf-8').decode(value)))
      }
    })

    this.UTIL.registerListener(this.PRIVATE.xhr, 'load', async evt => {
      let { responseText, status, statusText } = this.PRIVATE.xhr

      if (status !== 200) {
        return this.PRIVATE.inject(this.PRIVATE.placeholder)
      }

      let cache = await this.PRIVATE.cache

      cache.match(this.src).then(async matched => {
        if (!matched) {
          await cache.put(this.src, new Response(responseText, {
            headers: { 'Content-Type': 'image/svg+xml' }
          }))
        }

        this.PRIVATE.inject(responseText)
      })
    })

    this.UTIL.registerListeners(this, {
      'attribute.change': evt => {
        let { attribute, oldValue, newValue } = evt.detail

        if (newValue === oldValue) {
          return
        }

        switch (attribute) {
          case 'src': return this.PRIVATE.render()
        }
      }
    })
  }

  static get observedAttributes () {
    return ['src']
  }
}

customElements.define('author-icon', AuthorMediaElement)

export default AuthorMediaElement
