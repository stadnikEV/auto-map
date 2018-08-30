webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null) return null; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HttpError =
/*#__PURE__*/
function (_Error) {
  _inherits(HttpError, _Error);

  function HttpError(_ref) {
    var _this;

    var status = _ref.status,
        message = _ref.message;

    _classCallCheck(this, HttpError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HttpError).call(this));
    _this.status = status;
    _this.name = _this.constructor.name;
    _this.message = "".concat(status, " (").concat(message, ")");
    _this.stack = new Error(message).stack;
    return _this;
  }

  return HttpError;
}(_wrapNativeSuper(Error));

exports.default = HttpError;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pubsubJs = _interopRequireDefault(__webpack_require__(6));

var _baseComponent = _interopRequireDefault(__webpack_require__(4));

__webpack_require__(69);

__webpack_require__(102);

var _tipInline = _interopRequireDefault(__webpack_require__(70));

var _template = _interopRequireDefault(__webpack_require__(104));

var _buttonSubmit = _interopRequireDefault(__webpack_require__(71));

var _inputName = _interopRequireDefault(__webpack_require__(105));

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
          // this.formDisable();
          _pubsubJs.default.publish('form-registration-data', {
            userName: this.components.inputName.getData(),
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

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(103);

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

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".form-registration__name-container {\n  margin-bottom: 8px; }\n\n.form-registration__email-container {\n  margin-bottom: 8px; }\n\n.form-registration__submit-container {\n  margin-top: 15px;\n  float: right; }\n\n.form-registration::after {\n  content: '';\n  clear: both;\n  display: block; }\n", ""]);

// exports


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form class=\"form-registration\"\n      data-component=\"form-registration\">\n\n  <label class=\"form-label form-registration__label\"\n         for=\"name\">\n  Имя:\n  </label>\n  <div class=\"form-registration__tip-container\"\n       data-element=\"form-registration__tip-name-container\">\n  </div>\n  <div class=\"form-registration__name-container\"\n       data-element=\"form-registration__name-container\">\n  </div>\n\n  <label class=\"form-label form-registration__label\"\n         for=\"email\">\n  Почта\n  </label>\n  <div class=\"form-registration__tip-container\"\n       data-element=\"form-registration__tip-email-container\">\n  </div>\n  <div class=\"form-registration__email-container\"\n       data-element=\"form-registration__email-container\">\n  </div>\n\n  <label class=\"form-label form-registration__label\"\n         for=\"password\">\n  Пароль\n  </label>\n  <div class=\"form-registration__tip-container\"\n       data-element=\"form-registration__tip-password-container\">\n  </div>\n  <div class=\"form-registration__password-container\"\n       data-element=\"form-registration__password-container\">\n  </div>\n\n  <div class=\"form-registration__submit-container\"\n       data-element=\"form-registration__submit-container\">\n  </div>\n</form>\n";
},"useData":true});

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseInput = _interopRequireDefault(__webpack_require__(65));

__webpack_require__(66);

var _validationName = _interopRequireDefault(__webpack_require__(106));

var _template = _interopRequireDefault(__webpack_require__(107));

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

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _patternRegExp = _interopRequireDefault(__webpack_require__(67));

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

/***/ 107:
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

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"registration\"\n     data-component=\"registration\">\n  <div class=\"registration__main-container\">\n    <h1 class=\"registration__describe\">\n    Создание Аккаунта\n    </h1>\n    <div class=\"registration__form-container\"\n         data-element=\"registration__form-container\">\n    </div>\n  </div>\n</div>\n";
},"useData":true});

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pubsubJs = _interopRequireDefault(__webpack_require__(6));

var _httpError = _interopRequireDefault(__webpack_require__(100));

var _baseComponent = _interopRequireDefault(__webpack_require__(4));

__webpack_require__(68);

var _formRegistration = _interopRequireDefault(__webpack_require__(101));

var _template = _interopRequireDefault(__webpack_require__(108));

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
      fetch('http://localhost:8080/registration', {
        method: 'post',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: userName,
          email: email,
          password: password
        })
      }).then(function (response) {
        _this2.response = response;
        return response.json();
      }).then(function (json) {
        if (_this2.response.status !== 200) {
          return Promise.reject(new _httpError.default({
            status: json.status,
            message: json.message
          }));
        }

        return json;
      }).then(function () {
        console.log('ok');
      }).catch(function (err) {
        console.warn(err);
      });
    }
  }]);

  return Registration;
}(_baseComponent.default);

module.exports = Registration;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLWRyaXZlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbHMvaHR0cC1lcnJvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZm9ybXMvZm9ybS1yZWdpc3RyYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvZm9ybS1yZWdpc3RyYXRpb24vc3R5bGUuc2Nzcz9hNDZkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tcmVnaXN0cmF0aW9uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvZm9ybS1yZWdpc3RyYXRpb24vdGVtcGxhdGUuaGJzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pbnB1dHMvaW5wdXQtbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5wdXRzL2lucHV0LW5hbWUvdmFsaWRhdGlvbi1uYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9pbnB1dC1uYW1lL3RlbXBsYXRlLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vdGVtcGxhdGUuaGJzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih7IHN0YXR1cywgbWVzc2FnZSB9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgdGhpcy5tZXNzYWdlID0gYCR7c3RhdHVzfSAoJHttZXNzYWdlfSlgO1xuICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKG1lc3NhZ2UpKS5zdGFjaztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy91dGlscy9odHRwLWVycm9yL2luZGV4LmpzIiwiaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWNvbXBvbmVudCc7XG5pbXBvcnQgJ2NvbXBvbmVudHMvX19zaGFyZWQvZm9ybS9zdHlsZS5zY3NzJzsgLy8gY3NzXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7IC8vIGNzc1xuaW1wb3J0IFRpcElubGluZSBmcm9tICcuLi8uLi90aXAtaW5saW5lJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLmhicyc7IC8vIHRlbXBsYXRlXG5pbXBvcnQgQnV0dG9uU3VibWl0IGZyb20gJy4uLy4uL2J1dHRvbnMvYnV0dG9uLXN1Ym1pdCc7XG5pbXBvcnQgSW5wdXROYW1lIGZyb20gJy4uLy4uL2lucHV0cy9pbnB1dC1uYW1lJztcbmltcG9ydCBJbnB1dEVtYWlsIGZyb20gJy4uLy4uL2lucHV0cy9pbnB1dC1lbWFpbCc7XG5pbXBvcnQgSW5wdXRQYXNzd29yZCBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXQtcGFzc3dvcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtUmVnaXN0cmF0aW9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgZWwgfSkge1xuICAgIHN1cGVyKHsgZWwgfSk7XG4gICAgdGhpcy5jb21wb25lbnRzID0ge307XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuZWxlbWVudHMuZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbXBvbmVudD1cImZvcm0tcmVnaXN0cmF0aW9uXCJdJyk7XG5cbiAgICB0aGlzLmVsZW1lbnRzLm5hbWVDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tcmVnaXN0cmF0aW9uX19uYW1lLWNvbnRhaW5lclwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMuZW1haWxDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tcmVnaXN0cmF0aW9uX19lbWFpbC1jb250YWluZXJcIl0nKTtcbiAgICB0aGlzLmVsZW1lbnRzLnBhc3N3b3JkQ29udGFpbmVyID0gdGhpcy5lbGVtZW50cy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtLXJlZ2lzdHJhdGlvbl9fcGFzc3dvcmQtY29udGFpbmVyXCJdJyk7XG4gICAgdGhpcy5lbGVtZW50cy50aXBOYW1lQ29udGFpbmVyID0gdGhpcy5lbGVtZW50cy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtLXJlZ2lzdHJhdGlvbl9fdGlwLW5hbWUtY29udGFpbmVyXCJdJyk7XG4gICAgdGhpcy5lbGVtZW50cy50aXBFbWFpbENvbnRhaW5lciA9IHRoaXMuZWxlbWVudHMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiZm9ybS1yZWdpc3RyYXRpb25fX3RpcC1lbWFpbC1jb250YWluZXJcIl0nKTtcbiAgICB0aGlzLmVsZW1lbnRzLnRpcFBhc3N3b3JkQ29udGFpbmVyID0gdGhpcy5lbGVtZW50cy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtLXJlZ2lzdHJhdGlvbl9fdGlwLXBhc3N3b3JkLWNvbnRhaW5lclwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uU3VibWl0Q29udGFpbmVyID0gdGhpcy5lbGVtZW50cy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtLXJlZ2lzdHJhdGlvbl9fc3VibWl0LWNvbnRhaW5lclwiXScpO1xuXG4gICAgdGhpcy5pbml0Q29tcG9uZW50SW5wdXROYW1lKCk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50SW5wdXRFbWFpbCgpO1xuICAgIHRoaXMuaW5pdENvbXBvbmVudElucHV0UGFzc3dvcmQoKTtcbiAgICB0aGlzLmluaXRDb21wb25lbnRUaXBOYW1lKCk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50VGlwRW1haWwoKTtcbiAgICB0aGlzLmluaXRDb21wb25lbnRUaXBQYXNzd29yZCgpO1xuICAgIHRoaXMuaW5pdENvbXBvbmVudEJ1dHRvblN1Ym1pdCgpO1xuXG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRFdmVudHMoKTtcbiAgICB0aGlzLmFkZEV2ZW50cygpO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZSgpO1xuICB9XG5cblxuICBhZGRFdmVudHMoKSB7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgfVxuXG5cbiAgcmVtb3ZlRXZlbnRzKCkge1xuICAgIHRoaXMuZWxlbWVudHMuZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gIH1cblxuXG4gIG9uQ2xpY2soZSkge1xuICAgIGNvbnN0IHN1Ym1pdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWNvbXBvbmVudD1cImJ1dHRvbi1zdWJtaXQtcmVnaXN0cmF0aW9uXCJdJyk7XG5cbiAgICBpZiAoc3VibWl0KSB7XG4gICAgICBpZiAoIXRoaXMuZWxlbWVudHMuZm9ybS5jb250YWlucyhzdWJtaXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8g0LfQsNC/0YDQtdGJ0LDQtdGCINGB0YDQsNCx0LDRgtGL0LLQsNC90LjQtSDRgdC+0LHRi9GC0LjRjyBcInN1Ym1pdFwiXG5cbiAgICAgIGlmICh0aGlzLmluU2VuZFByb2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuYW1lU3RhdHVzID0gdGhpcy5jb21wb25lbnRzLmlucHV0TmFtZS52YWxpZGF0aW9uKCk7XG4gICAgICBjb25zdCBlbWFpbFN0YXR1cyA9IHRoaXMuY29tcG9uZW50cy5pbnB1dEVtYWlsLnZhbGlkYXRpb24oKTtcbiAgICAgIGNvbnN0IHBhc3N3b3JkU3RhdHVzID0gdGhpcy5jb21wb25lbnRzLmlucHV0UGFzc3dvcmQudmFsaWRhdGlvbigpO1xuXG4gICAgICB0aGlzLnRpcEhlbmRsZXIoe1xuICAgICAgICBpc1ZhbGlkOiBuYW1lU3RhdHVzLmlzVmFsaWQsXG4gICAgICAgIG1lc3NhZ2U6IG5hbWVTdGF0dXMubWVzc2FnZSxcbiAgICAgICAgdGlwTmFtZTogJ3RpcE5hbWUnLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnRpcEhlbmRsZXIoe1xuICAgICAgICBpc1ZhbGlkOiBlbWFpbFN0YXR1cy5pc1ZhbGlkLFxuICAgICAgICBtZXNzYWdlOiBlbWFpbFN0YXR1cy5tZXNzYWdlLFxuICAgICAgICB0aXBOYW1lOiAndGlwRW1haWwnLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnRpcEhlbmRsZXIoe1xuICAgICAgICBpc1ZhbGlkOiBwYXNzd29yZFN0YXR1cy5pc1ZhbGlkLFxuICAgICAgICBtZXNzYWdlOiBwYXNzd29yZFN0YXR1cy5tZXNzYWdlLFxuICAgICAgICB0aXBOYW1lOiAndGlwUGFzc3dvcmQnLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0Rm9jdXMoe1xuICAgICAgICBpc1ZhbGlkTmFtZTogbmFtZVN0YXR1cy5pc1ZhbGlkLFxuICAgICAgICBpc1ZhbGlkRW1haWw6IGVtYWlsU3RhdHVzLmlzVmFsaWQsXG4gICAgICAgIGlzVmFsaWRQYXNzd29yZDogcGFzc3dvcmRTdGF0dXMuaXNWYWxpZCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZW1haWxTdGF0dXMuaXNWYWxpZFxuICAgICAgJiYgcGFzc3dvcmRTdGF0dXMuaXNWYWxpZCkge1xuICAgICAgICAvLyB0aGlzLmZvcm1EaXNhYmxlKCk7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKCdmb3JtLXJlZ2lzdHJhdGlvbi1kYXRhJywge1xuICAgICAgICAgIHVzZXJOYW1lOiB0aGlzLmNvbXBvbmVudHMuaW5wdXROYW1lLmdldERhdGEoKSxcbiAgICAgICAgICBlbWFpbDogdGhpcy5jb21wb25lbnRzLmlucHV0RW1haWwuZ2V0RGF0YSgpLFxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLmNvbXBvbmVudHMuaW5wdXRQYXNzd29yZC5nZXREYXRhKCksXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICB0aXBIZW5kbGVyKHsgaXNWYWxpZCwgbWVzc2FnZSwgdGlwTmFtZSB9KSB7XG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aXBOYW1lXS5zaG93VGlwKHsgbWVzc2FnZTogJycgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29tcG9uZW50c1t0aXBOYW1lXS5zaG93VGlwKHsgbWVzc2FnZSB9KTtcbiAgfVxuXG5cbiAgc2V0Rm9jdXMoeyBpc1ZhbGlkTmFtZSwgaXNWYWxpZEVtYWlsLCBpc1ZhbGlkUGFzc3dvcmQgfSkge1xuICAgIGlmICghaXNWYWxpZE5hbWUpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5pbnB1dE5hbWUuc2V0Rm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFpc1ZhbGlkRW1haWwpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5pbnB1dEVtYWlsLnNldEZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghaXNWYWxpZFBhc3N3b3JkKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuaW5wdXRQYXNzd29yZC5zZXRGb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG5cbiAgZm9ybURpc2FibGUoKSB7XG4gICAgdGhpcy5pblNlbmRQcm9jZXNzID0gdHJ1ZTtcbiAgICB0aGlzLmNvbXBvbmVudHMuaW5wdXROYW1lLmRpc2FibGUoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMuaW5wdXRFbWFpbC5kaXNhYmxlKCk7XG4gICAgdGhpcy5jb21wb25lbnRzLmlucHV0UGFzc3dvcmQuZGlzYWJsZSgpO1xuICB9XG5cblxuICBpbml0Q29tcG9uZW50SW5wdXROYW1lKCkge1xuICAgIHRoaXMuY29tcG9uZW50cy5pbnB1dE5hbWUgPSBuZXcgSW5wdXROYW1lKHtcbiAgICAgIGVsOiB0aGlzLmVsZW1lbnRzLm5hbWVDb250YWluZXIsXG4gICAgICBjb21wb25lbnROYW1lOiAnaW5wdXQtbmFtZScsXG4gICAgICBpZDogJ25hbWUnLFxuICAgIH0pO1xuICB9XG5cblxuICBpbml0Q29tcG9uZW50SW5wdXRFbWFpbCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuaW5wdXRFbWFpbCA9IG5ldyBJbnB1dEVtYWlsKHtcbiAgICAgIGVsOiB0aGlzLmVsZW1lbnRzLmVtYWlsQ29udGFpbmVyLFxuICAgICAgY29tcG9uZW50TmFtZTogJ2lucHV0LWVtYWlsJyxcbiAgICAgIGlkOiAnZW1haWwnLFxuICAgIH0pO1xuICB9XG5cblxuICBpbml0Q29tcG9uZW50SW5wdXRQYXNzd29yZCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuaW5wdXRQYXNzd29yZCA9IG5ldyBJbnB1dFBhc3N3b3JkKHtcbiAgICAgIGVsOiB0aGlzLmVsZW1lbnRzLnBhc3N3b3JkQ29udGFpbmVyLFxuICAgICAgY29tcG9uZW50TmFtZTogJ2lucHV0LXBhc3N3b3JkJyxcbiAgICAgIGlkOiAncGFzc3dvcmQnLFxuICAgIH0pO1xuICB9XG5cblxuICBpbml0Q29tcG9uZW50VGlwTmFtZSgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMudGlwTmFtZSA9IG5ldyBUaXBJbmxpbmUoe1xuICAgICAgZWw6IHRoaXMuZWxlbWVudHMudGlwTmFtZUNvbnRhaW5lcixcbiAgICAgIGNvbXBvbmVudE5hbWU6ICd0aXAtaW5saW5lLW5hbWUnLFxuICAgIH0pO1xuICB9XG5cblxuICBpbml0Q29tcG9uZW50VGlwRW1haWwoKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLnRpcEVtYWlsID0gbmV3IFRpcElubGluZSh7XG4gICAgICBlbDogdGhpcy5lbGVtZW50cy50aXBFbWFpbENvbnRhaW5lcixcbiAgICAgIGNvbXBvbmVudE5hbWU6ICd0aXAtaW5saW5lLWVtYWlsJyxcbiAgICB9KTtcbiAgfVxuXG5cbiAgaW5pdENvbXBvbmVudFRpcFBhc3N3b3JkKCkge1xuICAgIHRoaXMuY29tcG9uZW50cy50aXBQYXNzd29yZCA9IG5ldyBUaXBJbmxpbmUoe1xuICAgICAgZWw6IHRoaXMuZWxlbWVudHMudGlwUGFzc3dvcmRDb250YWluZXIsXG4gICAgICBjb21wb25lbnROYW1lOiAndGlwLWlubGluZS1wYXNzd29yZCcsXG4gICAgfSk7XG4gIH1cblxuXG4gIGluaXRDb21wb25lbnRCdXR0b25TdWJtaXQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLmJ1dHRvblN1Ym1pdCA9IG5ldyBCdXR0b25TdWJtaXQoe1xuICAgICAgZWw6IHRoaXMuZWxlbWVudHMuYnV0dG9uU3VibWl0Q29udGFpbmVyLFxuICAgICAgY29tcG9uZW50TmFtZTogJ2J1dHRvbi1zdWJtaXQtcmVnaXN0cmF0aW9uJyxcbiAgICAgIHZhbHVlOiAn0JTQkNCb0JXQlScsXG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLXJlZ2lzdHJhdGlvbi9pbmRleC5qcyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zdHlsZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9ybXMvZm9ybS1yZWdpc3RyYXRpb24vc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvcm0tcmVnaXN0cmF0aW9uX19uYW1lLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7IH1cXG5cXG4uZm9ybS1yZWdpc3RyYXRpb25fX2VtYWlsLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7IH1cXG5cXG4uZm9ybS1yZWdpc3RyYXRpb25fX3N1Ym1pdC1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGZsb2F0OiByaWdodDsgfVxcblxcbi5mb3JtLXJlZ2lzdHJhdGlvbjo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjbGVhcjogYm90aDtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3NyYy9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tcmVnaXN0cmF0aW9uL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvRmlsbVJlbnRhbC93ZWItcHJvamVjdHMvc2ltYmlvei9zaW1iaW96LWZyb250LWVuZC9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8Zm9ybSBjbGFzcz1cXFwiZm9ybS1yZWdpc3RyYXRpb25cXFwiXFxuICAgICAgZGF0YS1jb21wb25lbnQ9XFxcImZvcm0tcmVnaXN0cmF0aW9uXFxcIj5cXG5cXG4gIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1sYWJlbCBmb3JtLXJlZ2lzdHJhdGlvbl9fbGFiZWxcXFwiXFxuICAgICAgICAgZm9yPVxcXCJuYW1lXFxcIj5cXG4gINCY0LzRjzpcXG4gIDwvbGFiZWw+XFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLXJlZ2lzdHJhdGlvbl9fdGlwLWNvbnRhaW5lclxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJmb3JtLXJlZ2lzdHJhdGlvbl9fdGlwLW5hbWUtY29udGFpbmVyXFxcIj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX25hbWUtY29udGFpbmVyXFxcIlxcbiAgICAgICBkYXRhLWVsZW1lbnQ9XFxcImZvcm0tcmVnaXN0cmF0aW9uX19uYW1lLWNvbnRhaW5lclxcXCI+XFxuICA8L2Rpdj5cXG5cXG4gIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1sYWJlbCBmb3JtLXJlZ2lzdHJhdGlvbl9fbGFiZWxcXFwiXFxuICAgICAgICAgZm9yPVxcXCJlbWFpbFxcXCI+XFxuICDQn9C+0YfRgtCwXFxuICA8L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX3RpcC1jb250YWluZXJcXFwiXFxuICAgICAgIGRhdGEtZWxlbWVudD1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX3RpcC1lbWFpbC1jb250YWluZXJcXFwiPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLXJlZ2lzdHJhdGlvbl9fZW1haWwtY29udGFpbmVyXFxcIlxcbiAgICAgICBkYXRhLWVsZW1lbnQ9XFxcImZvcm0tcmVnaXN0cmF0aW9uX19lbWFpbC1jb250YWluZXJcXFwiPlxcbiAgPC9kaXY+XFxuXFxuICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tbGFiZWwgZm9ybS1yZWdpc3RyYXRpb25fX2xhYmVsXFxcIlxcbiAgICAgICAgIGZvcj1cXFwicGFzc3dvcmRcXFwiPlxcbiAg0J/QsNGA0L7Qu9GMXFxuICA8L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX3RpcC1jb250YWluZXJcXFwiXFxuICAgICAgIGRhdGEtZWxlbWVudD1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX3RpcC1wYXNzd29yZC1jb250YWluZXJcXFwiPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLXJlZ2lzdHJhdGlvbl9fcGFzc3dvcmQtY29udGFpbmVyXFxcIlxcbiAgICAgICBkYXRhLWVsZW1lbnQ9XFxcImZvcm0tcmVnaXN0cmF0aW9uX19wYXNzd29yZC1jb250YWluZXJcXFwiPlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLXJlZ2lzdHJhdGlvbl9fc3VibWl0LWNvbnRhaW5lclxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJmb3JtLXJlZ2lzdHJhdGlvbl9fc3VibWl0LWNvbnRhaW5lclxcXCI+XFxuICA8L2Rpdj5cXG48L2Zvcm0+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tcmVnaXN0cmF0aW9uL3RlbXBsYXRlLmhic1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBCYXNlSW5wdXQgZnJvbSAnY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWlucHV0JztcbmltcG9ydCAnY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWlucHV0L3N0eWxlLnNjc3MnOyAvLyBjc3NcbmltcG9ydCB2YWxpZGF0aW9uTmFtZSBmcm9tICcuL3ZhbGlkYXRpb24tbmFtZSc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZS5oYnMnOyAvLyB0ZW1wbGF0ZVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0TmFtZSBleHRlbmRzIEJhc2VJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKHsgZWwsIGNvbXBvbmVudE5hbWUsIGlkIH0pIHtcbiAgICBzdXBlcih7IGVsIH0pO1xuXG4gICAgdGhpcy5yZW5kZXIoeyBjb21wb25lbnROYW1lLCBpZCB9KTtcbiAgICB0aGlzLmVsZW1lbnRzLmlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcG9uZW50PVwiJHtjb21wb25lbnROYW1lfVwiXWApO1xuICB9XG5cbiAgcmVuZGVyKHsgY29tcG9uZW50TmFtZSwgaWQgfSkge1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGVtcGxhdGUoeyBjb21wb25lbnROYW1lLCBpZCB9KTtcbiAgfVxuXG4gIHZhbGlkYXRpb24oKSB7XG4gICAgY29uc3QgbmFtZVN0YXR1cyA9IHZhbGlkYXRpb25OYW1lKHsgdmFsdWU6IHRoaXMuZWxlbWVudHMuaW5wdXQudmFsdWUgfSk7XG4gICAgdGhpcy5iYWNrbGlnaHRWYWxpZCh7IGlzVmFsaWQ6IG5hbWVTdGF0dXMuaXNWYWxpZCB9KTtcbiAgICByZXR1cm4gbmFtZVN0YXR1cztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2lucHV0cy9pbnB1dC1uYW1lL2luZGV4LmpzIiwiaW1wb3J0IHJlZ0VleHBQYXR0ZXJucyBmcm9tICdjb21wb25lbnRzL19fc2hhcmVkL2Jhc2UtaW5wdXQvcGF0dGVybi1yZWctZXhwJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdmFsdWUgfSkgPT4ge1xuICBpZiAodmFsdWUuc2VhcmNoKHJlZ0VleHBQYXR0ZXJucy5lbXB0eSkgPT09IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogJ9CS0LLQtdC00LjRgtC1INC40LzRjycsXG4gICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICB9O1xuICB9XG4gIGlmICh2YWx1ZS5zZWFyY2gocmVnRWV4cFBhdHRlcm5zLm1heExlbmd0aE5hbWUpID09PSAtMSkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiAn0JjQvNGPINC90LUg0LTQvtC70LbQvdC+INC/0YDQtdCy0YvRiNCw0YLRjCAyMCDRgdC40LzQstC+0LvQvtCyJyxcbiAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiBudWxsLFxuICAgIGlzVmFsaWQ6IHRydWUsXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2lucHV0cy9pbnB1dC1uYW1lL3ZhbGlkYXRpb24tbmFtZS5qcyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9GaWxtUmVudGFsL3dlYi1wcm9qZWN0cy9zaW1iaW96L3NpbWJpb3otZnJvbnQtZW5kL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiPGlucHV0IGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1uYW1lXFxcIlxcbiAgICAgICBkYXRhLWNvbXBvbmVudD1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmNvbXBvbmVudE5hbWUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbXBvbmVudE5hbWUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImNvbXBvbmVudE5hbWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIlxcbiAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICBpZD1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmlkIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiaWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL2lucHV0LW5hbWUvdGVtcGxhdGUuaGJzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL0ZpbG1SZW50YWwvd2ViLXByb2plY3RzL3NpbWJpb3ovc2ltYmlvei1mcm9udC1lbmQvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwicmVnaXN0cmF0aW9uXFxcIlxcbiAgICAgZGF0YS1jb21wb25lbnQ9XFxcInJlZ2lzdHJhdGlvblxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJyZWdpc3RyYXRpb25fX21haW4tY29udGFpbmVyXFxcIj5cXG4gICAgPGgxIGNsYXNzPVxcXCJyZWdpc3RyYXRpb25fX2Rlc2NyaWJlXFxcIj5cXG4gICAg0KHQvtC30LTQsNC90LjQtSDQkNC60LrQsNGD0L3RgtCwXFxuICAgIDwvaDE+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJlZ2lzdHJhdGlvbl9fZm9ybS1jb250YWluZXJcXFwiXFxuICAgICAgICAgZGF0YS1lbGVtZW50PVxcXCJyZWdpc3RyYXRpb25fX2Zvcm0tY29udGFpbmVyXFxcIj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3RlbXBsYXRlLmhic1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcbmltcG9ydCBIdHRwRXJyb3IgZnJvbSAndXRpbHMvaHR0cC1lcnJvcic7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL19fc2hhcmVkL2Jhc2UtY29tcG9uZW50JztcbmltcG9ydCAnY29tcG9uZW50cy9fX3NoYXJlZC9sb2dpbi1yZWdpc3RyYXRpb24vc3R5bGUuc2Nzcyc7IC8vIGNzc1xuaW1wb3J0IEZvcm1SZWdpc3RyYXRpb24gZnJvbSAnLi4vZm9ybXMvZm9ybS1yZWdpc3RyYXRpb24nO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUuaGJzJztcblxuXG5jbGFzcyBSZWdpc3RyYXRpb24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyBlbCB9KSB7XG4gICAgc3VwZXIoeyBlbCB9KTtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICB0aGlzLmV2ZW50c1B1YlN1YiA9IHt9O1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmVsZW1lbnRzLnJlZ2lzdHJhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbXBvbmVudD1cInJlZ2lzdHJhdGlvblwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMuRm9ybUNvbnRhaW5lciA9IHRoaXMuZWxlbWVudHMucmVnaXN0cmF0aW9uLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJyZWdpc3RyYXRpb25fX2Zvcm0tY29udGFpbmVyXCJdJyk7XG5cbiAgICB0aGlzLmNvbXBvbmVudHMuZm9ybVJlZ2lzdHJhdGlvbiA9IG5ldyBGb3JtUmVnaXN0cmF0aW9uKHtcbiAgICAgIGVsOiB0aGlzLmVsZW1lbnRzLkZvcm1Db250YWluZXIsXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZEV2ZW50cygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGVtcGxhdGUoKTtcbiAgfVxuXG4gIGFkZEV2ZW50cygpIHtcbiAgICB0aGlzLmV2ZW50c1B1YlN1Yi5mb3JtUmVnaXN0cmF0aW9EYXRhID0gUHViU3ViLnN1YnNjcmliZSgnZm9ybS1yZWdpc3RyYXRpb24tZGF0YScsIHRoaXMub25TZW5kRGF0YS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50cygpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBvblNlbmREYXRhKG1zZywgeyB1c2VyTmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pIHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlZ2lzdHJhdGlvbicsIHtcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJOYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5yZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgSHR0cEVycm9yKHtcbiAgICAgICAgICAgIHN0YXR1czoganNvbi5zdGF0dXMsXG4gICAgICAgICAgICBtZXNzYWdlOiBqc29uLm1lc3NhZ2UsXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ29rJyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ2lzdHJhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBOztBQVJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQTFCQTtBQTBCQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7QUE3TEE7QUFDQTs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQUdBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSkE7QUFLQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFoQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBZEE7QUFjQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFhQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FBN0RBO0FBQ0E7QUErREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==