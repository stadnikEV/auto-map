webpackJsonp([2],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(102);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js??ref--4-2!./style.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js??ref--4-2!./style.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".form-login__email-container {\n  margin-bottom: 8px; }\n\n.form-login__submit-container {\n  margin-top: 15px; }\n", ""]);

// exports


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form class=\"form-login\"\n      data-component=\"form-login\">\n\n  <label class=\"form-label form-login__label\"\n         for=\"email\">\n  Почта\n  </label>\n  <div class=\"form-login__tip-container\"\n       data-element=\"form-login__tip-email-container\">\n  </div>\n  <div class=\"form-login__email-container\"\n       data-element=\"form-login__email-container\">\n  </div>\n\n  <label class=\"form-label form-login__label\"\n         for=\"password\">\n  Пароль\n  </label>\n  <div class=\"form-login__tip-container\"\n       data-element=\"form-login__tip-password-container\">\n  </div>\n  <div class=\"form-login__password-container\"\n       data-element=\"form-login__password-container\">\n  </div>\n\n  <div class=\"form-login__submit-container\"\n       data-element=\"form-login__submit-container\">\n  </div>\n</form>\n";
},"useData":true});

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"login\"\n     data-component=\"login\">\n  <div class=\"login__main-container\"\n       data-element=\"login__main-container\">\n    <h1 class=\"login__describe\">\n    Вход\n    </h1>\n    <div class=\"login__form-container\"\n         data-element=\"login__form-container\">\n    </div>\n  </div>\n</div>\n";
},"useData":true});

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pubsubJs = _interopRequireDefault(__webpack_require__(4));

var _router = _interopRequireDefault(__webpack_require__(5));

var _driverApi = _interopRequireDefault(__webpack_require__(9));

var _httpError = _interopRequireDefault(__webpack_require__(13));

var _baseComponent = _interopRequireDefault(__webpack_require__(7));

__webpack_require__(92);

var _formLogin = _interopRequireDefault(__webpack_require__(99));

var _template = _interopRequireDefault(__webpack_require__(123));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Login =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Login, _BaseComponent);

  function Login(_ref) {
    var _this;

    var el = _ref.el;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, {
      el: el
    }));
    _this.components = {};
    _this.eventsPubSub = {};

    _this.render();

    _this.elements.login = document.querySelector('[data-component="login"]');
    _this.elements.FormContainer = _this.elements.login.querySelector('[data-element="login__form-container"]');
    _this.components.formLogin = new _formLogin.default({
      el: _this.elements.FormContainer
    });

    _this.addEvents();

    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      this.el.innerHTML = (0, _template.default)();
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      this.eventsPubSub.formLoginData = _pubsubJs.default.subscribe('form-login-data', this.onSendData.bind(this));
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      this.unsubscribe();
    }
  }, {
    key: "onSendData",
    value: function onSendData(msg, _ref2) {
      var _this2 = this;

      var email = _ref2.email,
          password = _ref2.password;

      _driverApi.default.login({
        email: email,
        password: password
      }).then(function () {
        _router.default.setRouteHash({
          routeHash: 'application'
        });

        _router.default.setUserStatus('login');
      }).catch(function (err) {
        _this2.components.formLogin.formEnable();

        if (err instanceof _httpError.default) {
          if (err.status === 403) {
            _this2.components.formLogin.tipHendler({
              isValid: false,
              message: 'Не верная почта или пароль',
              tipName: 'tipEmail'
            });
          }

          if (err.status === 500) {
            console.log('ошибка на сторне сервера');
          }
        }

        console.warn(err);
      });
    }
  }]);

  return Login;
}(_baseComponent.default);

module.exports = Login;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pubsubJs = _interopRequireDefault(__webpack_require__(4));

var _baseComponent = _interopRequireDefault(__webpack_require__(7));

__webpack_require__(93);

__webpack_require__(101);

var _tipInline = _interopRequireDefault(__webpack_require__(94));

var _template = _interopRequireDefault(__webpack_require__(106));

var _buttonSubmit = _interopRequireDefault(__webpack_require__(95));

var _inputEmail = _interopRequireDefault(__webpack_require__(96));

var _inputPassword = _interopRequireDefault(__webpack_require__(97));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var FormLogin =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(FormLogin, _BaseComponent);

  function FormLogin(_ref) {
    var _this;

    var el = _ref.el;

    _classCallCheck(this, FormLogin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormLogin).call(this, {
      el: el
    }));
    _this.components = {};

    _this.render();

    _this.elements.form = document.querySelector('[data-component="form-login"]');
    _this.elements.emailContainer = _this.elements.form.querySelector('[data-element="form-login__email-container"]');
    _this.elements.passwordContainer = _this.elements.form.querySelector('[data-element="form-login__password-container"]');
    _this.elements.tipEmailContainer = _this.elements.form.querySelector('[data-element="form-login__tip-email-container"]');
    _this.elements.tipPasswordContainer = _this.elements.form.querySelector('[data-element="form-login__tip-password-container"]');
    _this.elements.buttonSubmitContainer = _this.elements.form.querySelector('[data-element="form-login__submit-container"]');

    _this.initComponentInputEmail();

    _this.initComponentInputPassword();

    _this.initComponentTipEmail();

    _this.initComponentTipPassword();

    _this.initComponentButtonSubmit();

    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.addEvents();

    return _this;
  }

  _createClass(FormLogin, [{
    key: "render",
    value: function render() {
      this.el.innerHTML = (0, _template.default)();
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      this.elements.form.addEventListener('click', this.onClick);
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      this.elements.form.removeEventListener('click', this.onClick);
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      var submit = e.target.closest('[data-component="button-submit-login"]');

      if (submit) {
        if (!this.elements.form.contains(submit)) {
          return;
        }

        e.preventDefault(); // запрещает срабатывание события "submit"

        if (this.inSendProcess) {
          return;
        }

        var emailStatus = this.components.inputEmail.validation();
        var passwordStatus = this.components.inputPassword.validation();
        this.tipHendler({
          isValid: emailStatus.isValid,
          message: emailStatus.message,
          tipName: 'tipEmail'
        });
        this.tipHendler({
          isValid: passwordStatus.isValid,
          message: passwordStatus.message,
          tipName: 'tipPassword'
        });
        this.setFocus({
          isValidEmail: emailStatus.isValid,
          isValidPassword: passwordStatus.isValid
        });

        if (emailStatus.isValid && passwordStatus.isValid) {
          this.formDisable();

          _pubsubJs.default.publish('form-login-data', {
            email: this.components.inputEmail.getData(),
            password: this.components.inputPassword.getData()
          });
        }
      }
    }
  }, {
    key: "tipHendler",
    value: function tipHendler(_ref2) {
      var isValid = _ref2.isValid,
          message = _ref2.message,
          tipName = _ref2.tipName;

      if (isValid) {
        this.components[tipName].showTip({
          message: ''
        });
        return;
      }

      this.components[tipName].showTip({
        message: message
      });
    }
  }, {
    key: "setFocus",
    value: function setFocus(_ref3) {
      var isValidEmail = _ref3.isValidEmail,
          isValidPassword = _ref3.isValidPassword;

      if (!isValidEmail) {
        this.components.inputEmail.setFocus();
        return;
      }

      if (!isValidPassword) {
        this.components.inputPassword.setFocus();
        return;
      }

      document.activeElement.blur();
    }
  }, {
    key: "formDisable",
    value: function formDisable() {
      this.inSendProcess = true;
      this.components.inputEmail.disable();
      this.components.inputPassword.disable();
    }
  }, {
    key: "formEnable",
    value: function formEnable() {
      this.inSendProcess = false;
      this.components.inputEmail.enable();
      this.components.inputPassword.enable();
    }
  }, {
    key: "initComponentInputEmail",
    value: function initComponentInputEmail() {
      this.components.inputEmail = new _inputEmail.default({
        el: this.elements.emailContainer,
        componentName: 'input-email',
        id: 'email'
      });
    }
  }, {
    key: "initComponentInputPassword",
    value: function initComponentInputPassword() {
      this.components.inputPassword = new _inputPassword.default({
        el: this.elements.passwordContainer,
        componentName: 'input-password',
        id: 'password'
      });
    }
  }, {
    key: "initComponentTipEmail",
    value: function initComponentTipEmail() {
      this.components.tipEmail = new _tipInline.default({
        el: this.elements.tipEmailContainer,
        componentName: 'tip-inline-email'
      });
    }
  }, {
    key: "initComponentTipPassword",
    value: function initComponentTipPassword() {
      this.components.tipPassword = new _tipInline.default({
        el: this.elements.tipPasswordContainer,
        componentName: 'tip-inline-password'
      });
    }
  }, {
    key: "initComponentButtonSubmit",
    value: function initComponentButtonSubmit() {
      this.components.buttonSubmit = new _buttonSubmit.default({
        el: this.elements.buttonSubmitContainer,
        componentName: 'button-submit-login',
        value: 'ВОЙТИ'
      });
    }
  }]);

  return FormLogin;
}(_baseComponent.default);

exports.default = FormLogin;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZHJpdmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvZm9ybS1sb2dpbi9zdHlsZS5zY3NzPzU1YjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvZm9ybS1sb2dpbi9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tbG9naW4vdGVtcGxhdGUuaGJzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luL3RlbXBsYXRlLmhicyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbG9naW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tbG9naW4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zdHlsZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLWxvZ2luL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtLWxvZ2luX19lbWFpbC1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxuXFxuLmZvcm0tbG9naW5fX3N1Ym1pdC1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTVweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLWxvZ2luL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvRmlsbVJlbnRhbC93ZWItcHJvamVjdHMvc2ltYmlvei9zaW1iaW96LWZyb250LWVuZC9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8Zm9ybSBjbGFzcz1cXFwiZm9ybS1sb2dpblxcXCJcXG4gICAgICBkYXRhLWNvbXBvbmVudD1cXFwiZm9ybS1sb2dpblxcXCI+XFxuXFxuICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tbGFiZWwgZm9ybS1sb2dpbl9fbGFiZWxcXFwiXFxuICAgICAgICAgZm9yPVxcXCJlbWFpbFxcXCI+XFxuICDQn9C+0YfRgtCwXFxuICA8L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1sb2dpbl9fdGlwLWNvbnRhaW5lclxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJmb3JtLWxvZ2luX190aXAtZW1haWwtY29udGFpbmVyXFxcIj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1sb2dpbl9fZW1haWwtY29udGFpbmVyXFxcIlxcbiAgICAgICBkYXRhLWVsZW1lbnQ9XFxcImZvcm0tbG9naW5fX2VtYWlsLWNvbnRhaW5lclxcXCI+XFxuICA8L2Rpdj5cXG5cXG4gIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1sYWJlbCBmb3JtLWxvZ2luX19sYWJlbFxcXCJcXG4gICAgICAgICBmb3I9XFxcInBhc3N3b3JkXFxcIj5cXG4gINCf0LDRgNC+0LvRjFxcbiAgPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tbG9naW5fX3RpcC1jb250YWluZXJcXFwiXFxuICAgICAgIGRhdGEtZWxlbWVudD1cXFwiZm9ybS1sb2dpbl9fdGlwLXBhc3N3b3JkLWNvbnRhaW5lclxcXCI+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tbG9naW5fX3Bhc3N3b3JkLWNvbnRhaW5lclxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJmb3JtLWxvZ2luX19wYXNzd29yZC1jb250YWluZXJcXFwiPlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWxvZ2luX19zdWJtaXQtY29udGFpbmVyXFxcIlxcbiAgICAgICBkYXRhLWVsZW1lbnQ9XFxcImZvcm0tbG9naW5fX3N1Ym1pdC1jb250YWluZXJcXFwiPlxcbiAgPC9kaXY+XFxuPC9mb3JtPlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLWxvZ2luL3RlbXBsYXRlLmhic1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9GaWxtUmVudGFsL3dlYi1wcm9qZWN0cy9zaW1iaW96L3NpbWJpb3otZnJvbnQtZW5kL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImxvZ2luXFxcIlxcbiAgICAgZGF0YS1jb21wb25lbnQ9XFxcImxvZ2luXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImxvZ2luX19tYWluLWNvbnRhaW5lclxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJsb2dpbl9fbWFpbi1jb250YWluZXJcXFwiPlxcbiAgICA8aDEgY2xhc3M9XFxcImxvZ2luX19kZXNjcmliZVxcXCI+XFxuICAgINCS0YXQvtC0XFxuICAgIDwvaDE+XFxuICAgIDxkaXYgY2xhc3M9XFxcImxvZ2luX19mb3JtLWNvbnRhaW5lclxcXCJcXG4gICAgICAgICBkYXRhLWVsZW1lbnQ9XFxcImxvZ2luX19mb3JtLWNvbnRhaW5lclxcXCI+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2xvZ2luL3RlbXBsYXRlLmhic1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAncm91dGVyJztcbmltcG9ydCBzaW1iaW96QXBpIGZyb20gJ3NpbWJpb3otYXBpL2RyaXZlci1hcGknO1xuaW1wb3J0IEh0dHBFcnJvciBmcm9tICd1dGlscy9odHRwLWVycm9yLmpzJztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvX19zaGFyZWQvYmFzZS1jb21wb25lbnQnO1xuaW1wb3J0ICdjb21wb25lbnRzL19fc2hhcmVkL2xvZ2luLXJlZ2lzdHJhdGlvbi9zdHlsZS5zY3NzJzsgLy8gY3NzXG5pbXBvcnQgRm9ybUxvZ2luIGZyb20gJy4uL2Zvcm1zL2Zvcm0tbG9naW4nO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUuaGJzJztcblxuXG5jbGFzcyBMb2dpbiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih7IGVsIH0pIHtcbiAgICBzdXBlcih7IGVsIH0pO1xuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgIHRoaXMuZXZlbnRzUHViU3ViID0ge307XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuZWxlbWVudHMubG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jb21wb25lbnQ9XCJsb2dpblwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMuRm9ybUNvbnRhaW5lciA9IHRoaXMuZWxlbWVudHMubG9naW4ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImxvZ2luX19mb3JtLWNvbnRhaW5lclwiXScpO1xuXG4gICAgdGhpcy5jb21wb25lbnRzLmZvcm1Mb2dpbiA9IG5ldyBGb3JtTG9naW4oe1xuICAgICAgZWw6IHRoaXMuZWxlbWVudHMuRm9ybUNvbnRhaW5lcixcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkRXZlbnRzKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZSgpO1xuICB9XG5cbiAgYWRkRXZlbnRzKCkge1xuICAgIHRoaXMuZXZlbnRzUHViU3ViLmZvcm1Mb2dpbkRhdGEgPSBQdWJTdWIuc3Vic2NyaWJlKCdmb3JtLWxvZ2luLWRhdGEnLCB0aGlzLm9uU2VuZERhdGEuYmluZCh0aGlzKSk7XG4gIH1cblxuICByZW1vdmVFdmVudHMoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgb25TZW5kRGF0YShtc2csIHsgZW1haWwsIHBhc3N3b3JkIH0pIHtcbiAgICBzaW1iaW96QXBpLmxvZ2luKHsgZW1haWwsIHBhc3N3b3JkIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJvdXRlci5zZXRSb3V0ZUhhc2goeyByb3V0ZUhhc2g6ICdhcHBsaWNhdGlvbicgfSk7XG4gICAgICAgIHJvdXRlci5zZXRVc2VyU3RhdHVzKCdsb2dpbicpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JtTG9naW4uZm9ybUVuYWJsZSgpO1xuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgSHR0cEVycm9yKSB7XG4gICAgICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwMykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvcm1Mb2dpbi50aXBIZW5kbGVyKHtcbiAgICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICfQndC1INCy0LXRgNC90LDRjyDQv9C+0YfRgtCwINC40LvQuCDQv9Cw0YDQvtC70YwnLFxuICAgICAgICAgICAgICB0aXBOYW1lOiAndGlwRW1haWwnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA1MDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQvtGI0LjQsdC60LAg0L3QsCDRgdGC0L7RgNC90LUg0YHQtdGA0LLQtdGA0LAnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2xvZ2luL2luZGV4LmpzIiwiaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWNvbXBvbmVudCc7XG5pbXBvcnQgJ2NvbXBvbmVudHMvX19zaGFyZWQvZm9ybS9zdHlsZS5zY3NzJzsgLy8gY3NzXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7IC8vIGNzc1xuaW1wb3J0IFRpcElubGluZSBmcm9tICcuLi8uLi90aXAtaW5saW5lJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLmhicyc7IC8vIHRlbXBsYXRlXG5pbXBvcnQgQnV0dG9uU3VibWl0IGZyb20gJy4uLy4uL2J1dHRvbnMvYnV0dG9uLXN1Ym1pdCc7XG5pbXBvcnQgSW5wdXRFbWFpbCBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXQtZW1haWwnO1xuaW1wb3J0IElucHV0UGFzc3dvcmQgZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0LXBhc3N3b3JkJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtTG9naW4gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyBlbCB9KSB7XG4gICAgc3VwZXIoeyBlbCB9KTtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY29tcG9uZW50PVwiZm9ybS1sb2dpblwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMuZW1haWxDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tbG9naW5fX2VtYWlsLWNvbnRhaW5lclwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMucGFzc3dvcmRDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tbG9naW5fX3Bhc3N3b3JkLWNvbnRhaW5lclwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMudGlwRW1haWxDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tbG9naW5fX3RpcC1lbWFpbC1jb250YWluZXJcIl0nKTtcbiAgICB0aGlzLmVsZW1lbnRzLnRpcFBhc3N3b3JkQ29udGFpbmVyID0gdGhpcy5lbGVtZW50cy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtLWxvZ2luX190aXAtcGFzc3dvcmQtY29udGFpbmVyXCJdJyk7XG4gICAgdGhpcy5lbGVtZW50cy5idXR0b25TdWJtaXRDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tbG9naW5fX3N1Ym1pdC1jb250YWluZXJcIl0nKTtcblxuICAgIHRoaXMuaW5pdENvbXBvbmVudElucHV0RW1haWwoKTtcbiAgICB0aGlzLmluaXRDb21wb25lbnRJbnB1dFBhc3N3b3JkKCk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50VGlwRW1haWwoKTtcbiAgICB0aGlzLmluaXRDb21wb25lbnRUaXBQYXNzd29yZCgpO1xuICAgIHRoaXMuaW5pdENvbXBvbmVudEJ1dHRvblN1Ym1pdCgpO1xuXG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRFdmVudHMoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRlbXBsYXRlKCk7XG4gIH1cblxuXG4gIGFkZEV2ZW50cygpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICB9XG5cblxuICByZW1vdmVFdmVudHMoKSB7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgfVxuXG5cbiAgb25DbGljayhlKSB7XG4gICAgY29uc3Qgc3VibWl0ID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtY29tcG9uZW50PVwiYnV0dG9uLXN1Ym1pdC1sb2dpblwiXScpO1xuXG4gICAgaWYgKHN1Ym1pdCkge1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmZvcm0uY29udGFpbnMoc3VibWl0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vINC30LDQv9GA0LXRidCw0LXRgiDRgdGA0LDQsdCw0YLRi9Cy0LDQvdC40LUg0YHQvtCx0YvRgtC40Y8gXCJzdWJtaXRcIlxuXG4gICAgICBpZiAodGhpcy5pblNlbmRQcm9jZXNzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZW1haWxTdGF0dXMgPSB0aGlzLmNvbXBvbmVudHMuaW5wdXRFbWFpbC52YWxpZGF0aW9uKCk7XG4gICAgICBjb25zdCBwYXNzd29yZFN0YXR1cyA9IHRoaXMuY29tcG9uZW50cy5pbnB1dFBhc3N3b3JkLnZhbGlkYXRpb24oKTtcblxuICAgICAgdGhpcy50aXBIZW5kbGVyKHtcbiAgICAgICAgaXNWYWxpZDogZW1haWxTdGF0dXMuaXNWYWxpZCxcbiAgICAgICAgbWVzc2FnZTogZW1haWxTdGF0dXMubWVzc2FnZSxcbiAgICAgICAgdGlwTmFtZTogJ3RpcEVtYWlsJyxcbiAgICAgIH0pO1xuICAgICAgdGhpcy50aXBIZW5kbGVyKHtcbiAgICAgICAgaXNWYWxpZDogcGFzc3dvcmRTdGF0dXMuaXNWYWxpZCxcbiAgICAgICAgbWVzc2FnZTogcGFzc3dvcmRTdGF0dXMubWVzc2FnZSxcbiAgICAgICAgdGlwTmFtZTogJ3RpcFBhc3N3b3JkJyxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNldEZvY3VzKHtcbiAgICAgICAgaXNWYWxpZEVtYWlsOiBlbWFpbFN0YXR1cy5pc1ZhbGlkLFxuICAgICAgICBpc1ZhbGlkUGFzc3dvcmQ6IHBhc3N3b3JkU3RhdHVzLmlzVmFsaWQsXG4gICAgICB9KTtcblxuICAgICAgaWYgKGVtYWlsU3RhdHVzLmlzVmFsaWRcbiAgICAgICYmIHBhc3N3b3JkU3RhdHVzLmlzVmFsaWQpIHtcbiAgICAgICAgdGhpcy5mb3JtRGlzYWJsZSgpO1xuICAgICAgICBQdWJTdWIucHVibGlzaCgnZm9ybS1sb2dpbi1kYXRhJywge1xuICAgICAgICAgIGVtYWlsOiB0aGlzLmNvbXBvbmVudHMuaW5wdXRFbWFpbC5nZXREYXRhKCksXG4gICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuY29tcG9uZW50cy5pbnB1dFBhc3N3b3JkLmdldERhdGEoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGlwSGVuZGxlcih7IGlzVmFsaWQsIG1lc3NhZ2UsIHRpcE5hbWUgfSkge1xuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGlwTmFtZV0uc2hvd1RpcCh7IG1lc3NhZ2U6ICcnIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvbXBvbmVudHNbdGlwTmFtZV0uc2hvd1RpcCh7IG1lc3NhZ2UgfSk7XG4gIH1cblxuXG4gIHNldEZvY3VzKHsgaXNWYWxpZEVtYWlsLCBpc1ZhbGlkUGFzc3dvcmQgfSkge1xuICAgIGlmICghaXNWYWxpZEVtYWlsKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuaW5wdXRFbWFpbC5zZXRGb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWlzVmFsaWRQYXNzd29yZCkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLmlucHV0UGFzc3dvcmQuc2V0Rm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gIH1cblxuICBmb3JtRGlzYWJsZSgpIHtcbiAgICB0aGlzLmluU2VuZFByb2Nlc3MgPSB0cnVlO1xuICAgIHRoaXMuY29tcG9uZW50cy5pbnB1dEVtYWlsLmRpc2FibGUoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMuaW5wdXRQYXNzd29yZC5kaXNhYmxlKCk7XG4gIH1cblxuICBmb3JtRW5hYmxlKCkge1xuICAgIHRoaXMuaW5TZW5kUHJvY2VzcyA9IGZhbHNlO1xuICAgIHRoaXMuY29tcG9uZW50cy5pbnB1dEVtYWlsLmVuYWJsZSgpO1xuICAgIHRoaXMuY29tcG9uZW50cy5pbnB1dFBhc3N3b3JkLmVuYWJsZSgpO1xuICB9XG5cblxuICBpbml0Q29tcG9uZW50SW5wdXRFbWFpbCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuaW5wdXRFbWFpbCA9IG5ldyBJbnB1dEVtYWlsKHtcbiAgICAgIGVsOiB0aGlzLmVsZW1lbnRzLmVtYWlsQ29udGFpbmVyLFxuICAgICAgY29tcG9uZW50TmFtZTogJ2lucHV0LWVtYWlsJyxcbiAgICAgIGlkOiAnZW1haWwnLFxuICAgIH0pO1xuICB9XG5cblxuICBpbml0Q29tcG9uZW50SW5wdXRQYXNzd29yZCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuaW5wdXRQYXNzd29yZCA9IG5ldyBJbnB1dFBhc3N3b3JkKHtcbiAgICAgIGVsOiB0aGlzLmVsZW1lbnRzLnBhc3N3b3JkQ29udGFpbmVyLFxuICAgICAgY29tcG9uZW50TmFtZTogJ2lucHV0LXBhc3N3b3JkJyxcbiAgICAgIGlkOiAncGFzc3dvcmQnLFxuICAgIH0pO1xuICB9XG5cblxuICBpbml0Q29tcG9uZW50VGlwRW1haWwoKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLnRpcEVtYWlsID0gbmV3IFRpcElubGluZSh7XG4gICAgICBlbDogdGhpcy5lbGVtZW50cy50aXBFbWFpbENvbnRhaW5lcixcbiAgICAgIGNvbXBvbmVudE5hbWU6ICd0aXAtaW5saW5lLWVtYWlsJyxcbiAgICB9KTtcbiAgfVxuXG5cbiAgaW5pdENvbXBvbmVudFRpcFBhc3N3b3JkKCkge1xuICAgIHRoaXMuY29tcG9uZW50cy50aXBQYXNzd29yZCA9IG5ldyBUaXBJbmxpbmUoe1xuICAgICAgZWw6IHRoaXMuZWxlbWVudHMudGlwUGFzc3dvcmRDb250YWluZXIsXG4gICAgICBjb21wb25lbnROYW1lOiAndGlwLWlubGluZS1wYXNzd29yZCcsXG4gICAgfSk7XG4gIH1cblxuXG4gIGluaXRDb21wb25lbnRCdXR0b25TdWJtaXQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLmJ1dHRvblN1Ym1pdCA9IG5ldyBCdXR0b25TdWJtaXQoe1xuICAgICAgZWw6IHRoaXMuZWxlbWVudHMuYnV0dG9uU3VibWl0Q29udGFpbmVyLFxuICAgICAgY29tcG9uZW50TmFtZTogJ2J1dHRvbi1zdWJtaXQtbG9naW4nLFxuICAgICAgdmFsdWU6ICfQktCe0JnQotCYJyxcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tbG9naW4vaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQWRBO0FBY0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7OztBQW5EQTtBQUNBO0FBcURBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBcEJBO0FBb0JBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7QUEzSkE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==