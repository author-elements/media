// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-icon v1.0.0 available at github.com/author-elements/icon
// Last Build: 8/7/2019, 3:42:35 PM
var AuthorIconElement = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  if (!window.hasOwnProperty('AuthorBaseElement')) {
    console.error('[ERROR] <author-icon> Required dependency "AuthorBaseElement" not found.');
    console.info('AuthorBaseElement is available at https://github.com/author-elements/base');
  }

  (function () {
    var missingDependencies = Array.from(new Set([])).filter(function (dep) {
      return !customElements.get(dep);
    });

    if (missingDependencies.length > 0) {
      console.error("[ERROR] <author-icon> Required dependenc".concat(missingDependencies.length !== 1 ? 'ies' : 'y', " not found: ").concat(missingDependencies.map(function (d) {
        return "<".concat(d, ">");
      }).join(', ').replace(', ' + missingDependencies[missingDependencies.length - 1], ' and ' + missingDependencies[missingDependencies.length - 1])));
      missingDependencies.forEach(function (dep, i) {
        return console.info("".concat(i + 1, ". <").concat(dep, "> is available at ").concat('https://github.com/author-elements/icon'.replace('icon', dep.replace('author-', ''))));
      });
    }
  })();

  var AuthorIconElement =
  /*#__PURE__*/
  function (_AuthorBaseElement) {
    _inherits(AuthorIconElement, _AuthorBaseElement);

    function AuthorIconElement() {
      var _this;

      _classCallCheck(this, AuthorIconElement);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AuthorIconElement).call(this, "<template><style>@charset \"UTF-8\"; :host *,:host :after,:host :before{box-sizing:border-box}author-icon *,author-icon :after,author-icon :before{box-sizing:border-box}</style><slot></slot></template>"));
      _this.xhr = new XMLHttpRequest();

      _this.UTIL.defineAttributes({
        src: {
          default: null
        }
      });

      _this.UTIL.definePrivateMethods({
        inject: function inject(code) {
          return _this.insertAdjacentHTML('beforeend', code);
        }
      });

      _this.UTIL.registerListener(_this.xhr, 'load', function (evt) {
        console.log(evt);

        _this.PRIVATE.inject(_this.xhr.responseText);
      });

      _this.UTIL.registerListeners(_assertThisInitialized(_this), {
        connected: function connected() {
          if (_this.children.length > 0) {
            return;
          }

          if (!_this.src) {
            return _this.PRIVATE.inject("<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <title>Placeholder Icon</title>\n            <desc>Copyright Author.io</desc>\n            <g>\n              <mask id=\"mask-2\" fill=\"white\">\n                <path d=\"M0,0 L4.8,0 L4.8,24 L0,24 L0,0 Z M7.68,0 L10.56,0 L10.56,24 L7.68,24 L7.68,0 Z M13.44,0 L16.32,0 L16.32,24 L13.44,24 L13.44,0 Z M19.2,0 L24,0 L24,24 L19.2,24 L19.2,0 Z\"></path>\n              </mask>\n              <g mask=\"url(#mask-2)\">\n                <mask id=\"mask-4\" fill=\"white\">\n                  <path d=\"M0,0 L24,0 L24,4.8 L0,4.8 L0,0 Z M0,19.2 L24,19.2 L24,24 L0,24 L0,19.2 Z M0,13.44 L24,13.44 L24,16.32 L0,16.32 L0,13.44 Z M0,7.68 L24,7.68 L24,10.56 L0,10.56 L0,7.68 Z\"></path>\n                </mask>\n                <path d=\"M3.84,0 L20.16,0 C22.2807734,-3.89579761e-16 24,1.71922656 24,3.84 L24,20.16 C24,22.2807734 22.2807734,24 20.16,24 L3.84,24 C1.71922656,24 2.5971984e-16,22.2807734 0,20.16 L0,3.84 C-2.5971984e-16,1.71922656 1.71922656,3.89579761e-16 3.84,0 Z M3.84,1.92 C2.77961328,1.92 1.92,2.77961328 1.92,3.84 L1.92,20.16 C1.92,21.2203867 2.77961328,22.08 3.84,22.08 L20.16,22.08 C21.2203867,22.08 22.08,21.2203867 22.08,20.16 L22.08,3.84 C22.08,2.77961328 21.2203867,1.92 20.16,1.92 L3.84,1.92 Z\" fill=\"#545454\" mask=\"url(#mask-4)\"></path>\n              </g>\n            </g>\n          </svg>");
          }

          _this.xhr.open('GET', _this.src);

          _this.xhr.send();
        }
      });

      return _this;
    }

    _createClass(AuthorIconElement, null, [{
      key: "observedAttributes",
      get: function get() {
        return ['src'];
      }
    }]);

    return AuthorIconElement;
  }(AuthorBaseElement(HTMLElement));

  customElements.define('author-icon', AuthorIconElement);

  return AuthorIconElement;

}());
//# sourceMappingURL=author-icon.es5.js.map
