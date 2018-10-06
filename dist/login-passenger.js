webpackJsonp([2],{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"login\"\n     data-component=\"login\">\n  <div class=\"login__main-container\"\n       data-element=\"login__main-container\">\n    <h1 class=\"login__describe\">\n    Вход\n    </h1>\n    <div class=\"login__form-container\"\n         data-element=\"login__form-container\">\n    </div>\n  </div>\n</div>\n";
},"useData":true});

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pubsubJs = _interopRequireDefault(__webpack_require__(4));

var _router = _interopRequireDefault(__webpack_require__(5));

var _passengerApi = _interopRequireDefault(__webpack_require__(11));

var _httpError = _interopRequireDefault(__webpack_require__(12));

var _baseComponent = _interopRequireDefault(__webpack_require__(7));

__webpack_require__(80);

var _formLogin = _interopRequireDefault(__webpack_require__(87));

var _template = _interopRequireDefault(__webpack_require__(111));

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

      _passengerApi.default.login({
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

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pubsubJs = _interopRequireDefault(__webpack_require__(4));

var _baseComponent = _interopRequireDefault(__webpack_require__(7));

__webpack_require__(81);

__webpack_require__(89);

var _tipInline = _interopRequireDefault(__webpack_require__(82));

var _template = _interopRequireDefault(__webpack_require__(94));

var _buttonSubmit = _interopRequireDefault(__webpack_require__(83));

var _inputEmail = _interopRequireDefault(__webpack_require__(84));

var _inputPassword = _interopRequireDefault(__webpack_require__(85));

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

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(90);

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

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".form-login__email-container {\n  margin-bottom: 8px; }\n\n.form-login__submit-container {\n  margin-top: 15px; }\n", ""]);

// exports


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form class=\"form-login\"\n      data-component=\"form-login\">\n\n  <label class=\"form-label form-login__label\"\n         for=\"email\">\n  Почта\n  </label>\n  <div class=\"form-login__tip-container\"\n       data-element=\"form-login__tip-email-container\">\n  </div>\n  <div class=\"form-login__email-container\"\n       data-element=\"form-login__email-container\">\n  </div>\n\n  <label class=\"form-label form-login__label\"\n         for=\"password\">\n  Пароль\n  </label>\n  <div class=\"form-login__tip-container\"\n       data-element=\"form-login__tip-password-container\">\n  </div>\n  <div class=\"form-login__password-container\"\n       data-element=\"form-login__password-container\">\n  </div>\n\n  <div class=\"form-login__submit-container\"\n       data-element=\"form-login__submit-container\">\n  </div>\n</form>\n";
},"useData":true});

/***/ })

});