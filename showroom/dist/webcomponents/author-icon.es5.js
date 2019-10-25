// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-icon v1.0.4 available at github.com/author-elements/icon
// Last Build: 10/25/2019, 2:47:48 AM
var AuthorIconElement = (function () {
  'use strict';

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

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

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AuthorIconElement).call(this, "<template><style>@charset \"UTF-8\"; :host{display:inline-flex}:host *,:host :after,:host :before{box-sizing:border-box}author-icon{display:inline-flex}author-icon *,author-icon :after,author-icon :before{box-sizing:border-box}</style><slot></slot></template>"));
      _this.xhr = new XMLHttpRequest();
      _this.cache = caches.open('author-icons');

      _this.UTIL.defineAttributes({
        src: {
          default: null
        }
      });

      _this.UTIL.definePrivateMethods({
        inject: function inject(code) {
          return _this.innerHTML = code;
        },
        render: function () {
          var _render = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var cache, cachedRequest, reader;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (_this.src) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return", _this.PRIVATE.inject("<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <title>Placeholder Icon</title>\n            <desc>Copyright ".concat(new Date().getFullYear(), " Author.io</desc>\n            <g>\n              <mask id=\"mask-2\" fill=\"white\">\n                <path d=\"M0,0 L4.8,0 L4.8,24 L0,24 L0,0 Z M7.68,0 L10.56,0 L10.56,24 L7.68,24 L7.68,0 Z M13.44,0 L16.32,0 L16.32,24 L13.44,24 L13.44,0 Z M19.2,0 L24,0 L24,24 L19.2,24 L19.2,0 Z\"></path>\n              </mask>\n              <g mask=\"url(#mask-2)\">\n                <mask id=\"mask-4\" fill=\"white\">\n                  <path d=\"M0,0 L24,0 L24,4.8 L0,4.8 L0,0 Z M0,19.2 L24,19.2 L24,24 L0,24 L0,19.2 Z M0,13.44 L24,13.44 L24,16.32 L0,16.32 L0,13.44 Z M0,7.68 L24,7.68 L24,10.56 L0,10.56 L0,7.68 Z\"></path>\n                </mask>\n                <path d=\"M3.84,0 L20.16,0 C22.2807734,-3.89579761e-16 24,1.71922656 24,3.84 L24,20.16 C24,22.2807734 22.2807734,24 20.16,24 L3.84,24 C1.71922656,24 2.5971984e-16,22.2807734 0,20.16 L0,3.84 C-2.5971984e-16,1.71922656 1.71922656,3.89579761e-16 3.84,0 Z M3.84,1.92 C2.77961328,1.92 1.92,2.77961328 1.92,3.84 L1.92,20.16 C1.92,21.2203867 2.77961328,22.08 3.84,22.08 L20.16,22.08 C21.2203867,22.08 22.08,21.2203867 22.08,20.16 L22.08,3.84 C22.08,2.77961328 21.2203867,1.92 20.16,1.92 L3.84,1.92 Z\" fill=\"#545454\" mask=\"url(#mask-4)\"></path>\n              </g>\n            </g>\n          </svg>")));

                  case 2:
                    _context.next = 4;
                    return _this.cache;

                  case 4:
                    cache = _context.sent;
                    _context.next = 7;
                    return cache.match(_this.src);

                  case 7:
                    cachedRequest = _context.sent;

                    if (cachedRequest) {
                      _context.next = 11;
                      break;
                    }

                    _this.xhr.open('GET', _this.src);

                    return _context.abrupt("return", _this.xhr.send());

                  case 11:
                    reader = cachedRequest.body.getReader();
                    reader.read().then(function (_ref) {
                      var value = _ref.value;
                      return _this.PRIVATE.inject(new TextDecoder('utf-8').decode(value));
                    });

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function render() {
            return _render.apply(this, arguments);
          }

          return render;
        }()
      });

      _this.UTIL.registerListener(_this.xhr, 'load',
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(evt) {
          var _this$xhr, responseText, status, statusText, cache;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _this$xhr = _this.xhr, responseText = _this$xhr.responseText, status = _this$xhr.status, statusText = _this$xhr.statusText;

                  if (!(status !== 200)) {
                    _context3.next = 3;
                    break;
                  }

                  return _context3.abrupt("return");

                case 3:
                  _context3.next = 5;
                  return _this.cache;

                case 5:
                  cache = _context3.sent;
                  cache.match(_this.src).then(
                  /*#__PURE__*/
                  function () {
                    var _ref3 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee2(matched) {
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              if (matched) {
                                _context2.next = 3;
                                break;
                              }

                              _context2.next = 3;
                              return cache.put(_this.src, new Response(responseText, {
                                headers: {
                                  'Content-Type': 'image/svg+xml'
                                }
                              }));

                            case 3:
                              _this.PRIVATE.inject(responseText);

                            case 4:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    return function (_x2) {
                      return _ref3.apply(this, arguments);
                    };
                  }());

                case 7:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());

      _this.UTIL.registerListeners(_assertThisInitialized(_this), {
        'attribute.change': function attributeChange(evt) {
          var _evt$detail = evt.detail,
              attribute = _evt$detail.attribute,
              oldValue = _evt$detail.oldValue,
              newValue = _evt$detail.newValue;

          if (newValue === oldValue) {
            return;
          }

          switch (attribute) {
            case 'src':
              return _this.PRIVATE.render();
          }
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
