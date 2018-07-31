webpackJsonp([2],{

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _baseComponent = _interopRequireDefault(__webpack_require__(4));

__webpack_require__(63);

var _formLogin = _interopRequireDefault(__webpack_require__(70));

var _template = _interopRequireDefault(__webpack_require__(94));

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
    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      this.el.innerHTML = (0, _template.default)();
    }
  }]);

  return Login;
}(_baseComponent.default);

module.exports = Login;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pubsubJs = _interopRequireDefault(__webpack_require__(5));

var _baseComponent = _interopRequireDefault(__webpack_require__(4));

__webpack_require__(64);

__webpack_require__(72);

var _tipInline = _interopRequireDefault(__webpack_require__(65));

var _template = _interopRequireDefault(__webpack_require__(77));

var _buttonSubmit = _interopRequireDefault(__webpack_require__(66));

var _inputEmail = _interopRequireDefault(__webpack_require__(67));

var _inputPassword = _interopRequireDefault(__webpack_require__(68));

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
    _this.eventsPubSub = {};

    _this.render();

    _this.elements.form = document.querySelector('[data-component="form-login"]');
    _this.elements.emailContainer = _this.elements.form.querySelector('[data-element="form-login__email-container"]');
    _this.elements.passwordContainer = _this.elements.form.querySelector('[data-element="form-login__password-container"]');
    _this.elements.tipEmailContainer = _this.elements.form.querySelector('[data-element="form-login__tip-email-container"]');
    _this.elements.tipPasswordContainer = _this.elements.form.querySelector('[data-element="form-login__tip-password-container"]');
    _this.elements.buttonSubmitContainer = _this.elements.form.querySelector('[data-element="form-login__submit-container"]');

    _this.initComponentInputEmail();

    _this.initComponentInputPassword();

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
      this.eventsPubSub.responseValidationEmail = _pubsubJs.default.subscribe('responseValidationEmail', this.onValidation.bind(this));
      this.eventsPubSub.responseValidationPassword = _pubsubJs.default.subscribe('responseValidationPassword', this.onValidation.bind(this));
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      this.elements.form.removeEventListener('click', this.onClick);
      this.unsubscribe();
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

        _pubsubJs.default.publish('requestValidationEmail');

        _pubsubJs.default.publish('requestValidationPassword');

        console.log('click');
      }
    }
  }, {
    key: "onValidation",
    value: function onValidation(msg, _ref2) {
      var status = _ref2.status;

      if (msg === 'responseValidationEmail') {
        this.isValidEmail = status.isValid;
        this.tipEmailHendler({
          isValid: status.isValid,
          message: status.message
        });
      }

      if (msg === 'responseValidationPassword') {
        this.isValidPassword = status.isValid;
        this.tipPasswordHendler({
          isValid: status.isValid,
          message: status.message
        });
      }

      if (this.isValidEmail === undefined // сработали оба события
      || this.isValidPassword === undefined) {
        return;
      }

      this.setFocus();

      if (this.isValidEmail // если поля валидные
      && this.isValidPassword) {
        console.log('submit');
      }

      delete this.isValidEmail;
      delete this.isValidPassword;
    }
  }, {
    key: "setFocus",
    value: function setFocus() {
      if (!this.isValidEmail) {
        _pubsubJs.default.publish('setFocusEmail');

        return;
      }

      if (!this.isValidPassword) {
        _pubsubJs.default.publish('setFocusPassword');

        return;
      }

      document.activeElement.blur();
    }
  }, {
    key: "tipEmailHendler",
    value: function tipEmailHendler(_ref3) {
      var isValid = _ref3.isValid,
          message = _ref3.message;

      if (isValid && this.components.tipEmail) {
        _pubsubJs.default.publish('showTipEmail', {
          message: ''
        });
      }

      if (!isValid) {
        if (!this.components.tipEmail) {
          this.initComponentTipEmail();
        }

        _pubsubJs.default.publish('showTipEmail', {
          message: message
        });
      }
    }
  }, {
    key: "tipPasswordHendler",
    value: function tipPasswordHendler(_ref4) {
      var isValid = _ref4.isValid,
          message = _ref4.message;

      if (isValid && this.components.tipPassword) {
        _pubsubJs.default.publish('showTipPassword', {
          message: ''
        });
      }

      if (!isValid) {
        if (!this.components.tipPassword) {
          this.initComponentTipPassword();
        }

        _pubsubJs.default.publish('showTipPassword', {
          message: message
        });
      }
    }
  }, {
    key: "initComponentInputEmail",
    value: function initComponentInputEmail() {
      this.components.inputEmail = new _inputEmail.default({
        el: this.elements.emailContainer,
        componentName: 'input-email',
        id: 'email',
        events: {
          subscribeValidation: 'requestValidationEmail',
          subscribeSetFocus: 'setFocusEmail',
          publishValidation: 'responseValidationEmail'
        }
      });
    }
  }, {
    key: "initComponentInputPassword",
    value: function initComponentInputPassword() {
      this.components.inputPassword = new _inputPassword.default({
        el: this.elements.passwordContainer,
        componentName: 'input-password',
        id: 'password',
        events: {
          subscribeValidation: 'requestValidationPassword',
          subscribeSetFocus: 'setFocusPassword',
          publishValidation: 'responseValidationPassword'
        }
      });
    }
  }, {
    key: "initComponentButtonSubmit",
    value: function initComponentButtonSubmit() {
      this.components.buttonSubmit = new _buttonSubmit.default({
        el: this.elements.buttonSubmitContainer,
        value: 'ВОЙТИ',
        componentName: 'button-submit-login'
      });
    }
  }, {
    key: "initComponentTipEmail",
    value: function initComponentTipEmail() {
      this.components.tipEmail = new _tipInline.default({
        el: this.elements.tipEmailContainer,
        componentName: 'tip-inline-email',
        subscribeEvent: 'showTipEmail'
      });
    }
  }, {
    key: "initComponentTipPassword",
    value: function initComponentTipPassword() {
      this.components.tipPassword = new _tipInline.default({
        el: this.elements.tipPasswordContainer,
        componentName: 'tip-inline-password',
        subscribeEvent: 'showTipPassword'
      });
    }
  }]);

  return FormLogin;
}(_baseComponent.default);

exports.default = FormLogin;

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(73);

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

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".form-login__email-container {\n  margin-bottom: 8px; }\n\n.form-login__submit-container {\n  margin-top: 15px; }\n", ""]);

// exports


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form class=\"form-login\"\n      data-component=\"form-login\">\n\n  <label class=\"form-label form-login__label\"\n         for=\"email\">\n  Почта\n  </label>\n  <div class=\"form-login__tip-container\"\n       data-element=\"form-login__tip-email-container\">\n  </div>\n  <div class=\"form-login__email-container\"\n       data-element=\"form-login__email-container\">\n  </div>\n\n  <label class=\"form-label form-login__label\"\n         for=\"password\">\n  Пароль\n  </label>\n  <div class=\"form-login__tip-container\"\n       data-element=\"form-login__tip-password-container\">\n  </div>\n  <div class=\"form-login__password-container\"\n       data-element=\"form-login__password-container\">\n  </div>\n\n  <div class=\"form-login__submit-container\"\n       data-element=\"form-login__submit-container\">\n  </div>\n</form>\n";
},"useData":true});

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"login\"\n     data-component=\"login\">\n  <div class=\"login__main-container\"\n       data-element=\"login__main-container\">\n    <h1 class=\"login__describe\">\n    Вход\n    </h1>\n    <div class=\"login__form-container\"\n         data-element=\"login__form-container\">\n    </div>\n  </div>\n</div>\n";
},"useData":true});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZHJpdmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2xvZ2luL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLWxvZ2luL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tbG9naW4vc3R5bGUuc2Nzcz81NWIwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tbG9naW4vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLWxvZ2luL3RlbXBsYXRlLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dpbi90ZW1wbGF0ZS5oYnMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWNvbXBvbmVudCc7XG5pbXBvcnQgJ2NvbXBvbmVudHMvX19zaGFyZWQvbG9naW4tcmVnaXN0cmF0aW9uL3N0eWxlLnNjc3MnOyAvLyBjc3NcbmltcG9ydCBGb3JtTG9naW4gZnJvbSAnLi4vZm9ybXMvZm9ybS1sb2dpbic7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZS5oYnMnO1xuXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgZWwgfSkge1xuICAgIHN1cGVyKHsgZWwgfSk7XG4gICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgdGhpcy5ldmVudHNQdWJTdWIgPSB7fTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5lbGVtZW50cy5sb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbXBvbmVudD1cImxvZ2luXCJdJyk7XG4gICAgdGhpcy5lbGVtZW50cy5Gb3JtQ29udGFpbmVyID0gdGhpcy5lbGVtZW50cy5sb2dpbi5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwibG9naW5fX2Zvcm0tY29udGFpbmVyXCJdJyk7XG5cbiAgICB0aGlzLmNvbXBvbmVudHMuZm9ybUxvZ2luID0gbmV3IEZvcm1Mb2dpbih7XG4gICAgICBlbDogdGhpcy5lbGVtZW50cy5Gb3JtQ29udGFpbmVyLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGVtcGxhdGUoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2xvZ2luL2luZGV4LmpzIiwiaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWNvbXBvbmVudCc7XG5pbXBvcnQgJ2NvbXBvbmVudHMvX19zaGFyZWQvZm9ybS9zdHlsZS5zY3NzJzsgLy8gY3NzXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7IC8vIGNzc1xuaW1wb3J0IFRpcElubGluZSBmcm9tICcuLi8uLi90aXAtaW5saW5lJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLmhicyc7IC8vIHRlbXBsYXRlXG5pbXBvcnQgQnV0dG9uU3VibWl0IGZyb20gJy4uLy4uL2J1dHRvbnMvYnV0dG9uLXN1Ym1pdCc7XG5pbXBvcnQgSW5wdXRFbWFpbCBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXQtZW1haWwnO1xuaW1wb3J0IElucHV0UGFzc3dvcmQgZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0LXBhc3N3b3JkJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtTG9naW4gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyBlbCB9KSB7XG4gICAgc3VwZXIoeyBlbCB9KTtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICB0aGlzLmV2ZW50c1B1YlN1YiA9IHt9O1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmVsZW1lbnRzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jb21wb25lbnQ9XCJmb3JtLWxvZ2luXCJdJyk7XG4gICAgdGhpcy5lbGVtZW50cy5lbWFpbENvbnRhaW5lciA9IHRoaXMuZWxlbWVudHMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiZm9ybS1sb2dpbl9fZW1haWwtY29udGFpbmVyXCJdJyk7XG4gICAgdGhpcy5lbGVtZW50cy5wYXNzd29yZENvbnRhaW5lciA9IHRoaXMuZWxlbWVudHMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiZm9ybS1sb2dpbl9fcGFzc3dvcmQtY29udGFpbmVyXCJdJyk7XG4gICAgdGhpcy5lbGVtZW50cy50aXBFbWFpbENvbnRhaW5lciA9IHRoaXMuZWxlbWVudHMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiZm9ybS1sb2dpbl9fdGlwLWVtYWlsLWNvbnRhaW5lclwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMudGlwUGFzc3dvcmRDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tbG9naW5fX3RpcC1wYXNzd29yZC1jb250YWluZXJcIl0nKTtcbiAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvblN1Ym1pdENvbnRhaW5lciA9IHRoaXMuZWxlbWVudHMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiZm9ybS1sb2dpbl9fc3VibWl0LWNvbnRhaW5lclwiXScpO1xuXG4gICAgdGhpcy5pbml0Q29tcG9uZW50SW5wdXRFbWFpbCgpO1xuICAgIHRoaXMuaW5pdENvbXBvbmVudElucHV0UGFzc3dvcmQoKTtcbiAgICB0aGlzLmluaXRDb21wb25lbnRCdXR0b25TdWJtaXQoKTtcblxuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkRXZlbnRzKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZSgpO1xuICB9XG5cblxuICBhZGRFdmVudHMoKSB7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICB0aGlzLmV2ZW50c1B1YlN1Yi5yZXNwb25zZVZhbGlkYXRpb25FbWFpbCA9IFB1YlN1Yi5zdWJzY3JpYmUoJ3Jlc3BvbnNlVmFsaWRhdGlvbkVtYWlsJywgdGhpcy5vblZhbGlkYXRpb24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ldmVudHNQdWJTdWIucmVzcG9uc2VWYWxpZGF0aW9uUGFzc3dvcmQgPSBQdWJTdWIuc3Vic2NyaWJlKCdyZXNwb25zZVZhbGlkYXRpb25QYXNzd29yZCcsIHRoaXMub25WYWxpZGF0aW9uLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRzKCkge1xuICAgIHRoaXMuZWxlbWVudHMuZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgb25DbGljayhlKSB7XG4gICAgY29uc3Qgc3VibWl0ID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtY29tcG9uZW50PVwiYnV0dG9uLXN1Ym1pdC1sb2dpblwiXScpO1xuXG4gICAgaWYgKHN1Ym1pdCkge1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmZvcm0uY29udGFpbnMoc3VibWl0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vINC30LDQv9GA0LXRidCw0LXRgiDRgdGA0LDQsdCw0YLRi9Cy0LDQvdC40LUg0YHQvtCx0YvRgtC40Y8gXCJzdWJtaXRcIlxuXG4gICAgICBQdWJTdWIucHVibGlzaCgncmVxdWVzdFZhbGlkYXRpb25FbWFpbCcpO1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ3JlcXVlc3RWYWxpZGF0aW9uUGFzc3dvcmQnKTtcblxuICAgICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG4gICAgfVxuICB9XG5cbiAgb25WYWxpZGF0aW9uKG1zZywgeyBzdGF0dXMgfSkge1xuICAgIGlmIChtc2cgPT09ICdyZXNwb25zZVZhbGlkYXRpb25FbWFpbCcpIHtcbiAgICAgIHRoaXMuaXNWYWxpZEVtYWlsID0gc3RhdHVzLmlzVmFsaWQ7XG4gICAgICB0aGlzLnRpcEVtYWlsSGVuZGxlcih7XG4gICAgICAgIGlzVmFsaWQ6IHN0YXR1cy5pc1ZhbGlkLFxuICAgICAgICBtZXNzYWdlOiBzdGF0dXMubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChtc2cgPT09ICdyZXNwb25zZVZhbGlkYXRpb25QYXNzd29yZCcpIHtcbiAgICAgIHRoaXMuaXNWYWxpZFBhc3N3b3JkID0gc3RhdHVzLmlzVmFsaWQ7XG4gICAgICB0aGlzLnRpcFBhc3N3b3JkSGVuZGxlcih7XG4gICAgICAgIGlzVmFsaWQ6IHN0YXR1cy5pc1ZhbGlkLFxuICAgICAgICBtZXNzYWdlOiBzdGF0dXMubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzVmFsaWRFbWFpbCA9PT0gdW5kZWZpbmVkIC8vINGB0YDQsNCx0L7RgtCw0LvQuCDQvtCx0LAg0YHQvtCx0YvRgtC40Y9cbiAgICB8fCB0aGlzLmlzVmFsaWRQYXNzd29yZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRGb2N1cygpO1xuXG4gICAgaWYgKHRoaXMuaXNWYWxpZEVtYWlsIC8vINC10YHQu9C4INC/0L7Qu9GPINCy0LDQu9C40LTQvdGL0LVcbiAgICAmJiB0aGlzLmlzVmFsaWRQYXNzd29yZCkge1xuICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdCcpO1xuICAgIH1cblxuICAgIGRlbGV0ZSB0aGlzLmlzVmFsaWRFbWFpbDtcbiAgICBkZWxldGUgdGhpcy5pc1ZhbGlkUGFzc3dvcmQ7XG4gIH1cblxuICBzZXRGb2N1cygpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZEVtYWlsKSB7XG4gICAgICBQdWJTdWIucHVibGlzaCgnc2V0Rm9jdXNFbWFpbCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNWYWxpZFBhc3N3b3JkKSB7XG4gICAgICBQdWJTdWIucHVibGlzaCgnc2V0Rm9jdXNQYXNzd29yZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG4gIHRpcEVtYWlsSGVuZGxlcih7IGlzVmFsaWQsIG1lc3NhZ2UgfSkge1xuICAgIGlmIChpc1ZhbGlkICYmIHRoaXMuY29tcG9uZW50cy50aXBFbWFpbCkge1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ3Nob3dUaXBFbWFpbCcsIHsgbWVzc2FnZTogJycgfSk7XG4gICAgfVxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudHMudGlwRW1haWwpIHtcbiAgICAgICAgdGhpcy5pbml0Q29tcG9uZW50VGlwRW1haWwoKTtcbiAgICAgIH1cbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdzaG93VGlwRW1haWwnLCB7IG1lc3NhZ2UgfSk7XG4gICAgfVxuICB9XG5cbiAgdGlwUGFzc3dvcmRIZW5kbGVyKHsgaXNWYWxpZCwgbWVzc2FnZSB9KSB7XG4gICAgaWYgKGlzVmFsaWQgJiYgdGhpcy5jb21wb25lbnRzLnRpcFBhc3N3b3JkKSB7XG4gICAgICBQdWJTdWIucHVibGlzaCgnc2hvd1RpcFBhc3N3b3JkJywgeyBtZXNzYWdlOiAnJyB9KTtcbiAgICB9XG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICBpZiAoIXRoaXMuY29tcG9uZW50cy50aXBQYXNzd29yZCkge1xuICAgICAgICB0aGlzLmluaXRDb21wb25lbnRUaXBQYXNzd29yZCgpO1xuICAgICAgfVxuICAgICAgUHViU3ViLnB1Ymxpc2goJ3Nob3dUaXBQYXNzd29yZCcsIHsgbWVzc2FnZSB9KTtcbiAgICB9XG4gIH1cblxuXG4gIGluaXRDb21wb25lbnRJbnB1dEVtYWlsKCkge1xuICAgIHRoaXMuY29tcG9uZW50cy5pbnB1dEVtYWlsID0gbmV3IElucHV0RW1haWwoe1xuICAgICAgZWw6IHRoaXMuZWxlbWVudHMuZW1haWxDb250YWluZXIsXG4gICAgICBjb21wb25lbnROYW1lOiAnaW5wdXQtZW1haWwnLFxuICAgICAgaWQ6ICdlbWFpbCcsXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgc3Vic2NyaWJlVmFsaWRhdGlvbjogJ3JlcXVlc3RWYWxpZGF0aW9uRW1haWwnLFxuICAgICAgICBzdWJzY3JpYmVTZXRGb2N1czogJ3NldEZvY3VzRW1haWwnLFxuICAgICAgICBwdWJsaXNoVmFsaWRhdGlvbjogJ3Jlc3BvbnNlVmFsaWRhdGlvbkVtYWlsJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBpbml0Q29tcG9uZW50SW5wdXRQYXNzd29yZCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuaW5wdXRQYXNzd29yZCA9IG5ldyBJbnB1dFBhc3N3b3JkKHtcbiAgICAgIGVsOiB0aGlzLmVsZW1lbnRzLnBhc3N3b3JkQ29udGFpbmVyLFxuICAgICAgY29tcG9uZW50TmFtZTogJ2lucHV0LXBhc3N3b3JkJyxcbiAgICAgIGlkOiAncGFzc3dvcmQnLFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIHN1YnNjcmliZVZhbGlkYXRpb246ICdyZXF1ZXN0VmFsaWRhdGlvblBhc3N3b3JkJyxcbiAgICAgICAgc3Vic2NyaWJlU2V0Rm9jdXM6ICdzZXRGb2N1c1Bhc3N3b3JkJyxcbiAgICAgICAgcHVibGlzaFZhbGlkYXRpb246ICdyZXNwb25zZVZhbGlkYXRpb25QYXNzd29yZCcsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdENvbXBvbmVudEJ1dHRvblN1Ym1pdCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuYnV0dG9uU3VibWl0ID0gbmV3IEJ1dHRvblN1Ym1pdCh7XG4gICAgICBlbDogdGhpcy5lbGVtZW50cy5idXR0b25TdWJtaXRDb250YWluZXIsXG4gICAgICB2YWx1ZTogJ9CS0J7QmdCi0JgnLFxuICAgICAgY29tcG9uZW50TmFtZTogJ2J1dHRvbi1zdWJtaXQtbG9naW4nLFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdENvbXBvbmVudFRpcEVtYWlsKCkge1xuICAgIHRoaXMuY29tcG9uZW50cy50aXBFbWFpbCA9IG5ldyBUaXBJbmxpbmUoe1xuICAgICAgZWw6IHRoaXMuZWxlbWVudHMudGlwRW1haWxDb250YWluZXIsXG4gICAgICBjb21wb25lbnROYW1lOiAndGlwLWlubGluZS1lbWFpbCcsXG4gICAgICBzdWJzY3JpYmVFdmVudDogJ3Nob3dUaXBFbWFpbCcsXG4gICAgfSk7XG4gIH1cblxuICBpbml0Q29tcG9uZW50VGlwUGFzc3dvcmQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLnRpcFBhc3N3b3JkID0gbmV3IFRpcElubGluZSh7XG4gICAgICBlbDogdGhpcy5lbGVtZW50cy50aXBQYXNzd29yZENvbnRhaW5lcixcbiAgICAgIGNvbXBvbmVudE5hbWU6ICd0aXAtaW5saW5lLXBhc3N3b3JkJyxcbiAgICAgIHN1YnNjcmliZUV2ZW50OiAnc2hvd1RpcFBhc3N3b3JkJyxcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tbG9naW4vaW5kZXguanMiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tbG9naW4vc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybS1sb2dpbl9fZW1haWwtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDsgfVxcblxcbi5mb3JtLWxvZ2luX19zdWJtaXQtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3JjL2NvbXBvbmVudHMvZm9ybXMvZm9ybS1sb2dpbi9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvRmlsbVJlbnRhbC93ZWItcHJvamVjdHMvc2ltYmlvei1mcm9udC1lbmQvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiPGZvcm0gY2xhc3M9XFxcImZvcm0tbG9naW5cXFwiXFxuICAgICAgZGF0YS1jb21wb25lbnQ9XFxcImZvcm0tbG9naW5cXFwiPlxcblxcbiAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWxhYmVsIGZvcm0tbG9naW5fX2xhYmVsXFxcIlxcbiAgICAgICAgIGZvcj1cXFwiZW1haWxcXFwiPlxcbiAg0J/QvtGH0YLQsFxcbiAgPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tbG9naW5fX3RpcC1jb250YWluZXJcXFwiXFxuICAgICAgIGRhdGEtZWxlbWVudD1cXFwiZm9ybS1sb2dpbl9fdGlwLWVtYWlsLWNvbnRhaW5lclxcXCI+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tbG9naW5fX2VtYWlsLWNvbnRhaW5lclxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJmb3JtLWxvZ2luX19lbWFpbC1jb250YWluZXJcXFwiPlxcbiAgPC9kaXY+XFxuXFxuICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tbGFiZWwgZm9ybS1sb2dpbl9fbGFiZWxcXFwiXFxuICAgICAgICAgZm9yPVxcXCJwYXNzd29yZFxcXCI+XFxuICDQn9Cw0YDQvtC70YxcXG4gIDwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWxvZ2luX190aXAtY29udGFpbmVyXFxcIlxcbiAgICAgICBkYXRhLWVsZW1lbnQ9XFxcImZvcm0tbG9naW5fX3RpcC1wYXNzd29yZC1jb250YWluZXJcXFwiPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWxvZ2luX19wYXNzd29yZC1jb250YWluZXJcXFwiXFxuICAgICAgIGRhdGEtZWxlbWVudD1cXFwiZm9ybS1sb2dpbl9fcGFzc3dvcmQtY29udGFpbmVyXFxcIj5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1sb2dpbl9fc3VibWl0LWNvbnRhaW5lclxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJmb3JtLWxvZ2luX19zdWJtaXQtY29udGFpbmVyXFxcIj5cXG4gIDwvZGl2PlxcbjwvZm9ybT5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9ybXMvZm9ybS1sb2dpbi90ZW1wbGF0ZS5oYnNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9GaWxtUmVudGFsL3dlYi1wcm9qZWN0cy9zaW1iaW96LWZyb250LWVuZC9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJsb2dpblxcXCJcXG4gICAgIGRhdGEtY29tcG9uZW50PVxcXCJsb2dpblxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJsb2dpbl9fbWFpbi1jb250YWluZXJcXFwiXFxuICAgICAgIGRhdGEtZWxlbWVudD1cXFwibG9naW5fX21haW4tY29udGFpbmVyXFxcIj5cXG4gICAgPGgxIGNsYXNzPVxcXCJsb2dpbl9fZGVzY3JpYmVcXFwiPlxcbiAgICDQktGF0L7QtFxcbiAgICA8L2gxPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsb2dpbl9fZm9ybS1jb250YWluZXJcXFwiXFxuICAgICAgICAgZGF0YS1lbGVtZW50PVxcXCJsb2dpbl9fZm9ybS1jb250YWluZXJcXFwiPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9sb2dpbi90ZW1wbGF0ZS5oYnNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBVEE7QUFZQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFqQkE7QUFDQTtBQW1CQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQW5CQTtBQW1CQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBVUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFVQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7OztBQTVLQTtBQUNBOzs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=