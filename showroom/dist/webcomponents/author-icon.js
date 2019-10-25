// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-icon v1.0.4 available at github.com/author-elements/icon
// Last Build: 10/25/2019, 2:47:48 AM
var AuthorIconElement = (function () {
  'use strict';

  if (!window.hasOwnProperty('AuthorBaseElement')) {
              console.error('[ERROR] <author-icon> Required dependency "AuthorBaseElement" not found.');
              console.info('AuthorBaseElement is available at https://github.com/author-elements/base');
            }
          (function () {
            let missingDependencies = Array.from(new Set([])).filter(dep => !customElements.get(dep));
            if (missingDependencies.length > 0) {
              console.error(`[ERROR] <author-icon> Required dependenc${missingDependencies.length !== 1 ? 'ies' : 'y'} not found: ${missingDependencies.map(d => `<${d}>`).join(', ').replace(', ' + missingDependencies[missingDependencies.length - 1], ' and ' + missingDependencies[missingDependencies.length - 1])}`);
              missingDependencies.forEach((dep, i) => console.info(`${i+1}. <${dep}> is available at ${'https://github.com/author-elements/icon'.replace('icon', dep.replace('author-', ''))}`));
            }
          })();
          class AuthorIconElement extends AuthorBaseElement(HTMLElement) {
    constructor () {
      super(`<template><style>@charset "UTF-8"; :host{display:inline-flex}:host *,:host :after,:host :before{box-sizing:border-box}author-icon{display:inline-flex}author-icon *,author-icon :after,author-icon :before{box-sizing:border-box}</style><slot></slot></template>`);

      this.xhr = new XMLHttpRequest();
      this.cache = caches.open('author-icons');

      this.UTIL.defineAttributes({
        src: {
          default: null
        }
      });

      this.UTIL.definePrivateMethods({
        inject: code => this.innerHTML = code,

        render: async () => {
          if (!this.src) {
            return this.PRIVATE.inject(`<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Placeholder Icon</title>
            <desc>Copyright ${new Date().getFullYear()} Author.io</desc>
            <g>
              <mask id="mask-2" fill="white">
                <path d="M0,0 L4.8,0 L4.8,24 L0,24 L0,0 Z M7.68,0 L10.56,0 L10.56,24 L7.68,24 L7.68,0 Z M13.44,0 L16.32,0 L16.32,24 L13.44,24 L13.44,0 Z M19.2,0 L24,0 L24,24 L19.2,24 L19.2,0 Z"></path>
              </mask>
              <g mask="url(#mask-2)">
                <mask id="mask-4" fill="white">
                  <path d="M0,0 L24,0 L24,4.8 L0,4.8 L0,0 Z M0,19.2 L24,19.2 L24,24 L0,24 L0,19.2 Z M0,13.44 L24,13.44 L24,16.32 L0,16.32 L0,13.44 Z M0,7.68 L24,7.68 L24,10.56 L0,10.56 L0,7.68 Z"></path>
                </mask>
                <path d="M3.84,0 L20.16,0 C22.2807734,-3.89579761e-16 24,1.71922656 24,3.84 L24,20.16 C24,22.2807734 22.2807734,24 20.16,24 L3.84,24 C1.71922656,24 2.5971984e-16,22.2807734 0,20.16 L0,3.84 C-2.5971984e-16,1.71922656 1.71922656,3.89579761e-16 3.84,0 Z M3.84,1.92 C2.77961328,1.92 1.92,2.77961328 1.92,3.84 L1.92,20.16 C1.92,21.2203867 2.77961328,22.08 3.84,22.08 L20.16,22.08 C21.2203867,22.08 22.08,21.2203867 22.08,20.16 L22.08,3.84 C22.08,2.77961328 21.2203867,1.92 20.16,1.92 L3.84,1.92 Z" fill="#545454" mask="url(#mask-4)"></path>
              </g>
            </g>
          </svg>`)
          }

          let cache = await this.cache;
          let cachedRequest = await cache.match(this.src);

          if (!cachedRequest) {
            this.xhr.open('GET', this.src);
            return this.xhr.send()
          }

          let reader = cachedRequest.body.getReader();
          reader.read().then(({ value }) => this.PRIVATE.inject(new TextDecoder('utf-8').decode(value)));
        }
      });

      this.UTIL.registerListener(this.xhr, 'load', async evt => {
        let { responseText, status, statusText } = this.xhr;

        if (status !== 200) {
          return
        }

        let cache = await this.cache;

        cache.match(this.src).then(async matched => {
          if (!matched) {
            await cache.put(this.src, new Response(responseText, {
              headers: { 'Content-Type': 'image/svg+xml' }
            }));
          }

          this.PRIVATE.inject(responseText);
        });
      });

      this.UTIL.registerListeners(this, {
        'attribute.change': evt => {
          let { attribute, oldValue, newValue } = evt.detail;

          if (newValue === oldValue) {
            return
          }

          switch (attribute) {
            case 'src': return this.PRIVATE.render()
          }
        }
      });
    }

    static get observedAttributes () {
      return ['src']
    }
  }

  customElements.define('author-icon', AuthorIconElement);

  return AuthorIconElement;

}());
//# sourceMappingURL=author-icon.js.map
