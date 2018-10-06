webpackJsonp([1],{

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pubsubJs = _interopRequireDefault(__webpack_require__(4));

var _baseComponent = _interopRequireDefault(__webpack_require__(7));

__webpack_require__(93);

__webpack_require__(125);

var _tipInline = _interopRequireDefault(__webpack_require__(94));

var _template = _interopRequireDefault(__webpack_require__(127));

var _buttonSubmit = _interopRequireDefault(__webpack_require__(95));

var _inputName = _interopRequireDefault(__webpack_require__(128));

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

var FormRegistration =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(FormRegistration, _BaseComponent);

  function FormRegistration(_ref) {
    var _this;

    var el = _ref.el;

    _classCallCheck(this, FormRegistration);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormRegistration).call(this, {
      el: el
    }));
    _this.components = {};

    _this.render();

    _this.elements.form = document.querySelector('[data-component="form-registration"]');
    _this.elements.nameContainer = _this.elements.form.querySelector('[data-element="form-registration__name-container"]');
    _this.elements.emailContainer = _this.elements.form.querySelector('[data-element="form-registration__email-container"]');
    _this.elements.passwordContainer = _this.elements.form.querySelector('[data-element="form-registration__password-container"]');
    _this.elements.tipNameContainer = _this.elements.form.querySelector('[data-element="form-registration__tip-name-container"]');
    _this.elements.tipEmailContainer = _this.elements.form.querySelector('[data-element="form-registration__tip-email-container"]');
    _this.elements.tipPasswordContainer = _this.elements.form.querySelector('[data-element="form-registration__tip-password-container"]');
    _this.elements.buttonSubmitContainer = _this.elements.form.querySelector('[data-element="form-registration__submit-container"]');

    _this.initComponentInputName();

    _this.initComponentInputEmail();

    _this.initComponentInputPassword();

    _this.initComponentTipName();

    _this.initComponentTipEmail();

    _this.initComponentTipPassword();

    _this.initComponentButtonSubmit();

    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.addEvents();

    _this.addEvents();

    return _this;
  }

  _createClass(FormRegistration, [{
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
      var submit = e.target.closest('[data-component="button-submit-registration"]');

      if (submit) {
        if (!this.elements.form.contains(submit)) {
          return;
        }

        e.preventDefault(); // запрещает срабатывание события "submit"

        if (this.inSendProcess) {
          return;
        }

        var nameStatus = this.components.inputName.validation();
        var emailStatus = this.components.inputEmail.validation();
        var passwordStatus = this.components.inputPassword.validation();
        this.tipHendler({
          isValid: nameStatus.isValid,
          message: nameStatus.message,
          tipName: 'tipName'
        });
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
          isValidName: nameStatus.isValid,
          isValidEmail: emailStatus.isValid,
          isValidPassword: passwordStatus.isValid
        });

        if (emailStatus.isValid && passwordStatus.isValid) {
          _pubsubJs.default.publish('form-registration-data', {
            userName: this.components.inputName.getData(),
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
      var isValidName = _ref3.isValidName,
          isValidEmail = _ref3.isValidEmail,
          isValidPassword = _ref3.isValidPassword;

      if (!isValidName) {
        this.components.inputName.setFocus();
        return;
      }

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
      this.components.inputName.disable();
      this.components.inputEmail.disable();
      this.components.inputPassword.disable();
    }
  }, {
    key: "formEnable",
    value: function formEnable() {
      this.inSendProcess = false;
      this.components.inputName.enable();
      this.components.inputEmail.enable();
      this.components.inputPassword.enable();
    }
  }, {
    key: "initComponentInputName",
    value: function initComponentInputName() {
      this.components.inputName = new _inputName.default({
        el: this.elements.nameContainer,
        componentName: 'input-name',
        id: 'name'
      });
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
    key: "initComponentTipName",
    value: function initComponentTipName() {
      this.components.tipName = new _tipInline.default({
        el: this.elements.tipNameContainer,
        componentName: 'tip-inline-name'
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
        componentName: 'button-submit-registration',
        value: 'ДАЛЕЕ'
      });
    }
  }]);

  return FormRegistration;
}(_baseComponent.default);

exports.default = FormRegistration;

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(126);

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

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".form-registration__name-container {\n  margin-bottom: 8px; }\n\n.form-registration__email-container {\n  margin-bottom: 8px; }\n\n.form-registration__submit-container {\n  margin-top: 15px;\n  float: right; }\n\n.form-registration::after {\n  content: '';\n  clear: both;\n  display: block; }\n", ""]);

// exports


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form class=\"form-registration\"\n      data-component=\"form-registration\">\n\n  <label class=\"form-label form-registration__label\"\n         for=\"name\">\n  Имя:\n  </label>\n  <div class=\"form-registration__tip-container\"\n       data-element=\"form-registration__tip-name-container\">\n  </div>\n  <div class=\"form-registration__name-container\"\n       data-element=\"form-registration__name-container\">\n  </div>\n\n  <label class=\"form-label form-registration__label\"\n         for=\"email\">\n  Почта\n  </label>\n  <div class=\"form-registration__tip-container\"\n       data-element=\"form-registration__tip-email-container\">\n  </div>\n  <div class=\"form-registration__email-container\"\n       data-element=\"form-registration__email-container\">\n  </div>\n\n  <label class=\"form-label form-registration__label\"\n         for=\"password\">\n  Пароль\n  </label>\n  <div class=\"form-registration__tip-container\"\n       data-element=\"form-registration__tip-password-container\">\n  </div>\n  <div class=\"form-registration__password-container\"\n       data-element=\"form-registration__password-container\">\n  </div>\n\n  <div class=\"form-registration__submit-container\"\n       data-element=\"form-registration__submit-container\">\n  </div>\n</form>\n";
},"useData":true});

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseInput = _interopRequireDefault(__webpack_require__(89));

__webpack_require__(90);

var _validationName = _interopRequireDefault(__webpack_require__(129));

var _template = _interopRequireDefault(__webpack_require__(130));

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

// template
var InputName =
/*#__PURE__*/
function (_BaseInput) {
  _inherits(InputName, _BaseInput);

  function InputName(_ref) {
    var _this;

    var el = _ref.el,
        componentName = _ref.componentName,
        id = _ref.id;

    _classCallCheck(this, InputName);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputName).call(this, {
      el: el
    }));

    _this.render({
      componentName: componentName,
      id: id
    });

    _this.elements.input = document.querySelector("[data-component=\"".concat(componentName, "\"]"));
    return _this;
  }

  _createClass(InputName, [{
    key: "render",
    value: function render(_ref2) {
      var componentName = _ref2.componentName,
          id = _ref2.id;
      this.el.innerHTML = (0, _template.default)({
        componentName: componentName,
        id: id
      });
    }
  }, {
    key: "validation",
    value: function validation() {
      var nameStatus = (0, _validationName.default)({
        value: this.elements.input.value
      });
      this.backlightValid({
        isValid: nameStatus.isValid
      });
      return nameStatus;
    }
  }]);

  return InputName;
}(_baseInput.default);

exports.default = InputName;

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _patternRegExp = _interopRequireDefault(__webpack_require__(91));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var value = _ref.value;

  if (value.search(_patternRegExp.default.empty) === 0) {
    return {
      message: 'Введите имя',
      isValid: false
    };
  }

  if (value.search(_patternRegExp.default.maxLengthName) === -1) {
    return {
      message: 'Имя не должно превышать 20 символов',
      isValid: false
    };
  }

  return {
    message: null,
    isValid: true
  };
};

exports.default = _default;

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input class=\"input input-name\"\n       data-component=\""
    + alias4(((helper = (helper = helpers.componentName || (depth0 != null ? depth0.componentName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentName","hash":{},"data":data}) : helper)))
    + "\"\n       type=\"text\"\n       id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n";
},"useData":true});

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"registration\"\n     data-component=\"registration\">\n  <div class=\"registration__main-container\">\n    <h1 class=\"registration__describe\">\n    Создание Аккаунта\n    </h1>\n    <div class=\"registration__form-container\"\n         data-element=\"registration__form-container\">\n    </div>\n  </div>\n</div>\n";
},"useData":true});

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pubsubJs = _interopRequireDefault(__webpack_require__(4));

var _router = _interopRequireDefault(__webpack_require__(5));

var _driverApi = _interopRequireDefault(__webpack_require__(9));

var _httpError = _interopRequireDefault(__webpack_require__(13));

var _baseComponent = _interopRequireDefault(__webpack_require__(7));

__webpack_require__(92);

var _formRegistration = _interopRequireDefault(__webpack_require__(124));

var _template = _interopRequireDefault(__webpack_require__(131));

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

var Registration =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Registration, _BaseComponent);

  function Registration(_ref) {
    var _this;

    var el = _ref.el;

    _classCallCheck(this, Registration);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Registration).call(this, {
      el: el
    }));
    _this.components = {};
    _this.eventsPubSub = {};

    _this.render();

    _this.elements.registration = document.querySelector('[data-component="registration"]');
    _this.elements.FormContainer = _this.elements.registration.querySelector('[data-element="registration__form-container"]');
    _this.components.formRegistration = new _formRegistration.default({
      el: _this.elements.FormContainer
    });

    _this.addEvents();

    return _this;
  }

  _createClass(Registration, [{
    key: "render",
    value: function render() {
      this.el.innerHTML = (0, _template.default)();
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      this.eventsPubSub.formRegistratioData = _pubsubJs.default.subscribe('form-registration-data', this.onSendData.bind(this));
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

      var userName = _ref2.userName,
          email = _ref2.email,
          password = _ref2.password;
      this.components.formRegistration.formDisable();

      _driverApi.default.registration({
        userName: userName,
        email: email,
        password: password
      }).then(function () {
        _router.default.setRouteHash({
          routeHash: 'application'
        });

        _router.default.setUserStatus('login');
      }).catch(function (err) {
        _this2.components.formRegistration.formEnable();

        if (err instanceof _httpError.default) {
          if (err.status === 403) {
            _this2.components.formRegistration.tipHendler({
              isValid: false,
              message: 'email уже зарегистрирован',
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

  return Registration;
}(_baseComponent.default);

module.exports = Registration;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLWRyaXZlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLXJlZ2lzdHJhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLXJlZ2lzdHJhdGlvbi9zdHlsZS5zY3NzP2E0NmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvZm9ybS1yZWdpc3RyYXRpb24vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLXJlZ2lzdHJhdGlvbi90ZW1wbGF0ZS5oYnMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2lucHV0cy9pbnB1dC1uYW1lL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pbnB1dHMvaW5wdXQtbmFtZS92YWxpZGF0aW9uLW5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL2lucHV0LW5hbWUvdGVtcGxhdGUuaGJzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi90ZW1wbGF0ZS5oYnMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL19fc2hhcmVkL2Jhc2UtY29tcG9uZW50JztcbmltcG9ydCAnY29tcG9uZW50cy9fX3NoYXJlZC9mb3JtL3N0eWxlLnNjc3MnOyAvLyBjc3NcbmltcG9ydCAnLi9zdHlsZS5zY3NzJzsgLy8gY3NzXG5pbXBvcnQgVGlwSW5saW5lIGZyb20gJy4uLy4uL3RpcC1pbmxpbmUnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUuaGJzJzsgLy8gdGVtcGxhdGVcbmltcG9ydCBCdXR0b25TdWJtaXQgZnJvbSAnLi4vLi4vYnV0dG9ucy9idXR0b24tc3VibWl0JztcbmltcG9ydCBJbnB1dE5hbWUgZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0LW5hbWUnO1xuaW1wb3J0IElucHV0RW1haWwgZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0LWVtYWlsJztcbmltcG9ydCBJbnB1dFBhc3N3b3JkIGZyb20gJy4uLy4uL2lucHV0cy9pbnB1dC1wYXNzd29yZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1SZWdpc3RyYXRpb24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyBlbCB9KSB7XG4gICAgc3VwZXIoeyBlbCB9KTtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY29tcG9uZW50PVwiZm9ybS1yZWdpc3RyYXRpb25cIl0nKTtcblxuICAgIHRoaXMuZWxlbWVudHMubmFtZUNvbnRhaW5lciA9IHRoaXMuZWxlbWVudHMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiZm9ybS1yZWdpc3RyYXRpb25fX25hbWUtY29udGFpbmVyXCJdJyk7XG4gICAgdGhpcy5lbGVtZW50cy5lbWFpbENvbnRhaW5lciA9IHRoaXMuZWxlbWVudHMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiZm9ybS1yZWdpc3RyYXRpb25fX2VtYWlsLWNvbnRhaW5lclwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMucGFzc3dvcmRDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tcmVnaXN0cmF0aW9uX19wYXNzd29yZC1jb250YWluZXJcIl0nKTtcbiAgICB0aGlzLmVsZW1lbnRzLnRpcE5hbWVDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tcmVnaXN0cmF0aW9uX190aXAtbmFtZS1jb250YWluZXJcIl0nKTtcbiAgICB0aGlzLmVsZW1lbnRzLnRpcEVtYWlsQ29udGFpbmVyID0gdGhpcy5lbGVtZW50cy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtLXJlZ2lzdHJhdGlvbl9fdGlwLWVtYWlsLWNvbnRhaW5lclwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMudGlwUGFzc3dvcmRDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tcmVnaXN0cmF0aW9uX190aXAtcGFzc3dvcmQtY29udGFpbmVyXCJdJyk7XG4gICAgdGhpcy5lbGVtZW50cy5idXR0b25TdWJtaXRDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tcmVnaXN0cmF0aW9uX19zdWJtaXQtY29udGFpbmVyXCJdJyk7XG5cbiAgICB0aGlzLmluaXRDb21wb25lbnRJbnB1dE5hbWUoKTtcbiAgICB0aGlzLmluaXRDb21wb25lbnRJbnB1dEVtYWlsKCk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50SW5wdXRQYXNzd29yZCgpO1xuICAgIHRoaXMuaW5pdENvbXBvbmVudFRpcE5hbWUoKTtcbiAgICB0aGlzLmluaXRDb21wb25lbnRUaXBFbWFpbCgpO1xuICAgIHRoaXMuaW5pdENvbXBvbmVudFRpcFBhc3N3b3JkKCk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50QnV0dG9uU3VibWl0KCk7XG5cbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEV2ZW50cygpO1xuICAgIHRoaXMuYWRkRXZlbnRzKCk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRlbXBsYXRlKCk7XG4gIH1cblxuXG4gIGFkZEV2ZW50cygpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICB9XG5cblxuICByZW1vdmVFdmVudHMoKSB7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgfVxuXG5cbiAgb25DbGljayhlKSB7XG4gICAgY29uc3Qgc3VibWl0ID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtY29tcG9uZW50PVwiYnV0dG9uLXN1Ym1pdC1yZWdpc3RyYXRpb25cIl0nKTtcblxuICAgIGlmIChzdWJtaXQpIHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50cy5mb3JtLmNvbnRhaW5zKHN1Ym1pdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQt9Cw0L/RgNC10YnQsNC10YIg0YHRgNCw0LHQsNGC0YvQstCw0L3QuNC1INGB0L7QsdGL0YLQuNGPIFwic3VibWl0XCJcblxuICAgICAgaWYgKHRoaXMuaW5TZW5kUHJvY2Vzcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5hbWVTdGF0dXMgPSB0aGlzLmNvbXBvbmVudHMuaW5wdXROYW1lLnZhbGlkYXRpb24oKTtcbiAgICAgIGNvbnN0IGVtYWlsU3RhdHVzID0gdGhpcy5jb21wb25lbnRzLmlucHV0RW1haWwudmFsaWRhdGlvbigpO1xuICAgICAgY29uc3QgcGFzc3dvcmRTdGF0dXMgPSB0aGlzLmNvbXBvbmVudHMuaW5wdXRQYXNzd29yZC52YWxpZGF0aW9uKCk7XG5cbiAgICAgIHRoaXMudGlwSGVuZGxlcih7XG4gICAgICAgIGlzVmFsaWQ6IG5hbWVTdGF0dXMuaXNWYWxpZCxcbiAgICAgICAgbWVzc2FnZTogbmFtZVN0YXR1cy5tZXNzYWdlLFxuICAgICAgICB0aXBOYW1lOiAndGlwTmFtZScsXG4gICAgICB9KTtcbiAgICAgIHRoaXMudGlwSGVuZGxlcih7XG4gICAgICAgIGlzVmFsaWQ6IGVtYWlsU3RhdHVzLmlzVmFsaWQsXG4gICAgICAgIG1lc3NhZ2U6IGVtYWlsU3RhdHVzLm1lc3NhZ2UsXG4gICAgICAgIHRpcE5hbWU6ICd0aXBFbWFpbCcsXG4gICAgICB9KTtcbiAgICAgIHRoaXMudGlwSGVuZGxlcih7XG4gICAgICAgIGlzVmFsaWQ6IHBhc3N3b3JkU3RhdHVzLmlzVmFsaWQsXG4gICAgICAgIG1lc3NhZ2U6IHBhc3N3b3JkU3RhdHVzLm1lc3NhZ2UsXG4gICAgICAgIHRpcE5hbWU6ICd0aXBQYXNzd29yZCcsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zZXRGb2N1cyh7XG4gICAgICAgIGlzVmFsaWROYW1lOiBuYW1lU3RhdHVzLmlzVmFsaWQsXG4gICAgICAgIGlzVmFsaWRFbWFpbDogZW1haWxTdGF0dXMuaXNWYWxpZCxcbiAgICAgICAgaXNWYWxpZFBhc3N3b3JkOiBwYXNzd29yZFN0YXR1cy5pc1ZhbGlkLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChlbWFpbFN0YXR1cy5pc1ZhbGlkXG4gICAgICAmJiBwYXNzd29yZFN0YXR1cy5pc1ZhbGlkKSB7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKCdmb3JtLXJlZ2lzdHJhdGlvbi1kYXRhJywge1xuICAgICAgICAgIHVzZXJOYW1lOiB0aGlzLmNvbXBvbmVudHMuaW5wdXROYW1lLmdldERhdGEoKSxcbiAgICAgICAgICBlbWFpbDogdGhpcy5jb21wb25lbnRzLmlucHV0RW1haWwuZ2V0RGF0YSgpLFxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLmNvbXBvbmVudHMuaW5wdXRQYXNzd29yZC5nZXREYXRhKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgdGlwSGVuZGxlcih7IGlzVmFsaWQsIG1lc3NhZ2UsIHRpcE5hbWUgfSkge1xuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGlwTmFtZV0uc2hvd1RpcCh7IG1lc3NhZ2U6ICcnIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvbXBvbmVudHNbdGlwTmFtZV0uc2hvd1RpcCh7IG1lc3NhZ2UgfSk7XG4gIH1cblxuXG4gIHNldEZvY3VzKHsgaXNWYWxpZE5hbWUsIGlzVmFsaWRFbWFpbCwgaXNWYWxpZFBhc3N3b3JkIH0pIHtcbiAgICBpZiAoIWlzVmFsaWROYW1lKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuaW5wdXROYW1lLnNldEZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghaXNWYWxpZEVtYWlsKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuaW5wdXRFbWFpbC5zZXRGb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWlzVmFsaWRQYXNzd29yZCkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLmlucHV0UGFzc3dvcmQuc2V0Rm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gIH1cblxuXG4gIGZvcm1EaXNhYmxlKCkge1xuICAgIHRoaXMuaW5TZW5kUHJvY2VzcyA9IHRydWU7XG4gICAgdGhpcy5jb21wb25lbnRzLmlucHV0TmFtZS5kaXNhYmxlKCk7XG4gICAgdGhpcy5jb21wb25lbnRzLmlucHV0RW1haWwuZGlzYWJsZSgpO1xuICAgIHRoaXMuY29tcG9uZW50cy5pbnB1dFBhc3N3b3JkLmRpc2FibGUoKTtcbiAgfVxuXG4gIGZvcm1FbmFibGUoKSB7XG4gICAgdGhpcy5pblNlbmRQcm9jZXNzID0gZmFsc2U7XG4gICAgdGhpcy5jb21wb25lbnRzLmlucHV0TmFtZS5lbmFibGUoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMuaW5wdXRFbWFpbC5lbmFibGUoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMuaW5wdXRQYXNzd29yZC5lbmFibGUoKTtcbiAgfVxuXG5cbiAgaW5pdENvbXBvbmVudElucHV0TmFtZSgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuaW5wdXROYW1lID0gbmV3IElucHV0TmFtZSh7XG4gICAgICBlbDogdGhpcy5lbGVtZW50cy5uYW1lQ29udGFpbmVyLFxuICAgICAgY29tcG9uZW50TmFtZTogJ2lucHV0LW5hbWUnLFxuICAgICAgaWQ6ICduYW1lJyxcbiAgICB9KTtcbiAgfVxuXG5cbiAgaW5pdENvbXBvbmVudElucHV0RW1haWwoKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLmlucHV0RW1haWwgPSBuZXcgSW5wdXRFbWFpbCh7XG4gICAgICBlbDogdGhpcy5lbGVtZW50cy5lbWFpbENvbnRhaW5lcixcbiAgICAgIGNvbXBvbmVudE5hbWU6ICdpbnB1dC1lbWFpbCcsXG4gICAgICBpZDogJ2VtYWlsJyxcbiAgICB9KTtcbiAgfVxuXG5cbiAgaW5pdENvbXBvbmVudElucHV0UGFzc3dvcmQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLmlucHV0UGFzc3dvcmQgPSBuZXcgSW5wdXRQYXNzd29yZCh7XG4gICAgICBlbDogdGhpcy5lbGVtZW50cy5wYXNzd29yZENvbnRhaW5lcixcbiAgICAgIGNvbXBvbmVudE5hbWU6ICdpbnB1dC1wYXNzd29yZCcsXG4gICAgICBpZDogJ3Bhc3N3b3JkJyxcbiAgICB9KTtcbiAgfVxuXG5cbiAgaW5pdENvbXBvbmVudFRpcE5hbWUoKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLnRpcE5hbWUgPSBuZXcgVGlwSW5saW5lKHtcbiAgICAgIGVsOiB0aGlzLmVsZW1lbnRzLnRpcE5hbWVDb250YWluZXIsXG4gICAgICBjb21wb25lbnROYW1lOiAndGlwLWlubGluZS1uYW1lJyxcbiAgICB9KTtcbiAgfVxuXG5cbiAgaW5pdENvbXBvbmVudFRpcEVtYWlsKCkge1xuICAgIHRoaXMuY29tcG9uZW50cy50aXBFbWFpbCA9IG5ldyBUaXBJbmxpbmUoe1xuICAgICAgZWw6IHRoaXMuZWxlbWVudHMudGlwRW1haWxDb250YWluZXIsXG4gICAgICBjb21wb25lbnROYW1lOiAndGlwLWlubGluZS1lbWFpbCcsXG4gICAgfSk7XG4gIH1cblxuXG4gIGluaXRDb21wb25lbnRUaXBQYXNzd29yZCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMudGlwUGFzc3dvcmQgPSBuZXcgVGlwSW5saW5lKHtcbiAgICAgIGVsOiB0aGlzLmVsZW1lbnRzLnRpcFBhc3N3b3JkQ29udGFpbmVyLFxuICAgICAgY29tcG9uZW50TmFtZTogJ3RpcC1pbmxpbmUtcGFzc3dvcmQnLFxuICAgIH0pO1xuICB9XG5cblxuICBpbml0Q29tcG9uZW50QnV0dG9uU3VibWl0KCkge1xuICAgIHRoaXMuY29tcG9uZW50cy5idXR0b25TdWJtaXQgPSBuZXcgQnV0dG9uU3VibWl0KHtcbiAgICAgIGVsOiB0aGlzLmVsZW1lbnRzLmJ1dHRvblN1Ym1pdENvbnRhaW5lcixcbiAgICAgIGNvbXBvbmVudE5hbWU6ICdidXR0b24tc3VibWl0LXJlZ2lzdHJhdGlvbicsXG4gICAgICB2YWx1ZTogJ9CU0JDQm9CV0JUnLFxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvZm9ybXMvZm9ybS1yZWdpc3RyYXRpb24vaW5kZXguanMiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tcmVnaXN0cmF0aW9uL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtLXJlZ2lzdHJhdGlvbl9fbmFtZS1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxuXFxuLmZvcm0tcmVnaXN0cmF0aW9uX19lbWFpbC1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxuXFxuLmZvcm0tcmVnaXN0cmF0aW9uX19zdWJtaXQtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBmbG9hdDogcmlnaHQ7IH1cXG5cXG4uZm9ybS1yZWdpc3RyYXRpb246OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLXJlZ2lzdHJhdGlvbi9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL0ZpbG1SZW50YWwvd2ViLXByb2plY3RzL3NpbWJpb3ovc2ltYmlvei1mcm9udC1lbmQvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiPGZvcm0gY2xhc3M9XFxcImZvcm0tcmVnaXN0cmF0aW9uXFxcIlxcbiAgICAgIGRhdGEtY29tcG9uZW50PVxcXCJmb3JtLXJlZ2lzdHJhdGlvblxcXCI+XFxuXFxuICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tbGFiZWwgZm9ybS1yZWdpc3RyYXRpb25fX2xhYmVsXFxcIlxcbiAgICAgICAgIGZvcj1cXFwibmFtZVxcXCI+XFxuICDQmNC80Y86XFxuICA8L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX3RpcC1jb250YWluZXJcXFwiXFxuICAgICAgIGRhdGEtZWxlbWVudD1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX3RpcC1uYW1lLWNvbnRhaW5lclxcXCI+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tcmVnaXN0cmF0aW9uX19uYW1lLWNvbnRhaW5lclxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJmb3JtLXJlZ2lzdHJhdGlvbl9fbmFtZS1jb250YWluZXJcXFwiPlxcbiAgPC9kaXY+XFxuXFxuICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tbGFiZWwgZm9ybS1yZWdpc3RyYXRpb25fX2xhYmVsXFxcIlxcbiAgICAgICAgIGZvcj1cXFwiZW1haWxcXFwiPlxcbiAg0J/QvtGH0YLQsFxcbiAgPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tcmVnaXN0cmF0aW9uX190aXAtY29udGFpbmVyXFxcIlxcbiAgICAgICBkYXRhLWVsZW1lbnQ9XFxcImZvcm0tcmVnaXN0cmF0aW9uX190aXAtZW1haWwtY29udGFpbmVyXFxcIj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX2VtYWlsLWNvbnRhaW5lclxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJmb3JtLXJlZ2lzdHJhdGlvbl9fZW1haWwtY29udGFpbmVyXFxcIj5cXG4gIDwvZGl2PlxcblxcbiAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWxhYmVsIGZvcm0tcmVnaXN0cmF0aW9uX19sYWJlbFxcXCJcXG4gICAgICAgICBmb3I9XFxcInBhc3N3b3JkXFxcIj5cXG4gINCf0LDRgNC+0LvRjFxcbiAgPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tcmVnaXN0cmF0aW9uX190aXAtY29udGFpbmVyXFxcIlxcbiAgICAgICBkYXRhLWVsZW1lbnQ9XFxcImZvcm0tcmVnaXN0cmF0aW9uX190aXAtcGFzc3dvcmQtY29udGFpbmVyXFxcIj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX3Bhc3N3b3JkLWNvbnRhaW5lclxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJmb3JtLXJlZ2lzdHJhdGlvbl9fcGFzc3dvcmQtY29udGFpbmVyXFxcIj5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX3N1Ym1pdC1jb250YWluZXJcXFwiXFxuICAgICAgIGRhdGEtZWxlbWVudD1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX3N1Ym1pdC1jb250YWluZXJcXFwiPlxcbiAgPC9kaXY+XFxuPC9mb3JtPlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLXJlZ2lzdHJhdGlvbi90ZW1wbGF0ZS5oYnNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgQmFzZUlucHV0IGZyb20gJ2NvbXBvbmVudHMvX19zaGFyZWQvYmFzZS1pbnB1dCc7XG5pbXBvcnQgJ2NvbXBvbmVudHMvX19zaGFyZWQvYmFzZS1pbnB1dC9zdHlsZS5zY3NzJzsgLy8gY3NzXG5pbXBvcnQgdmFsaWRhdGlvbk5hbWUgZnJvbSAnLi92YWxpZGF0aW9uLW5hbWUnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUuaGJzJzsgLy8gdGVtcGxhdGVcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dE5hbWUgZXh0ZW5kcyBCYXNlSW5wdXQge1xuICBjb25zdHJ1Y3Rvcih7IGVsLCBjb21wb25lbnROYW1lLCBpZCB9KSB7XG4gICAgc3VwZXIoeyBlbCB9KTtcblxuICAgIHRoaXMucmVuZGVyKHsgY29tcG9uZW50TmFtZSwgaWQgfSk7XG4gICAgdGhpcy5lbGVtZW50cy5pbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXBvbmVudD1cIiR7Y29tcG9uZW50TmFtZX1cIl1gKTtcbiAgfVxuXG4gIHJlbmRlcih7IGNvbXBvbmVudE5hbWUsIGlkIH0pIHtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRlbXBsYXRlKHsgY29tcG9uZW50TmFtZSwgaWQgfSk7XG4gIH1cblxuICB2YWxpZGF0aW9uKCkge1xuICAgIGNvbnN0IG5hbWVTdGF0dXMgPSB2YWxpZGF0aW9uTmFtZSh7IHZhbHVlOiB0aGlzLmVsZW1lbnRzLmlucHV0LnZhbHVlIH0pO1xuICAgIHRoaXMuYmFja2xpZ2h0VmFsaWQoeyBpc1ZhbGlkOiBuYW1lU3RhdHVzLmlzVmFsaWQgfSk7XG4gICAgcmV0dXJuIG5hbWVTdGF0dXM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9pbnB1dHMvaW5wdXQtbmFtZS9pbmRleC5qcyIsImltcG9ydCByZWdFZXhwUGF0dGVybnMgZnJvbSAnY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWlucHV0L3BhdHRlcm4tcmVnLWV4cCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHZhbHVlIH0pID0+IHtcbiAgaWYgKHZhbHVlLnNlYXJjaChyZWdFZXhwUGF0dGVybnMuZW1wdHkpID09PSAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6ICfQktCy0LXQtNC40YLQtSDQuNC80Y8nLFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuICBpZiAodmFsdWUuc2VhcmNoKHJlZ0VleHBQYXR0ZXJucy5tYXhMZW5ndGhOYW1lKSA9PT0gLTEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogJ9CY0LzRjyDQvdC1INC00L7Qu9C20L3QviDQv9GA0LXQstGL0YjQsNGC0YwgMjAg0YHQuNC80LLQvtC70L7QsicsXG4gICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogbnVsbCxcbiAgICBpc1ZhbGlkOiB0cnVlLFxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9pbnB1dHMvaW5wdXQtbmFtZS92YWxpZGF0aW9uLW5hbWUuanMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvRmlsbVJlbnRhbC93ZWItcHJvamVjdHMvc2ltYmlvei9zaW1iaW96LWZyb250LWVuZC9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIjxpbnB1dCBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtbmFtZVxcXCJcXG4gICAgICAgZGF0YS1jb21wb25lbnQ9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb21wb25lbnROYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb21wb25lbnROYW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjb21wb25lbnROYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCJcXG4gICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgaWQ9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pZCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2lucHV0cy9pbnB1dC1uYW1lL3RlbXBsYXRlLmhic1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9GaWxtUmVudGFsL3dlYi1wcm9qZWN0cy9zaW1iaW96L3NpbWJpb3otZnJvbnQtZW5kL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcInJlZ2lzdHJhdGlvblxcXCJcXG4gICAgIGRhdGEtY29tcG9uZW50PVxcXCJyZWdpc3RyYXRpb25cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwicmVnaXN0cmF0aW9uX19tYWluLWNvbnRhaW5lclxcXCI+XFxuICAgIDxoMSBjbGFzcz1cXFwicmVnaXN0cmF0aW9uX19kZXNjcmliZVxcXCI+XFxuICAgINCh0L7Qt9C00LDQvdC40LUg0JDQutC60LDRg9C90YLQsFxcbiAgICA8L2gxPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyZWdpc3RyYXRpb25fX2Zvcm0tY29udGFpbmVyXFxcIlxcbiAgICAgICAgIGRhdGEtZWxlbWVudD1cXFwicmVnaXN0cmF0aW9uX19mb3JtLWNvbnRhaW5lclxcXCI+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi90ZW1wbGF0ZS5oYnNcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJ3JvdXRlcic7XG5pbXBvcnQgc2ltYmlvekFwaSBmcm9tICdzaW1iaW96LWFwaS9kcml2ZXItYXBpJztcbmltcG9ydCBIdHRwRXJyb3IgZnJvbSAndXRpbHMvaHR0cC1lcnJvci5qcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL19fc2hhcmVkL2Jhc2UtY29tcG9uZW50JztcbmltcG9ydCAnY29tcG9uZW50cy9fX3NoYXJlZC9sb2dpbi1yZWdpc3RyYXRpb24vc3R5bGUuc2Nzcyc7IC8vIGNzc1xuaW1wb3J0IEZvcm1SZWdpc3RyYXRpb24gZnJvbSAnLi4vZm9ybXMvZm9ybS1yZWdpc3RyYXRpb24nO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUuaGJzJztcblxuXG5jbGFzcyBSZWdpc3RyYXRpb24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyBlbCB9KSB7XG4gICAgc3VwZXIoeyBlbCB9KTtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICB0aGlzLmV2ZW50c1B1YlN1YiA9IHt9O1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmVsZW1lbnRzLnJlZ2lzdHJhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbXBvbmVudD1cInJlZ2lzdHJhdGlvblwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMuRm9ybUNvbnRhaW5lciA9IHRoaXMuZWxlbWVudHMucmVnaXN0cmF0aW9uLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJyZWdpc3RyYXRpb25fX2Zvcm0tY29udGFpbmVyXCJdJyk7XG5cbiAgICB0aGlzLmNvbXBvbmVudHMuZm9ybVJlZ2lzdHJhdGlvbiA9IG5ldyBGb3JtUmVnaXN0cmF0aW9uKHtcbiAgICAgIGVsOiB0aGlzLmVsZW1lbnRzLkZvcm1Db250YWluZXIsXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZEV2ZW50cygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGVtcGxhdGUoKTtcbiAgfVxuXG4gIGFkZEV2ZW50cygpIHtcbiAgICB0aGlzLmV2ZW50c1B1YlN1Yi5mb3JtUmVnaXN0cmF0aW9EYXRhID0gUHViU3ViLnN1YnNjcmliZSgnZm9ybS1yZWdpc3RyYXRpb24tZGF0YScsIHRoaXMub25TZW5kRGF0YS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50cygpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBvblNlbmREYXRhKG1zZywgeyB1c2VyTmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9ybVJlZ2lzdHJhdGlvbi5mb3JtRGlzYWJsZSgpO1xuICAgIHNpbWJpb3pBcGkucmVnaXN0cmF0aW9uKHsgdXNlck5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByb3V0ZXIuc2V0Um91dGVIYXNoKHsgcm91dGVIYXNoOiAnYXBwbGljYXRpb24nIH0pO1xuICAgICAgICByb3V0ZXIuc2V0VXNlclN0YXR1cygnbG9naW4nKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9ybVJlZ2lzdHJhdGlvbi5mb3JtRW5hYmxlKCk7XG4gICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3IpIHtcbiAgICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9ybVJlZ2lzdHJhdGlvbi50aXBIZW5kbGVyKHtcbiAgICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdlbWFpbCDRg9C20LUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9JyxcbiAgICAgICAgICAgICAgdGlwTmFtZTogJ3RpcEVtYWlsJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNTAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0L7RiNC40LHQutCwINC90LAg0YHRgtC+0YDQvdC1INGB0LXRgNCy0LXRgNCwJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xuICAgICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWdpc3RyYXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUExQkE7QUEwQkE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7QUFsTUE7QUFDQTs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQUdBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSkE7QUFLQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFoQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFkQTtBQWNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFwREE7QUFDQTtBQXNEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9