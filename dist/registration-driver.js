webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _patternRegExp = _interopRequireDefault(__webpack_require__(62));

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

/***/ 101:
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

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"registration\"\n     data-component=\"registration\">\n  <div class=\"registration__main-container\">\n    <h1 class=\"registration__describe\">\n    Создание Аккаунта\n    </h1>\n    <div class=\"registration__form-container\"\n         data-element=\"registration__form-container\">\n    </div>\n  </div>\n</div>\n";
},"useData":true});

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _baseComponent = _interopRequireDefault(__webpack_require__(4));

__webpack_require__(63);

var _formRegistration = _interopRequireDefault(__webpack_require__(95));

var _template = _interopRequireDefault(__webpack_require__(102));

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
    return _this;
  }

  _createClass(Registration, [{
    key: "render",
    value: function render() {
      this.el.innerHTML = (0, _template.default)();
    }
  }]);

  return Registration;
}(_baseComponent.default);

module.exports = Registration;

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pubsubJs = _interopRequireDefault(__webpack_require__(5));

var _baseComponent = _interopRequireDefault(__webpack_require__(4));

__webpack_require__(64);

__webpack_require__(96);

var _tipInline = _interopRequireDefault(__webpack_require__(65));

var _template = _interopRequireDefault(__webpack_require__(98));

var _buttonSubmit = _interopRequireDefault(__webpack_require__(66));

var _inputName = _interopRequireDefault(__webpack_require__(99));

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
    _this.eventsPubSub = {};

    _this.render();

    _this.elements.form = document.querySelector('[data-component="form-registration"]');
    _this.elements.tipNameContainer = _this.elements.form.querySelector('[data-element="form-registration__tip-name-container"]');
    _this.elements.nameContainer = _this.elements.form.querySelector('[data-element="form-registration__name-container"]');
    _this.elements.tipEmailContainer = _this.elements.form.querySelector('[data-element="form-registration__tip-email-container"]');
    _this.elements.emailContainer = _this.elements.form.querySelector('[data-element="form-registration__email-container"]');
    _this.elements.tipPasswordContainer = _this.elements.form.querySelector('[data-element="form-registration__tip-password-container"]');
    _this.elements.passwordContainer = _this.elements.form.querySelector('[data-element="form-registration__password-container"]');
    _this.elements.buttonSubmitContainer = _this.elements.form.querySelector('[data-element="form-registration__submit-container"]');

    _this.initComponentInputName();

    _this.initComponentInputEmail();

    _this.initComponentInputPassword();

    _this.initComponentButtonSubmit();

    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));

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
      this.eventsPubSub.responseValidationName = _pubsubJs.default.subscribe('responseValidationName', this.onValidation.bind(this));
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
      var submit = e.target.closest('[data-component="button-submit-registration"]');

      if (submit) {
        if (!this.elements.form.contains(submit)) {
          return;
        }

        e.preventDefault(); // запрещает срабатывание события "submit"

        _pubsubJs.default.publish('requestValidationPassword');

        _pubsubJs.default.publish('requestValidationEmail');

        _pubsubJs.default.publish('requestValidationName');

        console.log('click');
      }
    }
  }, {
    key: "onValidation",
    value: function onValidation(msg, _ref2) {
      var status = _ref2.status;

      if (msg === 'responseValidationName') {
        this.isValidName = status.isValid;
        this.tipNameHendler({
          isValid: status.isValid,
          message: status.message
        });
      }

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

      if (this.isValidName === undefined // сработали все события
      || this.isValidEmail === undefined || this.isValidPassword === undefined) {
        return;
      }

      this.setFocus();

      if (this.isValidName && this.isValidEmail // если поля валидные
      && this.isValidPassword) {
        console.log('submit');
      }

      delete this.isValidName;
      delete this.isValidEmail;
      delete this.isValidPassword;
    }
  }, {
    key: "setFocus",
    value: function setFocus() {
      if (!this.isValidName) {
        _pubsubJs.default.publish('setFocusName');

        return;
      }

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
    key: "tipNameHendler",
    value: function tipNameHendler(_ref3) {
      var isValid = _ref3.isValid,
          message = _ref3.message;

      if (isValid && this.components.tipName) {
        _pubsubJs.default.publish('showTipName', {
          message: ''
        });
      }

      if (!isValid) {
        if (!this.components.tipName) {
          this.initComponentTipName();
        }

        _pubsubJs.default.publish('showTipName', {
          message: message
        });
      }
    }
  }, {
    key: "tipEmailHendler",
    value: function tipEmailHendler(_ref4) {
      var isValid = _ref4.isValid,
          message = _ref4.message;

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
    value: function tipPasswordHendler(_ref5) {
      var isValid = _ref5.isValid,
          message = _ref5.message;

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
    key: "initComponentInputName",
    value: function initComponentInputName() {
      this.components.inputName = new _inputName.default({
        el: this.elements.nameContainer,
        componentName: 'input-name',
        id: 'name',
        events: {
          subscribeValidation: 'requestValidationName',
          subscribeSetFocus: 'setFocusName',
          publishValidation: 'responseValidationName'
        }
      });
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
    key: "initComponentTipName",
    value: function initComponentTipName() {
      this.components.tipName = new _tipInline.default({
        el: this.elements.tipNameContainer,
        componentName: 'tip-inline-Name',
        subscribeEvent: 'showTipName'
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

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(97);

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

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".form-registration__name-container {\n  margin-bottom: 8px; }\n\n.form-registration__email-container {\n  margin-bottom: 8px; }\n\n.form-registration__submit-container {\n  margin-top: 15px;\n  float: right; }\n\n.form-registration::after {\n  content: '';\n  clear: both;\n  display: block; }\n", ""]);

// exports


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form class=\"form-registration\"\n      data-component=\"form-registration\">\n\n  <label class=\"form-label form-registration__label\"\n         for=\"name\">\n  Имя:\n  </label>\n  <div class=\"form-registration__tip-container\"\n       data-element=\"form-registration__tip-name-container\">\n  </div>\n  <div class=\"form-registration__name-container\"\n       data-element=\"form-registration__name-container\">\n  </div>\n\n  <label class=\"form-label form-registration__label\"\n         for=\"email\">\n  Почта\n  </label>\n  <div class=\"form-registration__tip-container\"\n       data-element=\"form-registration__tip-email-container\">\n  </div>\n  <div class=\"form-registration__email-container\"\n       data-element=\"form-registration__email-container\">\n  </div>\n\n  <label class=\"form-label form-registration__label\"\n         for=\"password\">\n  Пароль\n  </label>\n  <div class=\"form-registration__tip-container\"\n       data-element=\"form-registration__tip-password-container\">\n  </div>\n  <div class=\"form-registration__password-container\"\n       data-element=\"form-registration__password-container\">\n  </div>\n\n  <div class=\"form-registration__submit-container\"\n       data-element=\"form-registration__submit-container\">\n  </div>\n</form>\n";
},"useData":true});

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pubsubJs = _interopRequireDefault(__webpack_require__(5));

var _baseInput = _interopRequireDefault(__webpack_require__(60));

__webpack_require__(61);

var _validationName = _interopRequireDefault(__webpack_require__(100));

var _template = _interopRequireDefault(__webpack_require__(101));

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
        id = _ref.id,
        events = _ref.events;

    _classCallCheck(this, InputName);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputName).call(this, {
      el: el
    }));

    _this.render({
      componentName: componentName,
      id: id
    });

    _this.elements.input = document.querySelector("[data-component=\"".concat(componentName, "\"]"));

    _this.addEvents({
      events: events
    });

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
    key: "addEvents",
    value: function addEvents(_ref3) {
      var events = _ref3.events;
      this.eventsPubSub.validation = _pubsubJs.default.subscribe(events.subscribeValidation, this.onValidation.bind(this, {
        events: events
      }));
      this.eventsPubSub.setFocus = _pubsubJs.default.subscribe(events.subscribeSetFocus, this.onSetFocus.bind(this));
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      this.unsubscribe();
    }
  }, {
    key: "onValidation",
    value: function onValidation(_ref4) {
      var events = _ref4.events;
      var nameStatus = (0, _validationName.default)({
        value: this.elements.input.value
      });

      _pubsubJs.default.publish(events.publishValidation, {
        status: nameStatus,
        data: this.elements.input.value
      });

      this.backlightValid({
        isValid: nameStatus.isValid
      });
    }
  }]);

  return InputName;
}(_baseInput.default);

exports.default = InputName;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLWRyaXZlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pbnB1dHMvaW5wdXQtbmFtZS92YWxpZGF0aW9uLW5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL2lucHV0LW5hbWUvdGVtcGxhdGUuaGJzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi90ZW1wbGF0ZS5oYnMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZm9ybXMvZm9ybS1yZWdpc3RyYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvZm9ybS1yZWdpc3RyYXRpb24vc3R5bGUuc2Nzcz9hNDZkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tcmVnaXN0cmF0aW9uL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvZm9ybS1yZWdpc3RyYXRpb24vdGVtcGxhdGUuaGJzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pbnB1dHMvaW5wdXQtbmFtZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVnRWV4cFBhdHRlcm5zIGZyb20gJ2NvbXBvbmVudHMvX19zaGFyZWQvYmFzZS1pbnB1dC9wYXR0ZXJuLXJlZy1leHAnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyB2YWx1ZSB9KSA9PiB7XG4gIGlmICh2YWx1ZS5zZWFyY2gocmVnRWV4cFBhdHRlcm5zLmVtcHR5KSA9PT0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiAn0JLQstC10LTQuNGC0LUg0LjQvNGPJyxcbiAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cbiAgaWYgKHZhbHVlLnNlYXJjaChyZWdFZXhwUGF0dGVybnMubWF4TGVuZ3RoTmFtZSkgPT09IC0xKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6ICfQmNC80Y8g0L3QtSDQtNC+0LvQttC90L4g0L/RgNC10LLRi9GI0LDRgtGMIDIwINGB0LjQvNCy0L7Qu9C+0LInLFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgaXNWYWxpZDogdHJ1ZSxcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvaW5wdXRzL2lucHV0LW5hbWUvdmFsaWRhdGlvbi1uYW1lLmpzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL0ZpbG1SZW50YWwvd2ViLXByb2plY3RzL3NpbWJpb3otZnJvbnQtZW5kL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiPGlucHV0IGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1uYW1lXFxcIlxcbiAgICAgICBkYXRhLWNvbXBvbmVudD1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmNvbXBvbmVudE5hbWUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbXBvbmVudE5hbWUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImNvbXBvbmVudE5hbWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIlxcbiAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICBpZD1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmlkIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiaWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL2lucHV0LW5hbWUvdGVtcGxhdGUuaGJzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL0ZpbG1SZW50YWwvd2ViLXByb2plY3RzL3NpbWJpb3otZnJvbnQtZW5kL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcInJlZ2lzdHJhdGlvblxcXCJcXG4gICAgIGRhdGEtY29tcG9uZW50PVxcXCJyZWdpc3RyYXRpb25cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwicmVnaXN0cmF0aW9uX19tYWluLWNvbnRhaW5lclxcXCI+XFxuICAgIDxoMSBjbGFzcz1cXFwicmVnaXN0cmF0aW9uX19kZXNjcmliZVxcXCI+XFxuICAgINCh0L7Qt9C00LDQvdC40LUg0JDQutC60LDRg9C90YLQsFxcbiAgICA8L2gxPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyZWdpc3RyYXRpb25fX2Zvcm0tY29udGFpbmVyXFxcIlxcbiAgICAgICAgIGRhdGEtZWxlbWVudD1cXFwicmVnaXN0cmF0aW9uX19mb3JtLWNvbnRhaW5lclxcXCI+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi90ZW1wbGF0ZS5oYnNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL19fc2hhcmVkL2Jhc2UtY29tcG9uZW50JztcbmltcG9ydCAnY29tcG9uZW50cy9fX3NoYXJlZC9sb2dpbi1yZWdpc3RyYXRpb24vc3R5bGUuc2Nzcyc7IC8vIGNzc1xuaW1wb3J0IEZvcm1SZWdpc3RyYXRpb24gZnJvbSAnLi4vZm9ybXMvZm9ybS1yZWdpc3RyYXRpb24nO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUuaGJzJztcblxuXG5jbGFzcyBSZWdpc3RyYXRpb24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyBlbCB9KSB7XG4gICAgc3VwZXIoeyBlbCB9KTtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICB0aGlzLmV2ZW50c1B1YlN1YiA9IHt9O1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmVsZW1lbnRzLnJlZ2lzdHJhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbXBvbmVudD1cInJlZ2lzdHJhdGlvblwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMuRm9ybUNvbnRhaW5lciA9IHRoaXMuZWxlbWVudHMucmVnaXN0cmF0aW9uLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJyZWdpc3RyYXRpb25fX2Zvcm0tY29udGFpbmVyXCJdJyk7XG5cbiAgICB0aGlzLmNvbXBvbmVudHMuZm9ybVJlZ2lzdHJhdGlvbiA9IG5ldyBGb3JtUmVnaXN0cmF0aW9uKHtcbiAgICAgIGVsOiB0aGlzLmVsZW1lbnRzLkZvcm1Db250YWluZXIsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVnaXN0cmF0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9pbmRleC5qcyIsImltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvX19zaGFyZWQvYmFzZS1jb21wb25lbnQnO1xuaW1wb3J0ICdjb21wb25lbnRzL19fc2hhcmVkL2Zvcm0vc3R5bGUuc2Nzcyc7IC8vIGNzc1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnOyAvLyBjc3NcbmltcG9ydCBUaXBJbmxpbmUgZnJvbSAnLi4vLi4vdGlwLWlubGluZSc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZS5oYnMnOyAvLyB0ZW1wbGF0ZVxuaW1wb3J0IEJ1dHRvblN1Ym1pdCBmcm9tICcuLi8uLi9idXR0b25zL2J1dHRvbi1zdWJtaXQnO1xuaW1wb3J0IElucHV0TmFtZSBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXQtbmFtZSc7XG5pbXBvcnQgSW5wdXRFbWFpbCBmcm9tICcuLi8uLi9pbnB1dHMvaW5wdXQtZW1haWwnO1xuaW1wb3J0IElucHV0UGFzc3dvcmQgZnJvbSAnLi4vLi4vaW5wdXRzL2lucHV0LXBhc3N3b3JkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVJlZ2lzdHJhdGlvbiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih7IGVsIH0pIHtcbiAgICBzdXBlcih7IGVsIH0pO1xuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgIHRoaXMuZXZlbnRzUHViU3ViID0ge307XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuZWxlbWVudHMuZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbXBvbmVudD1cImZvcm0tcmVnaXN0cmF0aW9uXCJdJyk7XG4gICAgdGhpcy5lbGVtZW50cy50aXBOYW1lQ29udGFpbmVyID0gdGhpcy5lbGVtZW50cy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtLXJlZ2lzdHJhdGlvbl9fdGlwLW5hbWUtY29udGFpbmVyXCJdJyk7XG4gICAgdGhpcy5lbGVtZW50cy5uYW1lQ29udGFpbmVyID0gdGhpcy5lbGVtZW50cy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtLXJlZ2lzdHJhdGlvbl9fbmFtZS1jb250YWluZXJcIl0nKTtcbiAgICB0aGlzLmVsZW1lbnRzLnRpcEVtYWlsQ29udGFpbmVyID0gdGhpcy5lbGVtZW50cy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtLXJlZ2lzdHJhdGlvbl9fdGlwLWVtYWlsLWNvbnRhaW5lclwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMuZW1haWxDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tcmVnaXN0cmF0aW9uX19lbWFpbC1jb250YWluZXJcIl0nKTtcbiAgICB0aGlzLmVsZW1lbnRzLnRpcFBhc3N3b3JkQ29udGFpbmVyID0gdGhpcy5lbGVtZW50cy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVsZW1lbnQ9XCJmb3JtLXJlZ2lzdHJhdGlvbl9fdGlwLXBhc3N3b3JkLWNvbnRhaW5lclwiXScpO1xuICAgIHRoaXMuZWxlbWVudHMucGFzc3dvcmRDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLmZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZWxlbWVudD1cImZvcm0tcmVnaXN0cmF0aW9uX19wYXNzd29yZC1jb250YWluZXJcIl0nKTtcbiAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvblN1Ym1pdENvbnRhaW5lciA9IHRoaXMuZWxlbWVudHMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1lbGVtZW50PVwiZm9ybS1yZWdpc3RyYXRpb25fX3N1Ym1pdC1jb250YWluZXJcIl0nKTtcblxuICAgIHRoaXMuaW5pdENvbXBvbmVudElucHV0TmFtZSgpO1xuICAgIHRoaXMuaW5pdENvbXBvbmVudElucHV0RW1haWwoKTtcbiAgICB0aGlzLmluaXRDb21wb25lbnRJbnB1dFBhc3N3b3JkKCk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50QnV0dG9uU3VibWl0KCk7XG5cbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEV2ZW50cygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGVtcGxhdGUoKTtcbiAgfVxuXG4gIGFkZEV2ZW50cygpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgIHRoaXMuZXZlbnRzUHViU3ViLnJlc3BvbnNlVmFsaWRhdGlvbk5hbWUgPSBQdWJTdWIuc3Vic2NyaWJlKCdyZXNwb25zZVZhbGlkYXRpb25OYW1lJywgdGhpcy5vblZhbGlkYXRpb24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ldmVudHNQdWJTdWIucmVzcG9uc2VWYWxpZGF0aW9uRW1haWwgPSBQdWJTdWIuc3Vic2NyaWJlKCdyZXNwb25zZVZhbGlkYXRpb25FbWFpbCcsIHRoaXMub25WYWxpZGF0aW9uLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZXZlbnRzUHViU3ViLnJlc3BvbnNlVmFsaWRhdGlvblBhc3N3b3JkID0gUHViU3ViLnN1YnNjcmliZSgncmVzcG9uc2VWYWxpZGF0aW9uUGFzc3dvcmQnLCB0aGlzLm9uVmFsaWRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50cygpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSkge1xuICAgIGNvbnN0IHN1Ym1pdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWNvbXBvbmVudD1cImJ1dHRvbi1zdWJtaXQtcmVnaXN0cmF0aW9uXCJdJyk7XG5cbiAgICBpZiAoc3VibWl0KSB7XG4gICAgICBpZiAoIXRoaXMuZWxlbWVudHMuZm9ybS5jb250YWlucyhzdWJtaXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8g0LfQsNC/0YDQtdGJ0LDQtdGCINGB0YDQsNCx0LDRgtGL0LLQsNC90LjQtSDRgdC+0LHRi9GC0LjRjyBcInN1Ym1pdFwiXG5cbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdyZXF1ZXN0VmFsaWRhdGlvblBhc3N3b3JkJyk7XG4gICAgICBQdWJTdWIucHVibGlzaCgncmVxdWVzdFZhbGlkYXRpb25FbWFpbCcpO1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ3JlcXVlc3RWYWxpZGF0aW9uTmFtZScpO1xuXG4gICAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcbiAgICB9XG4gIH1cblxuICBvblZhbGlkYXRpb24obXNnLCB7IHN0YXR1cyB9KSB7XG4gICAgaWYgKG1zZyA9PT0gJ3Jlc3BvbnNlVmFsaWRhdGlvbk5hbWUnKSB7XG4gICAgICB0aGlzLmlzVmFsaWROYW1lID0gc3RhdHVzLmlzVmFsaWQ7XG4gICAgICB0aGlzLnRpcE5hbWVIZW5kbGVyKHtcbiAgICAgICAgaXNWYWxpZDogc3RhdHVzLmlzVmFsaWQsXG4gICAgICAgIG1lc3NhZ2U6IHN0YXR1cy5tZXNzYWdlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG1zZyA9PT0gJ3Jlc3BvbnNlVmFsaWRhdGlvbkVtYWlsJykge1xuICAgICAgdGhpcy5pc1ZhbGlkRW1haWwgPSBzdGF0dXMuaXNWYWxpZDtcbiAgICAgIHRoaXMudGlwRW1haWxIZW5kbGVyKHtcbiAgICAgICAgaXNWYWxpZDogc3RhdHVzLmlzVmFsaWQsXG4gICAgICAgIG1lc3NhZ2U6IHN0YXR1cy5tZXNzYWdlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG1zZyA9PT0gJ3Jlc3BvbnNlVmFsaWRhdGlvblBhc3N3b3JkJykge1xuICAgICAgdGhpcy5pc1ZhbGlkUGFzc3dvcmQgPSBzdGF0dXMuaXNWYWxpZDtcbiAgICAgIHRoaXMudGlwUGFzc3dvcmRIZW5kbGVyKHtcbiAgICAgICAgaXNWYWxpZDogc3RhdHVzLmlzVmFsaWQsXG4gICAgICAgIG1lc3NhZ2U6IHN0YXR1cy5tZXNzYWdlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNWYWxpZE5hbWUgPT09IHVuZGVmaW5lZCAvLyDRgdGA0LDQsdC+0YLQsNC70Lgg0LLRgdC1INGB0L7QsdGL0YLQuNGPXG4gICAgfHwgdGhpcy5pc1ZhbGlkRW1haWwgPT09IHVuZGVmaW5lZFxuICAgIHx8IHRoaXMuaXNWYWxpZFBhc3N3b3JkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldEZvY3VzKCk7XG5cbiAgICBpZiAodGhpcy5pc1ZhbGlkTmFtZVxuICAgICYmIHRoaXMuaXNWYWxpZEVtYWlsIC8vINC10YHQu9C4INC/0L7Qu9GPINCy0LDQu9C40LTQvdGL0LVcbiAgICAmJiB0aGlzLmlzVmFsaWRQYXNzd29yZCkge1xuICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdCcpO1xuICAgIH1cblxuICAgIGRlbGV0ZSB0aGlzLmlzVmFsaWROYW1lO1xuICAgIGRlbGV0ZSB0aGlzLmlzVmFsaWRFbWFpbDtcbiAgICBkZWxldGUgdGhpcy5pc1ZhbGlkUGFzc3dvcmQ7XG4gIH1cblxuICBzZXRGb2N1cygpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZE5hbWUpIHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdzZXRGb2N1c05hbWUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzVmFsaWRFbWFpbCkge1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ3NldEZvY3VzRW1haWwnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzVmFsaWRQYXNzd29yZCkge1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ3NldEZvY3VzUGFzc3dvcmQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gIH1cblxuICB0aXBOYW1lSGVuZGxlcih7IGlzVmFsaWQsIG1lc3NhZ2UgfSkge1xuICAgIGlmIChpc1ZhbGlkICYmIHRoaXMuY29tcG9uZW50cy50aXBOYW1lKSB7XG4gICAgICBQdWJTdWIucHVibGlzaCgnc2hvd1RpcE5hbWUnLCB7IG1lc3NhZ2U6ICcnIH0pO1xuICAgIH1cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIGlmICghdGhpcy5jb21wb25lbnRzLnRpcE5hbWUpIHtcbiAgICAgICAgdGhpcy5pbml0Q29tcG9uZW50VGlwTmFtZSgpO1xuICAgICAgfVxuICAgICAgUHViU3ViLnB1Ymxpc2goJ3Nob3dUaXBOYW1lJywgeyBtZXNzYWdlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRpcEVtYWlsSGVuZGxlcih7IGlzVmFsaWQsIG1lc3NhZ2UgfSkge1xuICAgIGlmIChpc1ZhbGlkICYmIHRoaXMuY29tcG9uZW50cy50aXBFbWFpbCkge1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ3Nob3dUaXBFbWFpbCcsIHsgbWVzc2FnZTogJycgfSk7XG4gICAgfVxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudHMudGlwRW1haWwpIHtcbiAgICAgICAgdGhpcy5pbml0Q29tcG9uZW50VGlwRW1haWwoKTtcbiAgICAgIH1cbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdzaG93VGlwRW1haWwnLCB7IG1lc3NhZ2UgfSk7XG4gICAgfVxuICB9XG5cbiAgdGlwUGFzc3dvcmRIZW5kbGVyKHsgaXNWYWxpZCwgbWVzc2FnZSB9KSB7XG4gICAgaWYgKGlzVmFsaWQgJiYgdGhpcy5jb21wb25lbnRzLnRpcFBhc3N3b3JkKSB7XG4gICAgICBQdWJTdWIucHVibGlzaCgnc2hvd1RpcFBhc3N3b3JkJywgeyBtZXNzYWdlOiAnJyB9KTtcbiAgICB9XG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICBpZiAoIXRoaXMuY29tcG9uZW50cy50aXBQYXNzd29yZCkge1xuICAgICAgICB0aGlzLmluaXRDb21wb25lbnRUaXBQYXNzd29yZCgpO1xuICAgICAgfVxuICAgICAgUHViU3ViLnB1Ymxpc2goJ3Nob3dUaXBQYXNzd29yZCcsIHsgbWVzc2FnZSB9KTtcbiAgICB9XG4gIH1cblxuICBpbml0Q29tcG9uZW50SW5wdXROYW1lKCkge1xuICAgIHRoaXMuY29tcG9uZW50cy5pbnB1dE5hbWUgPSBuZXcgSW5wdXROYW1lKHtcbiAgICAgIGVsOiB0aGlzLmVsZW1lbnRzLm5hbWVDb250YWluZXIsXG4gICAgICBjb21wb25lbnROYW1lOiAnaW5wdXQtbmFtZScsXG4gICAgICBpZDogJ25hbWUnLFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIHN1YnNjcmliZVZhbGlkYXRpb246ICdyZXF1ZXN0VmFsaWRhdGlvbk5hbWUnLFxuICAgICAgICBzdWJzY3JpYmVTZXRGb2N1czogJ3NldEZvY3VzTmFtZScsXG4gICAgICAgIHB1Ymxpc2hWYWxpZGF0aW9uOiAncmVzcG9uc2VWYWxpZGF0aW9uTmFtZScsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdENvbXBvbmVudElucHV0RW1haWwoKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLmlucHV0RW1haWwgPSBuZXcgSW5wdXRFbWFpbCh7XG4gICAgICBlbDogdGhpcy5lbGVtZW50cy5lbWFpbENvbnRhaW5lcixcbiAgICAgIGNvbXBvbmVudE5hbWU6ICdpbnB1dC1lbWFpbCcsXG4gICAgICBpZDogJ2VtYWlsJyxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBzdWJzY3JpYmVWYWxpZGF0aW9uOiAncmVxdWVzdFZhbGlkYXRpb25FbWFpbCcsXG4gICAgICAgIHN1YnNjcmliZVNldEZvY3VzOiAnc2V0Rm9jdXNFbWFpbCcsXG4gICAgICAgIHB1Ymxpc2hWYWxpZGF0aW9uOiAncmVzcG9uc2VWYWxpZGF0aW9uRW1haWwnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRDb21wb25lbnRJbnB1dFBhc3N3b3JkKCkge1xuICAgIHRoaXMuY29tcG9uZW50cy5pbnB1dFBhc3N3b3JkID0gbmV3IElucHV0UGFzc3dvcmQoe1xuICAgICAgZWw6IHRoaXMuZWxlbWVudHMucGFzc3dvcmRDb250YWluZXIsXG4gICAgICBjb21wb25lbnROYW1lOiAnaW5wdXQtcGFzc3dvcmQnLFxuICAgICAgaWQ6ICdwYXNzd29yZCcsXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgc3Vic2NyaWJlVmFsaWRhdGlvbjogJ3JlcXVlc3RWYWxpZGF0aW9uUGFzc3dvcmQnLFxuICAgICAgICBzdWJzY3JpYmVTZXRGb2N1czogJ3NldEZvY3VzUGFzc3dvcmQnLFxuICAgICAgICBwdWJsaXNoVmFsaWRhdGlvbjogJ3Jlc3BvbnNlVmFsaWRhdGlvblBhc3N3b3JkJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBpbml0Q29tcG9uZW50VGlwTmFtZSgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMudGlwTmFtZSA9IG5ldyBUaXBJbmxpbmUoe1xuICAgICAgZWw6IHRoaXMuZWxlbWVudHMudGlwTmFtZUNvbnRhaW5lcixcbiAgICAgIGNvbXBvbmVudE5hbWU6ICd0aXAtaW5saW5lLU5hbWUnLFxuICAgICAgc3Vic2NyaWJlRXZlbnQ6ICdzaG93VGlwTmFtZScsXG4gICAgfSk7XG4gIH1cblxuICBpbml0Q29tcG9uZW50VGlwRW1haWwoKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLnRpcEVtYWlsID0gbmV3IFRpcElubGluZSh7XG4gICAgICBlbDogdGhpcy5lbGVtZW50cy50aXBFbWFpbENvbnRhaW5lcixcbiAgICAgIGNvbXBvbmVudE5hbWU6ICd0aXAtaW5saW5lLWVtYWlsJyxcbiAgICAgIHN1YnNjcmliZUV2ZW50OiAnc2hvd1RpcEVtYWlsJyxcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRDb21wb25lbnRUaXBQYXNzd29yZCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMudGlwUGFzc3dvcmQgPSBuZXcgVGlwSW5saW5lKHtcbiAgICAgIGVsOiB0aGlzLmVsZW1lbnRzLnRpcFBhc3N3b3JkQ29udGFpbmVyLFxuICAgICAgY29tcG9uZW50TmFtZTogJ3RpcC1pbmxpbmUtcGFzc3dvcmQnLFxuICAgICAgc3Vic2NyaWJlRXZlbnQ6ICdzaG93VGlwUGFzc3dvcmQnLFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdENvbXBvbmVudEJ1dHRvblN1Ym1pdCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuYnV0dG9uU3VibWl0ID0gbmV3IEJ1dHRvblN1Ym1pdCh7XG4gICAgICBlbDogdGhpcy5lbGVtZW50cy5idXR0b25TdWJtaXRDb250YWluZXIsXG4gICAgICBjb21wb25lbnROYW1lOiAnYnV0dG9uLXN1Ym1pdC1yZWdpc3RyYXRpb24nLFxuICAgICAgdmFsdWU6ICfQlNCQ0JvQldCVJyxcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tcmVnaXN0cmF0aW9uL2luZGV4LmpzIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zdHlsZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLXJlZ2lzdHJhdGlvbi9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtLXJlZ2lzdHJhdGlvbl9fbmFtZS1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxuXFxuLmZvcm0tcmVnaXN0cmF0aW9uX19lbWFpbC1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxuXFxuLmZvcm0tcmVnaXN0cmF0aW9uX19zdWJtaXQtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBmbG9hdDogcmlnaHQ7IH1cXG5cXG4uZm9ybS1yZWdpc3RyYXRpb246OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLXJlZ2lzdHJhdGlvbi9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvRmlsbVJlbnRhbC93ZWItcHJvamVjdHMvc2ltYmlvei1mcm9udC1lbmQvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiPGZvcm0gY2xhc3M9XFxcImZvcm0tcmVnaXN0cmF0aW9uXFxcIlxcbiAgICAgIGRhdGEtY29tcG9uZW50PVxcXCJmb3JtLXJlZ2lzdHJhdGlvblxcXCI+XFxuXFxuICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tbGFiZWwgZm9ybS1yZWdpc3RyYXRpb25fX2xhYmVsXFxcIlxcbiAgICAgICAgIGZvcj1cXFwibmFtZVxcXCI+XFxuICDQmNC80Y86XFxuICA8L2xhYmVsPlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX3RpcC1jb250YWluZXJcXFwiXFxuICAgICAgIGRhdGEtZWxlbWVudD1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX3RpcC1uYW1lLWNvbnRhaW5lclxcXCI+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tcmVnaXN0cmF0aW9uX19uYW1lLWNvbnRhaW5lclxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJmb3JtLXJlZ2lzdHJhdGlvbl9fbmFtZS1jb250YWluZXJcXFwiPlxcbiAgPC9kaXY+XFxuXFxuICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tbGFiZWwgZm9ybS1yZWdpc3RyYXRpb25fX2xhYmVsXFxcIlxcbiAgICAgICAgIGZvcj1cXFwiZW1haWxcXFwiPlxcbiAg0J/QvtGH0YLQsFxcbiAgPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tcmVnaXN0cmF0aW9uX190aXAtY29udGFpbmVyXFxcIlxcbiAgICAgICBkYXRhLWVsZW1lbnQ9XFxcImZvcm0tcmVnaXN0cmF0aW9uX190aXAtZW1haWwtY29udGFpbmVyXFxcIj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX2VtYWlsLWNvbnRhaW5lclxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJmb3JtLXJlZ2lzdHJhdGlvbl9fZW1haWwtY29udGFpbmVyXFxcIj5cXG4gIDwvZGl2PlxcblxcbiAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWxhYmVsIGZvcm0tcmVnaXN0cmF0aW9uX19sYWJlbFxcXCJcXG4gICAgICAgICBmb3I9XFxcInBhc3N3b3JkXFxcIj5cXG4gINCf0LDRgNC+0LvRjFxcbiAgPC9sYWJlbD5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tcmVnaXN0cmF0aW9uX190aXAtY29udGFpbmVyXFxcIlxcbiAgICAgICBkYXRhLWVsZW1lbnQ9XFxcImZvcm0tcmVnaXN0cmF0aW9uX190aXAtcGFzc3dvcmQtY29udGFpbmVyXFxcIj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX3Bhc3N3b3JkLWNvbnRhaW5lclxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJmb3JtLXJlZ2lzdHJhdGlvbl9fcGFzc3dvcmQtY29udGFpbmVyXFxcIj5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX3N1Ym1pdC1jb250YWluZXJcXFwiXFxuICAgICAgIGRhdGEtZWxlbWVudD1cXFwiZm9ybS1yZWdpc3RyYXRpb25fX3N1Ym1pdC1jb250YWluZXJcXFwiPlxcbiAgPC9kaXY+XFxuPC9mb3JtPlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9mb3JtLXJlZ2lzdHJhdGlvbi90ZW1wbGF0ZS5oYnNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJztcbmltcG9ydCBCYXNlSW5wdXQgZnJvbSAnY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWlucHV0JztcbmltcG9ydCAnY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWlucHV0L3N0eWxlLnNjc3MnOyAvLyBjc3NcbmltcG9ydCB2YWxpZGF0aW9uTmFtZSBmcm9tICcuL3ZhbGlkYXRpb24tbmFtZSc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZS5oYnMnOyAvLyB0ZW1wbGF0ZVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0TmFtZSBleHRlbmRzIEJhc2VJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBlbCxcbiAgICBjb21wb25lbnROYW1lLFxuICAgIGlkLFxuICAgIGV2ZW50cyxcbiAgfSkge1xuICAgIHN1cGVyKHsgZWwgfSk7XG5cbiAgICB0aGlzLnJlbmRlcih7IGNvbXBvbmVudE5hbWUsIGlkIH0pO1xuICAgIHRoaXMuZWxlbWVudHMuaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wb25lbnQ9XCIke2NvbXBvbmVudE5hbWV9XCJdYCk7XG5cbiAgICB0aGlzLmFkZEV2ZW50cyh7IGV2ZW50cyB9KTtcbiAgfVxuXG4gIHJlbmRlcih7IGNvbXBvbmVudE5hbWUsIGlkIH0pIHtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRlbXBsYXRlKHsgY29tcG9uZW50TmFtZSwgaWQgfSk7XG4gIH1cblxuICBhZGRFdmVudHMoeyBldmVudHMgfSkge1xuICAgIHRoaXMuZXZlbnRzUHViU3ViLnZhbGlkYXRpb24gPSBQdWJTdWIuc3Vic2NyaWJlKGV2ZW50cy5zdWJzY3JpYmVWYWxpZGF0aW9uLCB0aGlzLm9uVmFsaWRhdGlvbi5iaW5kKHRoaXMsIHsgZXZlbnRzIH0pKTtcbiAgICB0aGlzLmV2ZW50c1B1YlN1Yi5zZXRGb2N1cyA9IFB1YlN1Yi5zdWJzY3JpYmUoZXZlbnRzLnN1YnNjcmliZVNldEZvY3VzLCB0aGlzLm9uU2V0Rm9jdXMuYmluZCh0aGlzKSk7XG4gIH1cblxuICByZW1vdmVFdmVudHMoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgb25WYWxpZGF0aW9uKHsgZXZlbnRzIH0pIHtcbiAgICBjb25zdCBuYW1lU3RhdHVzID0gdmFsaWRhdGlvbk5hbWUoeyB2YWx1ZTogdGhpcy5lbGVtZW50cy5pbnB1dC52YWx1ZSB9KTtcbiAgICBQdWJTdWIucHVibGlzaChldmVudHMucHVibGlzaFZhbGlkYXRpb24sIHtcbiAgICAgIHN0YXR1czogbmFtZVN0YXR1cyxcbiAgICAgIGRhdGE6IHRoaXMuZWxlbWVudHMuaW5wdXQudmFsdWUsXG4gICAgfSk7XG4gICAgdGhpcy5iYWNrbGlnaHRWYWxpZCh7IGlzVmFsaWQ6IG5hbWVTdGF0dXMuaXNWYWxpZCB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2lucHV0cy9pbnB1dC1uYW1lL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBVEE7QUFZQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFqQkE7QUFDQTtBQW1CQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXRCQTtBQXNCQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBVUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFVQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQVVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7OztBQS9OQTtBQUNBOzs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQUdBOzs7OztBQUNBO0FBS0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFPQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFuQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==