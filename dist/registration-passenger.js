webpackJsonp([1],{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pubsubJs = _interopRequireDefault(__webpack_require__(4));

var _baseComponent = _interopRequireDefault(__webpack_require__(7));

__webpack_require__(81);

__webpack_require__(113);

var _tipInline = _interopRequireDefault(__webpack_require__(82));

var _template = _interopRequireDefault(__webpack_require__(115));

var _buttonSubmit = _interopRequireDefault(__webpack_require__(83));

var _inputName = _interopRequireDefault(__webpack_require__(116));

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

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(114);

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

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".form-registration__name-container {\n  margin-bottom: 8px; }\n\n.form-registration__email-container {\n  margin-bottom: 8px; }\n\n.form-registration__submit-container {\n  margin-top: 15px;\n  float: right; }\n\n.form-registration::after {\n  content: '';\n  clear: both;\n  display: block; }\n", ""]);

// exports


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form class=\"form-registration\"\n      data-component=\"form-registration\">\n\n  <label class=\"form-label form-registration__label\"\n         for=\"name\">\n  Имя:\n  </label>\n  <div class=\"form-registration__tip-container\"\n       data-element=\"form-registration__tip-name-container\">\n  </div>\n  <div class=\"form-registration__name-container\"\n       data-element=\"form-registration__name-container\">\n  </div>\n\n  <label class=\"form-label form-registration__label\"\n         for=\"email\">\n  Почта\n  </label>\n  <div class=\"form-registration__tip-container\"\n       data-element=\"form-registration__tip-email-container\">\n  </div>\n  <div class=\"form-registration__email-container\"\n       data-element=\"form-registration__email-container\">\n  </div>\n\n  <label class=\"form-label form-registration__label\"\n         for=\"password\">\n  Пароль\n  </label>\n  <div class=\"form-registration__tip-container\"\n       data-element=\"form-registration__tip-password-container\">\n  </div>\n  <div class=\"form-registration__password-container\"\n       data-element=\"form-registration__password-container\">\n  </div>\n\n  <div class=\"form-registration__submit-container\"\n       data-element=\"form-registration__submit-container\">\n  </div>\n</form>\n";
},"useData":true});

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseInput = _interopRequireDefault(__webpack_require__(77));

__webpack_require__(78);

var _validationName = _interopRequireDefault(__webpack_require__(117));

var _template = _interopRequireDefault(__webpack_require__(118));

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

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _patternRegExp = _interopRequireDefault(__webpack_require__(79));

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

/***/ 118:
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

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"registration\"\n     data-component=\"registration\">\n  <div class=\"registration__main-container\">\n    <h1 class=\"registration__describe\">\n    Создание Аккаунта\n    </h1>\n    <div class=\"registration__form-container\"\n         data-element=\"registration__form-container\">\n    </div>\n  </div>\n</div>\n";
},"useData":true});

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pubsubJs = _interopRequireDefault(__webpack_require__(4));

var _router = _interopRequireDefault(__webpack_require__(5));

var _passengerApi = _interopRequireDefault(__webpack_require__(11));

var _httpError = _interopRequireDefault(__webpack_require__(12));

var _baseComponent = _interopRequireDefault(__webpack_require__(7));

__webpack_require__(80);

var _formRegistration = _interopRequireDefault(__webpack_require__(112));

var _template = _interopRequireDefault(__webpack_require__(119));

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

      _passengerApi.default.registration({
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