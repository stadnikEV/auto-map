webpackJsonp([2],{

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pubsubJs = _interopRequireDefault(__webpack_require__(6));

var _baseComponent = _interopRequireDefault(__webpack_require__(4));

__webpack_require__(68);

var _formLogin = _interopRequireDefault(__webpack_require__(75));

var _template = _interopRequireDefault(__webpack_require__(99));

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
      var email = _ref2.email,
          password = _ref2.password;
      console.log(email, password); // fetch('http://localhost:8080/registration', {
      //   method: 'post',
      //   credentials: 'include',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     userName: 'jeka3',
      //     email: 'stadnik24fps3@gmail.com',
      //     password: '12345',
      //   }),
      // })
      //   .then((response) => {
      //     const json = response.json();
      //     // return Promise.reject(json);
      //     return json;
      //   })
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  }]);

  return Login;
}(_baseComponent.default);

module.exports = Login;

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pubsubJs = _interopRequireDefault(__webpack_require__(6));

var _baseComponent = _interopRequireDefault(__webpack_require__(4));

__webpack_require__(69);

__webpack_require__(77);

var _tipInline = _interopRequireDefault(__webpack_require__(70));

var _template = _interopRequireDefault(__webpack_require__(82));

var _buttonSubmit = _interopRequireDefault(__webpack_require__(71));

var _inputEmail = _interopRequireDefault(__webpack_require__(72));

var _inputPassword = _interopRequireDefault(__webpack_require__(73));

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

          console.log('submit');
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

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(78);

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

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".form-login__email-container {\n  margin-bottom: 8px; }\n\n.form-login__submit-container {\n  margin-top: 15px; }\n", ""]);

// exports


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form class=\"form-login\"\n      data-component=\"form-login\">\n\n  <label class=\"form-label form-login__label\"\n         for=\"email\">\n  Почта\n  </label>\n  <div class=\"form-login__tip-container\"\n       data-element=\"form-login__tip-email-container\">\n  </div>\n  <div class=\"form-login__email-container\"\n       data-element=\"form-login__email-container\">\n  </div>\n\n  <label class=\"form-label form-login__label\"\n         for=\"password\">\n  Пароль\n  </label>\n  <div class=\"form-login__tip-container\"\n       data-element=\"form-login__tip-password-container\">\n  </div>\n  <div class=\"form-login__password-container\"\n       data-element=\"form-login__password-container\">\n  </div>\n\n  <div class=\"form-login__submit-container\"\n       data-element=\"form-login__submit-container\">\n  </div>\n</form>\n";
},"useData":true});

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"login\"\n     data-component=\"login\">\n  <div class=\"login__main-container\"\n       data-element=\"login__main-container\">\n    <h1 class=\"login__describe\">\n    Вход\n    </h1>\n    <div class=\"login__form-container\"\n         data-element=\"login__form-container\">\n    </div>\n  </div>\n</div>\n";
},"useData":true});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZHJpdmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2xvZ2luL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLWxvZ2luL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tbG9naW4vc3R5bGUuc2Nzcz81NWIwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tbG9naW4vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLWxvZ2luL3RlbXBsYXRlLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dpbi90ZW1wbGF0ZS5oYnMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWNvbXBvbmVudCc7XG5pbXBvcnQgJ2NvbXBvbmVudHMvX19zaGFyZWQvbG9naW4tcmVnaXN0cmF0aW9uL3N0eWxlLnNjc3MnOyAvLyBjc3NcbmltcG9ydCBGb3JtTG9naW4gZnJvbSAnLi4vZm9ybXMvZm9ybS1sb2dpbic7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZS5oYnMnO1xuXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgZWwgfSkge1xuICAgIHN1cGVyKHsgZWwgfSk7XG4gICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgdGhpcy5ldmVudHNQdWJTdWIgPSB7fTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5lbGVtZW50cy5sb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbXBvbmVudD1cImxvZ2luXCJdJyk7XG4gICAgdGhpcy5lbGVtZW50cy5Gb3JtQ29udGFpbmVyID0gdGhpcy5lbGVtZW50cy5sb2dpbi5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwibG9naW5fX2Zvcm0tY29udGFpbmVyXCJdJyk7XG5cbiAgICB0aGlzLmNvbXBvbmVudHMuZm9ybUxvZ2luID0gbmV3IEZvcm1Mb2dpbih7XG4gICAgICBlbDogdGhpcy5lbGVtZW50cy5Gb3JtQ29udGFpbmVyLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRFdmVudHMoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRlbXBsYXRlKCk7XG4gIH1cblxuICBhZGRFdmVudHMoKSB7XG4gICAgdGhpcy5ldmVudHNQdWJTdWIuZm9ybUxvZ2luRGF0YSA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2Zvcm0tbG9naW4tZGF0YScsIHRoaXMub25TZW5kRGF0YS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50cygpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBvblNlbmREYXRhKG1zZywgeyBlbWFpbCwgcGFzc3dvcmQgfSkge1xuICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XG4gICAgLy8gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZWdpc3RyYXRpb24nLCB7XG4gICAgLy8gICBtZXRob2Q6ICdwb3N0JyxcbiAgICAvLyAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgLy8gICBoZWFkZXJzOiB7XG4gICAgLy8gICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgLy8gICB9LFxuICAgIC8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgIC8vICAgICB1c2VyTmFtZTogJ2pla2EzJyxcbiAgICAvLyAgICAgZW1haWw6ICdzdGFkbmlrMjRmcHMzQGdtYWlsLmNvbScsXG4gICAgLy8gICAgIHBhc3N3b3JkOiAnMTIzNDUnLFxuICAgIC8vICAgfSksXG4gICAgLy8gfSlcbiAgICAvLyAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIC8vICAgICBjb25zdCBqc29uID0gcmVzcG9uc2UuanNvbigpO1xuICAgIC8vICAgICAvLyByZXR1cm4gUHJvbWlzZS5yZWplY3QoanNvbik7XG4gICAgLy8gICAgIHJldHVybiBqc29uO1xuICAgIC8vICAgfSlcbiAgICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vICAgfSlcbiAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgLy8gICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2xvZ2luL2luZGV4LmpzIiwiaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWNvbXBvbmVudCc7XG5pbXBvcnQgJ2NvbXBvbmVudHMvX19zaGFyZWQvZm9ybS9zdHlsZS5zY3NzJzsgLy8gY3NzXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7IC8vIGNzc1xuaW1wb3J0IFRpcElubGluZSBmcm9tICcuLi8uLi90aXAtaW5saW5lJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLmhicyc7IC8vIHRlbXBsYXRlXG5pbXBvcnQgQnV0dG9uU3VibWl0IGZyb20gJy4uLy4uL2J1dHRvbnMvYnV0dG9uLXN1Ym1pdCc7XG5pbXBvcnQgSW5wdXRFbWFpbCBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXQtZW1haWwnO1xuaW1wb3J0IElucHV0UGFzc3dvcmQgZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0LXBhc3N3b3JkJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtTG9naW4gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyBlbCB9KSB7XG4gICAgc3VwZXIoeyBlbCB9KTtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY29tcG9uZW50PVwiZm9ybS1sb2dpblwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMuZW1haWxDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tbG9naW5fX2VtYWlsLWNvbnRhaW5lclwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMucGFzc3dvcmRDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tbG9naW5fX3Bhc3N3b3JkLWNvbnRhaW5lclwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMudGlwRW1haWxDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tbG9naW5fX3RpcC1lbWFpbC1jb250YWluZXJcIl0nKTtcbiAgICB0aGlzLmVsZW1lbnRzLnRpcFBhc3N3b3JkQ29udGFpbmVyID0gdGhpcy5lbGVtZW50cy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtLWxvZ2luX190aXAtcGFzc3dvcmQtY29udGFpbmVyXCJdJyk7XG4gICAgdGhpcy5lbGVtZW50cy5idXR0b25TdWJtaXRDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tbG9naW5fX3N1Ym1pdC1jb250YWluZXJcIl0nKTtcblxuICAgIHRoaXMuaW5pdENvbXBvbmVudElucHV0RW1haWwoKTtcbiAgICB0aGlzLmluaXRDb21wb25lbnRJbnB1dFBhc3N3b3JkKCk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50VGlwRW1haWwoKTtcbiAgICB0aGlzLmluaXRDb21wb25lbnRUaXBQYXNzd29yZCgpO1xuICAgIHRoaXMuaW5pdENvbXBvbmVudEJ1dHRvblN1Ym1pdCgpO1xuXG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRFdmVudHMoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRlbXBsYXRlKCk7XG4gIH1cblxuXG4gIGFkZEV2ZW50cygpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICB9XG5cblxuICByZW1vdmVFdmVudHMoKSB7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgfVxuXG5cbiAgb25DbGljayhlKSB7XG4gICAgY29uc3Qgc3VibWl0ID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtY29tcG9uZW50PVwiYnV0dG9uLXN1Ym1pdC1sb2dpblwiXScpO1xuXG4gICAgaWYgKHN1Ym1pdCkge1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmZvcm0uY29udGFpbnMoc3VibWl0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vINC30LDQv9GA0LXRidCw0LXRgiDRgdGA0LDQsdCw0YLRi9Cy0LDQvdC40LUg0YHQvtCx0YvRgtC40Y8gXCJzdWJtaXRcIlxuXG4gICAgICBpZiAodGhpcy5pblNlbmRQcm9jZXNzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZW1haWxTdGF0dXMgPSB0aGlzLmNvbXBvbmVudHMuaW5wdXRFbWFpbC52YWxpZGF0aW9uKCk7XG4gICAgICBjb25zdCBwYXNzd29yZFN0YXR1cyA9IHRoaXMuY29tcG9uZW50cy5pbnB1dFBhc3N3b3JkLnZhbGlkYXRpb24oKTtcblxuICAgICAgdGhpcy50aXBIZW5kbGVyKHtcbiAgICAgICAgaXNWYWxpZDogZW1haWxTdGF0dXMuaXNWYWxpZCxcbiAgICAgICAgbWVzc2FnZTogZW1haWxTdGF0dXMubWVzc2FnZSxcbiAgICAgICAgdGlwTmFtZTogJ3RpcEVtYWlsJyxcbiAgICAgIH0pO1xuICAgICAgdGhpcy50aXBIZW5kbGVyKHtcbiAgICAgICAgaXNWYWxpZDogcGFzc3dvcmRTdGF0dXMuaXNWYWxpZCxcbiAgICAgICAgbWVzc2FnZTogcGFzc3dvcmRTdGF0dXMubWVzc2FnZSxcbiAgICAgICAgdGlwTmFtZTogJ3RpcFBhc3N3b3JkJyxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNldEZvY3VzKHtcbiAgICAgICAgaXNWYWxpZEVtYWlsOiBlbWFpbFN0YXR1cy5pc1ZhbGlkLFxuICAgICAgICBpc1ZhbGlkUGFzc3dvcmQ6IHBhc3N3b3JkU3RhdHVzLmlzVmFsaWQsXG4gICAgICB9KTtcblxuICAgICAgaWYgKGVtYWlsU3RhdHVzLmlzVmFsaWRcbiAgICAgICYmIHBhc3N3b3JkU3RhdHVzLmlzVmFsaWQpIHtcbiAgICAgICAgdGhpcy5mb3JtRGlzYWJsZSgpO1xuICAgICAgICBQdWJTdWIucHVibGlzaCgnZm9ybS1sb2dpbi1kYXRhJywge1xuICAgICAgICAgIGVtYWlsOiB0aGlzLmNvbXBvbmVudHMuaW5wdXRFbWFpbC5nZXREYXRhKCksXG4gICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuY29tcG9uZW50cy5pbnB1dFBhc3N3b3JkLmdldERhdGEoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aXBIZW5kbGVyKHsgaXNWYWxpZCwgbWVzc2FnZSwgdGlwTmFtZSB9KSB7XG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aXBOYW1lXS5zaG93VGlwKHsgbWVzc2FnZTogJycgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29tcG9uZW50c1t0aXBOYW1lXS5zaG93VGlwKHsgbWVzc2FnZSB9KTtcbiAgfVxuXG5cbiAgc2V0Rm9jdXMoeyBpc1ZhbGlkRW1haWwsIGlzVmFsaWRQYXNzd29yZCB9KSB7XG4gICAgaWYgKCFpc1ZhbGlkRW1haWwpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5pbnB1dEVtYWlsLnNldEZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghaXNWYWxpZFBhc3N3b3JkKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuaW5wdXRQYXNzd29yZC5zZXRGb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG4gIGZvcm1EaXNhYmxlKCkge1xuICAgIHRoaXMuaW5TZW5kUHJvY2VzcyA9IHRydWU7XG4gICAgdGhpcy5jb21wb25lbnRzLmlucHV0RW1haWwuZGlzYWJsZSgpO1xuICAgIHRoaXMuY29tcG9uZW50cy5pbnB1dFBhc3N3b3JkLmRpc2FibGUoKTtcbiAgfVxuXG5cbiAgaW5pdENvbXBvbmVudElucHV0RW1haWwoKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLmlucHV0RW1haWwgPSBuZXcgSW5wdXRFbWFpbCh7XG4gICAgICBlbDogdGhpcy5lbGVtZW50cy5lbWFpbENvbnRhaW5lcixcbiAgICAgIGNvbXBvbmVudE5hbWU6ICdpbnB1dC1lbWFpbCcsXG4gICAgICBpZDogJ2VtYWlsJyxcbiAgICB9KTtcbiAgfVxuXG5cbiAgaW5pdENvbXBvbmVudElucHV0UGFzc3dvcmQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLmlucHV0UGFzc3dvcmQgPSBuZXcgSW5wdXRQYXNzd29yZCh7XG4gICAgICBlbDogdGhpcy5lbGVtZW50cy5wYXNzd29yZENvbnRhaW5lcixcbiAgICAgIGNvbXBvbmVudE5hbWU6ICdpbnB1dC1wYXNzd29yZCcsXG4gICAgICBpZDogJ3Bhc3N3b3JkJyxcbiAgICB9KTtcbiAgfVxuXG5cbiAgaW5pdENvbXBvbmVudFRpcEVtYWlsKCkge1xuICAgIHRoaXMuY29tcG9uZW50cy50aXBFbWFpbCA9IG5ldyBUaXBJbmxpbmUoe1xuICAgICAgZWw6IHRoaXMuZWxlbWVudHMudGlwRW1haWxDb250YWluZXIsXG4gICAgICBjb21wb25lbnROYW1lOiAndGlwLWlubGluZS1lbWFpbCcsXG4gICAgfSk7XG4gIH1cblxuXG4gIGluaXRDb21wb25lbnRUaXBQYXNzd29yZCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMudGlwUGFzc3dvcmQgPSBuZXcgVGlwSW5saW5lKHtcbiAgICAgIGVsOiB0aGlzLmVsZW1lbnRzLnRpcFBhc3N3b3JkQ29udGFpbmVyLFxuICAgICAgY29tcG9uZW50TmFtZTogJ3RpcC1pbmxpbmUtcGFzc3dvcmQnLFxuICAgIH0pO1xuICB9XG5cblxuICBpbml0Q29tcG9uZW50QnV0dG9uU3VibWl0KCkge1xuICAgIHRoaXMuY29tcG9uZW50cy5idXR0b25TdWJtaXQgPSBuZXcgQnV0dG9uU3VibWl0KHtcbiAgICAgIGVsOiB0aGlzLmVsZW1lbnRzLmJ1dHRvblN1Ym1pdENvbnRhaW5lcixcbiAgICAgIGNvbXBvbmVudE5hbWU6ICdidXR0b24tc3VibWl0LWxvZ2luJyxcbiAgICAgIHZhbHVlOiAn0JLQntCZ0KLQmCcsXG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLWxvZ2luL2luZGV4LmpzIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zdHlsZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLWxvZ2luL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvcm0tbG9naW5fX2VtYWlsLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7IH1cXG5cXG4uZm9ybS1sb2dpbl9fc3VibWl0LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxNXB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3NyYy9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tbG9naW4vc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL0ZpbG1SZW50YWwvd2ViLXByb2plY3RzL3NpbWJpb3ovc2ltYmlvei1mcm9udC1lbmQvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiPGZvcm0gY2xhc3M9XFxcImZvcm0tbG9naW5cXFwiXFxuICAgICAgZGF0YS1jb21wb25lbnQ9XFxcImZvcm0tbG9naW5cXFwiPlxcblxcbiAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWxhYmVsIGZvcm0tbG9naW5fX2xhYmVsXFxcIlxcbiAgICAgICAgIGZvcj1cXFwiZW1haWxcXFwiPlxcbiAg0J/QvtGH0YLQsFxcbiAgPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tbG9naW5fX3RpcC1jb250YWluZXJcXFwiXFxuICAgICAgIGRhdGEtZWxlbWVudD1cXFwiZm9ybS1sb2dpbl9fdGlwLWVtYWlsLWNvbnRhaW5lclxcXCI+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tbG9naW5fX2VtYWlsLWNvbnRhaW5lclxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJmb3JtLWxvZ2luX19lbWFpbC1jb250YWluZXJcXFwiPlxcbiAgPC9kaXY+XFxuXFxuICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tbGFiZWwgZm9ybS1sb2dpbl9fbGFiZWxcXFwiXFxuICAgICAgICAgZm9yPVxcXCJwYXNzd29yZFxcXCI+XFxuICDQn9Cw0YDQvtC70YxcXG4gIDwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWxvZ2luX190aXAtY29udGFpbmVyXFxcIlxcbiAgICAgICBkYXRhLWVsZW1lbnQ9XFxcImZvcm0tbG9naW5fX3RpcC1wYXNzd29yZC1jb250YWluZXJcXFwiPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWxvZ2luX19wYXNzd29yZC1jb250YWluZXJcXFwiXFxuICAgICAgIGRhdGEtZWxlbWVudD1cXFwiZm9ybS1sb2dpbl9fcGFzc3dvcmQtY29udGFpbmVyXFxcIj5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1sb2dpbl9fc3VibWl0LWNvbnRhaW5lclxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJmb3JtLWxvZ2luX19zdWJtaXQtY29udGFpbmVyXFxcIj5cXG4gIDwvZGl2PlxcbjwvZm9ybT5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9ybXMvZm9ybS1sb2dpbi90ZW1wbGF0ZS5oYnNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9GaWxtUmVudGFsL3dlYi1wcm9qZWN0cy9zaW1iaW96L3NpbWJpb3otZnJvbnQtZW5kL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImxvZ2luXFxcIlxcbiAgICAgZGF0YS1jb21wb25lbnQ9XFxcImxvZ2luXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImxvZ2luX19tYWluLWNvbnRhaW5lclxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJsb2dpbl9fbWFpbi1jb250YWluZXJcXFwiPlxcbiAgICA8aDEgY2xhc3M9XFxcImxvZ2luX19kZXNjcmliZVxcXCI+XFxuICAgINCS0YXQvtC0XFxuICAgIDwvaDE+XFxuICAgIDxkaXYgY2xhc3M9XFxcImxvZ2luX19mb3JtLWNvbnRhaW5lclxcXCJcXG4gICAgICAgICBkYXRhLWVsZW1lbnQ9XFxcImxvZ2luX19mb3JtLWNvbnRhaW5lclxcXCI+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2xvZ2luL3RlbXBsYXRlLmhic1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBZEE7QUFjQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUF0REE7QUFDQTtBQXdEQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXBCQTtBQW9CQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7OztBQXRKQTtBQUNBOzs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=