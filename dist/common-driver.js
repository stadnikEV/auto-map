webpackJsonp([0],Array(65).concat([
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseComponent = _interopRequireDefault(__webpack_require__(4));

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

var InputEmail =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(InputEmail, _BaseComponent);

  function InputEmail(_ref) {
    var _this;

    var el = _ref.el;

    _classCallCheck(this, InputEmail);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputEmail).call(this, {
      el: el
    }));
    _this.eventsPubSub = {};
    return _this;
  }

  _createClass(InputEmail, [{
    key: "getData",
    value: function getData() {
      return this.elements.input.value;
    }
  }, {
    key: "backlightValid",
    value: function backlightValid(_ref2) {
      var isValid = _ref2.isValid;

      if (isValid) {
        this.elements.input.classList.remove('input_invalid');
        return;
      }

      this.elements.input.classList.add('input_invalid');
    }
  }, {
    key: "setFocus",
    value: function setFocus() {
      this.elements.input.focus();
    }
  }, {
    key: "disable",
    value: function disable() {
      console.log('disabled');
      this.elements.input.setAttribute('disabled', '');
    }
  }, {
    key: "enable",
    value: function enable() {
      this.elements.input.removeAttribute('disabled', '');
    }
  }]);

  return InputEmail;
}(_baseComponent.default);

exports.default = InputEmail;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(86);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  empty: new RegExp('^$'),
  minLengthPassword: new RegExp('^.{8,}$'),
  maxLengthPassword: new RegExp('^.{0,100}$'),
  maxLengthName: new RegExp('^.{0,20}$'),
  symbolsBeforeAt: new RegExp('^[^@].+$'),
  symbolsAfterAt: new RegExp('^.*@.+$'),
  atOnlyOne: new RegExp('^[^@]*@[^@]*$'),
  maxLengthEmail: new RegExp('^.{0,254}$')
};
exports.default = _default;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(74);

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(76);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseComponent = _interopRequireDefault(__webpack_require__(4));

var _template = _interopRequireDefault(__webpack_require__(79));

__webpack_require__(80);

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

// css
var TipInline =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(TipInline, _BaseComponent);

  function TipInline(_ref) {
    var _this;

    var el = _ref.el,
        componentName = _ref.componentName;

    _classCallCheck(this, TipInline);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TipInline).call(this, {
      el: el
    }));

    _this.render({
      componentName: componentName
    });

    _this.elements.TipInline = document.querySelector("[data-component=\"".concat(componentName, "\"]"));
    return _this;
  }

  _createClass(TipInline, [{
    key: "render",
    value: function render(_ref2) {
      var componentName = _ref2.componentName;
      this.el.innerHTML = (0, _template.default)({
        componentName: componentName
      });
    }
  }, {
    key: "showTip",
    value: function showTip(_ref3) {
      var message = _ref3.message;
      this.elements.TipInline.innerHTML = message;
    }
  }]);

  return TipInline;
}(_baseComponent.default);

exports.default = TipInline;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseComponent = _interopRequireDefault(__webpack_require__(4));

__webpack_require__(9);

__webpack_require__(83);

var _template = _interopRequireDefault(__webpack_require__(85));

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
var ButtonSubmit =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(ButtonSubmit, _BaseComponent);

  function ButtonSubmit(_ref) {
    var _this;

    var el = _ref.el,
        value = _ref.value,
        componentName = _ref.componentName;

    _classCallCheck(this, ButtonSubmit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonSubmit).call(this, {
      el: el
    }));
    _this.eventsPubSub = {};

    _this.render({
      value: value,
      componentName: componentName
    });

    _this.elements.button = document.querySelector("[data-component=\"".concat(componentName, "\"]"));

    _this.addEvents();

    return _this;
  }

  _createClass(ButtonSubmit, [{
    key: "render",
    value: function render(_ref2) {
      var value = _ref2.value,
          componentName = _ref2.componentName;
      this.el.innerHTML = (0, _template.default)({
        value: value,
        componentName: componentName
      });
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      this.elements.button.onmousedown = function () {
        return false;
      }; // запрет outline при клике

    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      this.elements.button.onmousedown = null;
    }
  }]);

  return ButtonSubmit;
}(_baseComponent.default);

exports.default = ButtonSubmit;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseInput = _interopRequireDefault(__webpack_require__(65));

__webpack_require__(66);

var _validationEmail = _interopRequireDefault(__webpack_require__(87));

var _template = _interopRequireDefault(__webpack_require__(88));

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
var InputEmail =
/*#__PURE__*/
function (_BaseInput) {
  _inherits(InputEmail, _BaseInput);

  function InputEmail(_ref) {
    var _this;

    var el = _ref.el,
        componentName = _ref.componentName,
        id = _ref.id;

    _classCallCheck(this, InputEmail);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputEmail).call(this, {
      el: el
    }));

    _this.render({
      componentName: componentName,
      id: id
    });

    _this.elements.input = document.querySelector("[data-component=\"".concat(componentName, "\"]"));
    return _this;
  }

  _createClass(InputEmail, [{
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
      var emailStatus = (0, _validationEmail.default)({
        value: this.elements.input.value
      });
      this.backlightValid({
        isValid: emailStatus.isValid
      });
      return emailStatus;
    }
  }]);

  return InputEmail;
}(_baseInput.default);

exports.default = InputEmail;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseInput = _interopRequireDefault(__webpack_require__(65));

__webpack_require__(66);

__webpack_require__(89);

var _validationPassword = _interopRequireDefault(__webpack_require__(91));

var _buttonEye = _interopRequireDefault(__webpack_require__(92));

var _template = _interopRequireDefault(__webpack_require__(98));

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
var InputPassword =
/*#__PURE__*/
function (_BaseInput) {
  _inherits(InputPassword, _BaseInput);

  function InputPassword(_ref) {
    var _this;

    var el = _ref.el,
        componentName = _ref.componentName,
        id = _ref.id;

    _classCallCheck(this, InputPassword);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputPassword).call(this, {
      el: el
    }));
    _this.components = {};

    _this.render({
      componentName: componentName,
      id: id
    });

    _this.elements.mainContainer = document.querySelector("[data-component=\"".concat(componentName, "\"]"));
    _this.elements.input = _this.elements.mainContainer.querySelector("[data-element=\"".concat(componentName, "__inputField\"]"));
    _this.elements.buttonEyeContainer = _this.elements.mainContainer.querySelector("[data-element=\"".concat(componentName, "__button-eye-container\"]"));

    _this.initComponentButtonEye();

    return _this;
  }

  _createClass(InputPassword, [{
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
      var passwordStatus = (0, _validationPassword.default)({
        value: this.elements.input.value
      });
      this.backlightValid({
        isValid: passwordStatus.isValid
      });
      return passwordStatus;
    }
  }, {
    key: "initComponentButtonEye",
    value: function initComponentButtonEye() {
      this.components.buttonEye = new _buttonEye.default({
        el: this.elements.buttonEyeContainer,
        componentName: 'button-eye-password',
        clickHendler: this.buttonEyeHendler.bind(this)
      });
    }
  }, {
    key: "buttonEyeHendler",
    value: function buttonEyeHendler(_ref3) {
      var isShown = _ref3.isShown;

      if (isShown) {
        this.elements.input.type = 'text';
        return;
      }

      this.elements.input.type = 'password';
    }
  }]);

  return InputPassword;
}(_baseInput.default);

exports.default = InputPassword;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".login,\n.registration {\n  overflow: auto;\n  height: 100%;\n  white-space: nowrap;\n  text-align: center;\n  background: linear-gradient(25deg, rgba(39, 171, 255, 0.6) 0%, rgba(39, 171, 255, 0.95) 25%, #2eb4ff 25.05%, rgba(46, 180, 255, 0.8) 75%, rgba(39, 171, 255, 0.65) 75.01%, rgba(39, 171, 255, 0.3)); }\n  .login:before,\n  .registration:before {\n    content: '';\n    height: 100%;\n    display: inline-block;\n    vertical-align: middle; }\n  .login__describe,\n  .registration__describe {\n    font-size: 125%;\n    color: white;\n    margin-bottom: 20px;\n    cursor: default;\n    text-align: center; }\n  .login__main-container,\n  .registration__main-container {\n    width: 270px;\n    padding: 10px 0;\n    display: inline-block;\n    vertical-align: middle;\n    text-align: left;\n    white-space: normal; }\n  .login__main-container:after,\n  .registration__main-container:after {\n    content: '';\n    display: inline-block;\n    height: 50px; }\n", ""]);

// exports


/***/ }),
/* 75 */,
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".form-label {\n  font-size: 100%;\n  color: white;\n  cursor: pointer; }\n", ""]);

// exports


/***/ }),
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"tip-inline\"\n     data-component=\""
    + container.escapeExpression(((helper = (helper = helpers.componentName || (depth0 != null ? depth0.componentName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"componentName","hash":{},"data":data}) : helper)))
    + "\">\n</div>\n";
},"useData":true});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(81);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js??ref--4-2!./style.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js??ref--4-2!./style.scss");

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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".tip-inline {\n  color: #db3f35;\n  font-size: 80%; }\n", ""]);

// exports


/***/ }),
/* 82 */,
/* 83 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(84);

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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".button-submit {\n  font-size: 100%;\n  padding: 10px 16px;\n  background-color: #f7f7f7;\n  color: #0a88e1;\n  border-radius: 2px; }\n  .button-submit:hover {\n    background-color: white; }\n", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input type=\"submit\"\n       value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\"\n       class=\"button button-submit\"\n       data-component=\""
    + alias4(((helper = (helper = helpers.componentName || (depth0 != null ? depth0.componentName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentName","hash":{},"data":data}) : helper)))
    + "\">\n";
},"useData":true});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".input {\n  font-size: 85%;\n  width: 100%;\n  height: 30px;\n  padding-left: 5px;\n  border-top: solid 1px #9b9b9b;\n  border-left: solid 1px #9b9b9b;\n  border-right: solid 1px gainsboro;\n  border-bottom: solid 1px gainsboro;\n  border-radius: 2px;\n  box-sizing: border-box;\n  background-color: #fbfbbc; }\n  .input:focus {\n    outline: none;\n    border: solid 2px #36a9ea; }\n    .input:focus.input_invalid {\n      border: solid 1px #db3f35; }\n  .input_invalid {\n    border: solid 1px #db3f35; }\n", ""]);

// exports


/***/ }),
/* 87 */
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
      message: 'Введите почтовый адрес',
      isValid: false
    };
  }

  if (value.search(_patternRegExp.default.atOnlyOne) === -1) {
    return {
      message: 'Адрес должен содержать один символ "@"',
      isValid: false
    };
  }

  if (value.search(_patternRegExp.default.symbolsBeforeAt) === -1) {
    return {
      message: 'Заполните адрес до символа "@"',
      isValid: false
    };
  }

  if (value.search(_patternRegExp.default.symbolsAfterAt) === -1) {
    return {
      message: 'Заполните адрес после символа "@"',
      isValid: false
    };
  }

  if (value.search(_patternRegExp.default.maxLengthEmail) === -1) {
    return {
      message: 'Адрес не должен превышать 254 символов',
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input class=\"input input-email\"\n       data-component=\""
    + alias4(((helper = (helper = helpers.componentName || (depth0 != null ? depth0.componentName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentName","hash":{},"data":data}) : helper)))
    + "\"\n       type=\"email\"\n       id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n";
},"useData":true});

/***/ }),
/* 89 */
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".input-password {\n  position: relative; }\n  .input-password__button-eye-container {\n    float: right;\n    position: absolute;\n    right: 0;\n    top: 0;\n    height: 100%;\n    margin-right: 7px; }\n  .input-password__inputField {\n    padding-right: 14%; }\n", ""]);

// exports


/***/ }),
/* 91 */
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
      message: 'Введите пароль',
      isValid: false
    };
  }

  if (value.search(_patternRegExp.default.minLengthPassword) === -1) {
    return {
      message: 'Пароль не должен быть короче 8 символов',
      isValid: false
    };
  }

  if (value.search(_patternRegExp.default.maxLengthPassword) === -1) {
    return {
      message: 'Пароль не должен превышать 100 символов',
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseComponent = _interopRequireDefault(__webpack_require__(4));

__webpack_require__(9);

__webpack_require__(93);

var _eyeShow = _interopRequireDefault(__webpack_require__(95));

var _eyeHide = _interopRequireDefault(__webpack_require__(96));

var _template = _interopRequireDefault(__webpack_require__(97));

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

var ButtonEye =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(ButtonEye, _BaseComponent);

  function ButtonEye(_ref) {
    var _this;

    var el = _ref.el,
        componentName = _ref.componentName,
        clickHendler = _ref.clickHendler;

    _classCallCheck(this, ButtonEye);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonEye).call(this, {
      el: el
    }));
    _this.clickHendler = clickHendler;

    _this.render({
      componentName: componentName
    });

    _this.elements.button = document.querySelector("[data-component=\"".concat(componentName, "\"]"));
    _this.elements.imgShow = _this.elements.button.querySelector("[data-element=\"".concat(componentName, "__img-show\"]"));
    _this.elements.imgHide = _this.elements.button.querySelector("[data-element=\"".concat(componentName, "__img-hide\"]"));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.addEvents();

    return _this;
  }

  _createClass(ButtonEye, [{
    key: "render",
    value: function render(_ref2) {
      var componentName = _ref2.componentName;
      this.el.innerHTML = (0, _template.default)({
        componentName: componentName,
        imgShowUrl: _eyeShow.default,
        imgHideUrl: _eyeHide.default
      });
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      this.elements.button.addEventListener('click', this.onClick);

      this.elements.button.onmousedown = function () {
        return false;
      }; // запрет outline при клике

    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      this.elements.button.removeEventListener('click', this.onClick);
      this.elements.button.onmousedown = null;
    }
  }, {
    key: "onClick",
    value: function onClick() {
      if (!this.isPasswordShown) {
        this.isPasswordShown = true;
        this.show({
          el: this.elements.imgHide
        });
        this.hide({
          el: this.elements.imgShow
        });
        this.clickHendler({
          isShown: true
        });
        return;
      }

      this.isPasswordShown = false;
      this.show({
        el: this.elements.imgShow
      });
      this.hide({
        el: this.elements.imgHide
      });
      this.clickHendler({
        isShown: false
      });
    }
  }]);

  return ButtonEye;
}(_baseComponent.default);

exports.default = ButtonEye;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(94);

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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".button-eye {\n  background-color: rgba(0, 0, 0, 0); }\n  .button-eye__img-show, .button-eye__img-hide {\n    height: 100%; }\n", ""]);

// exports


/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3000/images/eye-show.svg";

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3000/images/eye-hide.svg";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<button class=\"button button-eye\"\n        data-component=\""
    + alias4(((helper = (helper = helpers.componentName || (depth0 != null ? depth0.componentName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentName","hash":{},"data":data}) : helper)))
    + "\"\n        type=\"button\">\n  <img class=\"button-eye__img-show\"\n       data-element=\""
    + alias4(((helper = (helper = helpers.componentName || (depth0 != null ? depth0.componentName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentName","hash":{},"data":data}) : helper)))
    + "__img-show\"\n       src=\""
    + alias4(((helper = (helper = helpers.imgShowUrl || (depth0 != null ? depth0.imgShowUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgShowUrl","hash":{},"data":data}) : helper)))
    + "\"\n       alt=\"show password\">\n  <img class=\"button-eye__img-hide hidden\"\n       data-element=\""
    + alias4(((helper = (helper = helpers.componentName || (depth0 != null ? depth0.componentName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentName","hash":{},"data":data}) : helper)))
    + "__img-hide\"\n       src=\""
    + alias4(((helper = (helper = helpers.imgHideUrl || (depth0 != null ? depth0.imgHideUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgHideUrl","hash":{},"data":data}) : helper)))
    + "\"\n       alt=\"hide password\">\n</button>\n";
},"useData":true});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"input-password\"\n     data-component=\""
    + alias4(((helper = (helper = helpers.componentName || (depth0 != null ? depth0.componentName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentName","hash":{},"data":data}) : helper)))
    + "\">\n  <input type=\"password\"\n         class=\"input input-password__inputField\"\n         data-element=\""
    + alias4(((helper = (helper = helpers.componentName || (depth0 != null ? depth0.componentName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentName","hash":{},"data":data}) : helper)))
    + "__inputField\"\n         id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n <div class=\"input-password__button-eye-container\"\n      data-element=\""
    + alias4(((helper = (helper = helpers.componentName || (depth0 != null ? depth0.componentName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentName","hash":{},"data":data}) : helper)))
    + "__button-eye-container\">\n </div>\n</div>\n";
},"useData":true});

/***/ })
]));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWRyaXZlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWlucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL19fc2hhcmVkL2Jhc2UtaW5wdXQvc3R5bGUuc2Nzcz9kMDQ4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWlucHV0L3BhdHRlcm4tcmVnLWV4cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9fX3NoYXJlZC9sb2dpbi1yZWdpc3RyYXRpb24vc3R5bGUuc2Nzcz9kZTU5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL19fc2hhcmVkL2Zvcm0vc3R5bGUuc2Nzcz9mYjg5Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy90aXAtaW5saW5lL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbi1zdWJtaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2lucHV0cy9pbnB1dC1lbWFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5wdXRzL2lucHV0LXBhc3N3b3JkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL19fc2hhcmVkL2xvZ2luLXJlZ2lzdHJhdGlvbi9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL19fc2hhcmVkL2Zvcm0vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90aXAtaW5saW5lL3RlbXBsYXRlLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90aXAtaW5saW5lL3N0eWxlLnNjc3M/ZjU3NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90aXAtaW5saW5lL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b24tc3VibWl0L3N0eWxlLnNjc3M/MjcyOCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbi1zdWJtaXQvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbi1zdWJtaXQvdGVtcGxhdGUuaGJzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL19fc2hhcmVkL2Jhc2UtaW5wdXQvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5wdXRzL2lucHV0LWVtYWlsL3ZhbGlkYXRpb24tZW1haWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXRzL2lucHV0LWVtYWlsL3RlbXBsYXRlLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvaW5wdXQtcGFzc3dvcmQvc3R5bGUuc2Nzcz83YmVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0cy9pbnB1dC1wYXNzd29yZC9zdHlsZS5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9pbnB1dHMvaW5wdXQtcGFzc3dvcmQvdmFsaWRhdGlvbi1wYXNzd29yZC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b24tZXllL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9uLWV5ZS9zdHlsZS5zY3NzPzIwMzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b24tZXllL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b24tZXllL2ltZy9leWUtc2hvdy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b24tZXllL2ltZy9leWUtaGlkZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b24tZXllL3RlbXBsYXRlLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvaW5wdXQtcGFzc3dvcmQvdGVtcGxhdGUuaGJzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvX19zaGFyZWQvYmFzZS1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEVtYWlsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgZWwgfSkge1xuICAgIHN1cGVyKHsgZWwgfSk7XG4gICAgdGhpcy5ldmVudHNQdWJTdWIgPSB7fTtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHMuaW5wdXQudmFsdWU7XG4gIH1cblxuICBiYWNrbGlnaHRWYWxpZCh7IGlzVmFsaWQgfSkge1xuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLmlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0X2ludmFsaWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50cy5pbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dF9pbnZhbGlkJyk7XG4gIH1cblxuICBzZXRGb2N1cygpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmlucHV0LmZvY3VzKCk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIGNvbnNvbGUubG9nKCdkaXNhYmxlZCcpO1xuICAgIHRoaXMuZWxlbWVudHMuaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWlucHV0L2luZGV4LmpzIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zdHlsZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWlucHV0L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZW1wdHk6IG5ldyBSZWdFeHAoJ14kJyksXG4gIG1pbkxlbmd0aFBhc3N3b3JkOiBuZXcgUmVnRXhwKCdeLns4LH0kJyksXG4gIG1heExlbmd0aFBhc3N3b3JkOiBuZXcgUmVnRXhwKCdeLnswLDEwMH0kJyksXG4gIG1heExlbmd0aE5hbWU6IG5ldyBSZWdFeHAoJ14uezAsMjB9JCcpLFxuICBzeW1ib2xzQmVmb3JlQXQ6IG5ldyBSZWdFeHAoJ15bXkBdLiskJyksXG4gIHN5bWJvbHNBZnRlckF0OiBuZXcgUmVnRXhwKCdeLipALiskJyksXG4gIGF0T25seU9uZTogbmV3IFJlZ0V4cCgnXlteQF0qQFteQF0qJCcpLFxuICBtYXhMZW5ndGhFbWFpbDogbmV3IFJlZ0V4cCgnXi57MCwyNTR9JCcpLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWlucHV0L3BhdHRlcm4tcmVnLWV4cC5qcyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zdHlsZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvX19zaGFyZWQvbG9naW4tcmVnaXN0cmF0aW9uL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zdHlsZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvX19zaGFyZWQvZm9ybS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL19fc2hhcmVkL2Jhc2UtY29tcG9uZW50JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLmhicyc7IC8vIHRlbXBsYXRlXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7IC8vIGNzc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXBJbmxpbmUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyBlbCwgY29tcG9uZW50TmFtZSB9KSB7XG4gICAgc3VwZXIoeyBlbCB9KTtcblxuICAgIHRoaXMucmVuZGVyKHsgY29tcG9uZW50TmFtZSB9KTtcbiAgICB0aGlzLmVsZW1lbnRzLlRpcElubGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXBvbmVudD1cIiR7Y29tcG9uZW50TmFtZX1cIl1gKTtcbiAgfVxuXG4gIHJlbmRlcih7IGNvbXBvbmVudE5hbWUgfSkge1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGVtcGxhdGUoe1xuICAgICAgY29tcG9uZW50TmFtZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dUaXAoeyBtZXNzYWdlIH0pIHtcbiAgICB0aGlzLmVsZW1lbnRzLlRpcElubGluZS5pbm5lckhUTUwgPSBtZXNzYWdlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvdGlwLWlubGluZS9pbmRleC5qcyIsImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvX19zaGFyZWQvYmFzZS1jb21wb25lbnQnO1xuaW1wb3J0ICdjb21wb25lbnRzL19fc2hhcmVkL2J1dHRvbi9zdHlsZS5zY3NzJzsgLy8gY3NzXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7IC8vIGNzc1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUuaGJzJzsgLy8gdGVtcGxhdGVcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25TdWJtaXQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGVsLFxuICAgIHZhbHVlLFxuICAgIGNvbXBvbmVudE5hbWUsXG4gIH0pIHtcbiAgICBzdXBlcih7IGVsIH0pO1xuICAgIHRoaXMuZXZlbnRzUHViU3ViID0ge307XG5cbiAgICB0aGlzLnJlbmRlcih7IHZhbHVlLCBjb21wb25lbnROYW1lIH0pO1xuICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcG9uZW50PVwiJHtjb21wb25lbnROYW1lfVwiXWApO1xuXG4gICAgdGhpcy5hZGRFdmVudHMoKTtcbiAgfVxuXG4gIHJlbmRlcih7IHZhbHVlLCBjb21wb25lbnROYW1lIH0pIHtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRlbXBsYXRlKHsgdmFsdWUsIGNvbXBvbmVudE5hbWUgfSk7XG4gIH1cblxuICBhZGRFdmVudHMoKSB7XG4gICAgdGhpcy5lbGVtZW50cy5idXR0b24ub25tb3VzZWRvd24gPSAoKSA9PiBmYWxzZTsgLy8g0LfQsNC/0YDQtdGCIG91dGxpbmUg0L/RgNC4INC60LvQuNC60LVcbiAgfVxuXG4gIHJlbW92ZUV2ZW50cygpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvbi5vbm1vdXNlZG93biA9IG51bGw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbi1zdWJtaXQvaW5kZXguanMiLCJpbXBvcnQgQmFzZUlucHV0IGZyb20gJ2NvbXBvbmVudHMvX19zaGFyZWQvYmFzZS1pbnB1dCc7XG5pbXBvcnQgJ2NvbXBvbmVudHMvX19zaGFyZWQvYmFzZS1pbnB1dC9zdHlsZS5zY3NzJzsgLy8gY3NzXG5pbXBvcnQgdmFsaWRhdGlvbkVtYWlsIGZyb20gJy4vdmFsaWRhdGlvbi1lbWFpbCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZS5oYnMnOyAvLyB0ZW1wbGF0ZVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0RW1haWwgZXh0ZW5kcyBCYXNlSW5wdXQge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZWwsXG4gICAgY29tcG9uZW50TmFtZSxcbiAgICBpZCxcbiAgfSkge1xuICAgIHN1cGVyKHsgZWwgfSk7XG5cbiAgICB0aGlzLnJlbmRlcih7IGNvbXBvbmVudE5hbWUsIGlkIH0pO1xuICAgIHRoaXMuZWxlbWVudHMuaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wb25lbnQ9XCIke2NvbXBvbmVudE5hbWV9XCJdYCk7XG4gIH1cblxuICByZW5kZXIoeyBjb21wb25lbnROYW1lLCBpZCB9KSB7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZSh7IGNvbXBvbmVudE5hbWUsIGlkIH0pO1xuICB9XG5cbiAgdmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBlbWFpbFN0YXR1cyA9IHZhbGlkYXRpb25FbWFpbCh7IHZhbHVlOiB0aGlzLmVsZW1lbnRzLmlucHV0LnZhbHVlIH0pO1xuICAgIHRoaXMuYmFja2xpZ2h0VmFsaWQoeyBpc1ZhbGlkOiBlbWFpbFN0YXR1cy5pc1ZhbGlkIH0pO1xuICAgIHJldHVybiBlbWFpbFN0YXR1cztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2lucHV0cy9pbnB1dC1lbWFpbC9pbmRleC5qcyIsImltcG9ydCBCYXNlSW5wdXQgZnJvbSAnY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWlucHV0JztcbmltcG9ydCAnY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWlucHV0L3N0eWxlLnNjc3MnOyAvLyBjc3NcbmltcG9ydCAnLi9zdHlsZS5zY3NzJzsgLy8gY3NzXG5pbXBvcnQgdmFsaWRhdGlvblBhc3N3b3JkIGZyb20gJy4vdmFsaWRhdGlvbi1wYXNzd29yZCc7XG5pbXBvcnQgQnV0dG9uRXllIGZyb20gJy4uLy4uL2J1dHRvbnMvYnV0dG9uLWV5ZSc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZS5oYnMnOyAvLyB0ZW1wbGF0ZVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0UGFzc3dvcmQgZXh0ZW5kcyBCYXNlSW5wdXQge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZWwsXG4gICAgY29tcG9uZW50TmFtZSxcbiAgICBpZCxcbiAgfSkge1xuICAgIHN1cGVyKHsgZWwgfSk7XG4gICAgdGhpcy5jb21wb25lbnRzID0ge307XG5cbiAgICB0aGlzLnJlbmRlcih7IGNvbXBvbmVudE5hbWUsIGlkIH0pO1xuICAgIHRoaXMuZWxlbWVudHMubWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvbXBvbmVudD1cIiR7Y29tcG9uZW50TmFtZX1cIl1gKTtcbiAgICB0aGlzLmVsZW1lbnRzLmlucHV0ID0gdGhpcy5lbGVtZW50cy5tYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWVsZW1lbnQ9XCIke2NvbXBvbmVudE5hbWV9X19pbnB1dEZpZWxkXCJdYCk7XG4gICAgdGhpcy5lbGVtZW50cy5idXR0b25FeWVDb250YWluZXIgPSB0aGlzLmVsZW1lbnRzLm1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcihgW2RhdGEtZWxlbWVudD1cIiR7Y29tcG9uZW50TmFtZX1fX2J1dHRvbi1leWUtY29udGFpbmVyXCJdYCk7XG5cbiAgICB0aGlzLmluaXRDb21wb25lbnRCdXR0b25FeWUoKTtcbiAgfVxuXG5cbiAgcmVuZGVyKHsgY29tcG9uZW50TmFtZSwgaWQgfSkge1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGVtcGxhdGUoeyBjb21wb25lbnROYW1lLCBpZCB9KTtcbiAgfVxuXG5cbiAgdmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBwYXNzd29yZFN0YXR1cyA9IHZhbGlkYXRpb25QYXNzd29yZCh7IHZhbHVlOiB0aGlzLmVsZW1lbnRzLmlucHV0LnZhbHVlIH0pO1xuICAgIHRoaXMuYmFja2xpZ2h0VmFsaWQoeyBpc1ZhbGlkOiBwYXNzd29yZFN0YXR1cy5pc1ZhbGlkIH0pO1xuICAgIHJldHVybiBwYXNzd29yZFN0YXR1cztcbiAgfVxuXG5cbiAgaW5pdENvbXBvbmVudEJ1dHRvbkV5ZSgpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuYnV0dG9uRXllID0gbmV3IEJ1dHRvbkV5ZSh7XG4gICAgICBlbDogdGhpcy5lbGVtZW50cy5idXR0b25FeWVDb250YWluZXIsXG4gICAgICBjb21wb25lbnROYW1lOiAnYnV0dG9uLWV5ZS1wYXNzd29yZCcsXG4gICAgICBjbGlja0hlbmRsZXI6IHRoaXMuYnV0dG9uRXllSGVuZGxlci5iaW5kKHRoaXMpLFxuICAgIH0pO1xuICB9XG5cblxuICBidXR0b25FeWVIZW5kbGVyKHsgaXNTaG93biB9KSB7XG4gICAgaWYgKGlzU2hvd24pIHtcbiAgICAgIHRoaXMuZWxlbWVudHMuaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50cy5pbnB1dC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2lucHV0cy9pbnB1dC1wYXNzd29yZC9pbmRleC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvZ2luLFxcbi5yZWdpc3RyYXRpb24ge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI1ZGVnLCByZ2JhKDM5LCAxNzEsIDI1NSwgMC42KSAwJSwgcmdiYSgzOSwgMTcxLCAyNTUsIDAuOTUpIDI1JSwgIzJlYjRmZiAyNS4wNSUsIHJnYmEoNDYsIDE4MCwgMjU1LCAwLjgpIDc1JSwgcmdiYSgzOSwgMTcxLCAyNTUsIDAuNjUpIDc1LjAxJSwgcmdiYSgzOSwgMTcxLCAyNTUsIDAuMykpOyB9XFxuICAubG9naW46YmVmb3JlLFxcbiAgLnJlZ2lzdHJhdGlvbjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG4gIC5sb2dpbl9fZGVzY3JpYmUsXFxuICAucmVnaXN0cmF0aW9uX19kZXNjcmliZSB7XFxuICAgIGZvbnQtc2l6ZTogMTI1JTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmxvZ2luX19tYWluLWNvbnRhaW5lcixcXG4gIC5yZWdpc3RyYXRpb25fX21haW4tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDI3MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgfVxcbiAgLmxvZ2luX19tYWluLWNvbnRhaW5lcjphZnRlcixcXG4gIC5yZWdpc3RyYXRpb25fX21haW4tY29udGFpbmVyOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OiA1MHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3NyYy9jb21wb25lbnRzL19fc2hhcmVkL2xvZ2luLXJlZ2lzdHJhdGlvbi9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zcmMvY29tcG9uZW50cy9fX3NoYXJlZC9mb3JtL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9GaWxtUmVudGFsL3dlYi1wcm9qZWN0cy9zaW1iaW96L3NpbWJpb3otZnJvbnQtZW5kL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXI7XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwidGlwLWlubGluZVxcXCJcXG4gICAgIGRhdGEtY29tcG9uZW50PVxcXCJcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb21wb25lbnROYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb21wb25lbnROYW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlcnMuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiY29tcG9uZW50TmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcbjwvZGl2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy90aXAtaW5saW5lL3RlbXBsYXRlLmhic1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zdHlsZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy90aXAtaW5saW5lL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRpcC1pbmxpbmUge1xcbiAgY29sb3I6ICNkYjNmMzU7XFxuICBmb250LXNpemU6IDgwJTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zcmMvY29tcG9uZW50cy90aXAtaW5saW5lL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zdHlsZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b24tc3VibWl0L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ1dHRvbi1zdWJtaXQge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG4gIGNvbG9yOiAjMGE4OGUxO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4OyB9XFxuICAuYnV0dG9uLXN1Ym1pdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9uLXN1Ym1pdC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvRmlsbVJlbnRhbC93ZWItcHJvamVjdHMvc2ltYmlvei9zaW1iaW96LWZyb250LWVuZC9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIjxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiXFxuICAgICAgIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMudmFsdWUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnZhbHVlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJ2YWx1ZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiXFxuICAgICAgIGNsYXNzPVxcXCJidXR0b24gYnV0dG9uLXN1Ym1pdFxcXCJcXG4gICAgICAgZGF0YS1jb21wb25lbnQ9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb21wb25lbnROYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb21wb25lbnROYW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjb21wb25lbnROYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9uLXN1Ym1pdC90ZW1wbGF0ZS5oYnNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogODUlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjOWI5YjliO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjOWI5YjliO1xcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ2FpbnNib3JvO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdhaW5zYm9ybztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmJjOyB9XFxuICAuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMzZhOWVhOyB9XFxuICAgIC5pbnB1dDpmb2N1cy5pbnB1dF9pbnZhbGlkIHtcXG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjZGIzZjM1OyB9XFxuICAuaW5wdXRfaW52YWxpZCB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkYjNmMzU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3JjL2NvbXBvbmVudHMvX19zaGFyZWQvYmFzZS1pbnB1dC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgcmVnRWV4cFBhdHRlcm5zIGZyb20gJ2NvbXBvbmVudHMvX19zaGFyZWQvYmFzZS1pbnB1dC9wYXR0ZXJuLXJlZy1leHAnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyB2YWx1ZSB9KSA9PiB7XG4gIGlmICh2YWx1ZS5zZWFyY2gocmVnRWV4cFBhdHRlcm5zLmVtcHR5KSA9PT0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiAn0JLQstC10LTQuNGC0LUg0L/QvtGH0YLQvtCy0YvQuSDQsNC00YDQtdGBJyxcbiAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cbiAgaWYgKHZhbHVlLnNlYXJjaChyZWdFZXhwUGF0dGVybnMuYXRPbmx5T25lKSA9PT0gLTEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogJ9CQ0LTRgNC10YEg0LTQvtC70LbQtdC9INGB0L7QtNC10YDQttCw0YLRjCDQvtC00LjQvSDRgdC40LzQstC+0LsgXCJAXCInLFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuICBpZiAodmFsdWUuc2VhcmNoKHJlZ0VleHBQYXR0ZXJucy5zeW1ib2xzQmVmb3JlQXQpID09PSAtMSkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiAn0JfQsNC/0L7Qu9C90LjRgtC1INCw0LTRgNC10YEg0LTQviDRgdC40LzQstC+0LvQsCBcIkBcIicsXG4gICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICB9O1xuICB9XG4gIGlmICh2YWx1ZS5zZWFyY2gocmVnRWV4cFBhdHRlcm5zLnN5bWJvbHNBZnRlckF0KSA9PT0gLTEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogJ9CX0LDQv9C+0LvQvdC40YLQtSDQsNC00YDQtdGBINC/0L7RgdC70LUg0YHQuNC80LLQvtC70LAgXCJAXCInLFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuICBpZiAodmFsdWUuc2VhcmNoKHJlZ0VleHBQYXR0ZXJucy5tYXhMZW5ndGhFbWFpbCkgPT09IC0xKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6ICfQkNC00YDQtdGBINC90LUg0LTQvtC70LbQtdC9INC/0YDQtdCy0YvRiNCw0YLRjCAyNTQg0YHQuNC80LLQvtC70L7QsicsXG4gICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogbnVsbCxcbiAgICBpc1ZhbGlkOiB0cnVlLFxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9pbnB1dHMvaW5wdXQtZW1haWwvdmFsaWRhdGlvbi1lbWFpbC5qcyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9GaWxtUmVudGFsL3dlYi1wcm9qZWN0cy9zaW1iaW96L3NpbWJpb3otZnJvbnQtZW5kL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiPGlucHV0IGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1lbWFpbFxcXCJcXG4gICAgICAgZGF0YS1jb21wb25lbnQ9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb21wb25lbnROYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb21wb25lbnROYW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjb21wb25lbnROYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCJcXG4gICAgICAgdHlwZT1cXFwiZW1haWxcXFwiXFxuICAgICAgIGlkPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaWQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvaW5wdXQtZW1haWwvdGVtcGxhdGUuaGJzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2lucHV0cy9pbnB1dC1wYXNzd29yZC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbnB1dC1wYXNzd29yZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5pbnB1dC1wYXNzd29yZF9fYnV0dG9uLWV5ZS1jb250YWluZXIge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDsgfVxcbiAgLmlucHV0LXBhc3N3b3JkX19pbnB1dEZpZWxkIHtcXG4gICAgcGFkZGluZy1yaWdodDogMTQlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3NyYy9jb21wb25lbnRzL2lucHV0cy9pbnB1dC1wYXNzd29yZC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgcmVnRWV4cFBhdHRlcm5zIGZyb20gJ2NvbXBvbmVudHMvX19zaGFyZWQvYmFzZS1pbnB1dC9wYXR0ZXJuLXJlZy1leHAnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyB2YWx1ZSB9KSA9PiB7XG4gIGlmICh2YWx1ZS5zZWFyY2gocmVnRWV4cFBhdHRlcm5zLmVtcHR5KSA9PT0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiAn0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMJyxcbiAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cbiAgaWYgKHZhbHVlLnNlYXJjaChyZWdFZXhwUGF0dGVybnMubWluTGVuZ3RoUGFzc3dvcmQpID09PSAtMSkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiAn0J/QsNGA0L7Qu9GMINC90LUg0LTQvtC70LbQtdC9INCx0YvRgtGMINC60L7RgNC+0YfQtSA4INGB0LjQvNCy0L7Qu9C+0LInLFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuICBpZiAodmFsdWUuc2VhcmNoKHJlZ0VleHBQYXR0ZXJucy5tYXhMZW5ndGhQYXNzd29yZCkgPT09IC0xKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6ICfQn9Cw0YDQvtC70Ywg0L3QtSDQtNC+0LvQttC10L0g0L/RgNC10LLRi9GI0LDRgtGMIDEwMCDRgdC40LzQstC+0LvQvtCyJyxcbiAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiBudWxsLFxuICAgIGlzVmFsaWQ6IHRydWUsXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2lucHV0cy9pbnB1dC1wYXNzd29yZC92YWxpZGF0aW9uLXBhc3N3b3JkLmpzIiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWNvbXBvbmVudCc7XG5pbXBvcnQgJ2NvbXBvbmVudHMvX19zaGFyZWQvYnV0dG9uL3N0eWxlLnNjc3MnOyAvLyBjc3NcbmltcG9ydCAnLi9zdHlsZS5zY3NzJzsgLy8gY3NzXG5pbXBvcnQgZXllU2hvd1NyYyBmcm9tICcuL2ltZy9leWUtc2hvdy5zdmcnO1xuaW1wb3J0IGV5ZUhpZGVTcmMgZnJvbSAnLi9pbWcvZXllLWhpZGUuc3ZnJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLmhicyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uRXllIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgZWwsIGNvbXBvbmVudE5hbWUsIGNsaWNrSGVuZGxlciB9KSB7XG4gICAgc3VwZXIoeyBlbCB9KTtcblxuICAgIHRoaXMuY2xpY2tIZW5kbGVyID0gY2xpY2tIZW5kbGVyO1xuXG4gICAgdGhpcy5yZW5kZXIoeyBjb21wb25lbnROYW1lIH0pO1xuICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcG9uZW50PVwiJHtjb21wb25lbnROYW1lfVwiXWApO1xuICAgIHRoaXMuZWxlbWVudHMuaW1nU2hvdyA9IHRoaXMuZWxlbWVudHMuYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWVsZW1lbnQ9XCIke2NvbXBvbmVudE5hbWV9X19pbWctc2hvd1wiXWApO1xuICAgIHRoaXMuZWxlbWVudHMuaW1nSGlkZSA9IHRoaXMuZWxlbWVudHMuYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWVsZW1lbnQ9XCIke2NvbXBvbmVudE5hbWV9X19pbWctaGlkZVwiXWApO1xuXG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRFdmVudHMoKTtcbiAgfVxuXG4gIHJlbmRlcih7IGNvbXBvbmVudE5hbWUgfSkge1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGVtcGxhdGUoe1xuICAgICAgY29tcG9uZW50TmFtZSxcbiAgICAgIGltZ1Nob3dVcmw6IGV5ZVNob3dTcmMsXG4gICAgICBpbWdIaWRlVXJsOiBleWVIaWRlU3JjLFxuICAgIH0pO1xuICB9XG5cbiAgYWRkRXZlbnRzKCkge1xuICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvbi5vbm1vdXNlZG93biA9ICgpID0+IGZhbHNlOyAvLyDQt9Cw0L/RgNC10YIgb3V0bGluZSDQv9GA0Lgg0LrQu9C40LrQtVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRzKCkge1xuICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvbi5vbm1vdXNlZG93biA9IG51bGw7XG4gIH1cblxuXG4gIG9uQ2xpY2soKSB7XG4gICAgaWYgKCF0aGlzLmlzUGFzc3dvcmRTaG93bikge1xuICAgICAgdGhpcy5pc1Bhc3N3b3JkU2hvd24gPSB0cnVlO1xuICAgICAgdGhpcy5zaG93KHsgZWw6IHRoaXMuZWxlbWVudHMuaW1nSGlkZSB9KTtcbiAgICAgIHRoaXMuaGlkZSh7IGVsOiB0aGlzLmVsZW1lbnRzLmltZ1Nob3cgfSk7XG4gICAgICB0aGlzLmNsaWNrSGVuZGxlcih7IGlzU2hvd246IHRydWUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNQYXNzd29yZFNob3duID0gZmFsc2U7XG4gICAgdGhpcy5zaG93KHsgZWw6IHRoaXMuZWxlbWVudHMuaW1nU2hvdyB9KTtcbiAgICB0aGlzLmhpZGUoeyBlbDogdGhpcy5lbGVtZW50cy5pbWdIaWRlIH0pO1xuICAgIHRoaXMuY2xpY2tIZW5kbGVyKHsgaXNTaG93bjogZmFsc2UgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbi1leWUvaW5kZXguanMiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9uLWV5ZS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5idXR0b24tZXllIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7IH1cXG4gIC5idXR0b24tZXllX19pbWctc2hvdywgLmJ1dHRvbi1leWVfX2ltZy1oaWRlIHtcXG4gICAgaGVpZ2h0OiAxMDAlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9uLWV5ZS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2ltYWdlcy9leWUtc2hvdy5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9uLWV5ZS9pbWcvZXllLXNob3cuc3ZnXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2ltYWdlcy9leWUtaGlkZS5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9uLWV5ZS9pbWcvZXllLWhpZGUuc3ZnXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIvVXNlcnMvRmlsbVJlbnRhbC93ZWItcHJvamVjdHMvc2ltYmlvei9zaW1iaW96LWZyb250LWVuZC9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIjxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBidXR0b24tZXllXFxcIlxcbiAgICAgICAgZGF0YS1jb21wb25lbnQ9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb21wb25lbnROYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb21wb25lbnROYW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjb21wb25lbnROYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCJcXG4gICAgICAgIHR5cGU9XFxcImJ1dHRvblxcXCI+XFxuICA8aW1nIGNsYXNzPVxcXCJidXR0b24tZXllX19pbWctc2hvd1xcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuY29tcG9uZW50TmFtZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29tcG9uZW50TmFtZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiY29tcG9uZW50TmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJfX2ltZy1zaG93XFxcIlxcbiAgICAgICBzcmM9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pbWdTaG93VXJsIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pbWdTaG93VXJsIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpbWdTaG93VXJsXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCJcXG4gICAgICAgYWx0PVxcXCJzaG93IHBhc3N3b3JkXFxcIj5cXG4gIDxpbWcgY2xhc3M9XFxcImJ1dHRvbi1leWVfX2ltZy1oaWRlIGhpZGRlblxcXCJcXG4gICAgICAgZGF0YS1lbGVtZW50PVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuY29tcG9uZW50TmFtZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29tcG9uZW50TmFtZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiY29tcG9uZW50TmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJfX2ltZy1oaWRlXFxcIlxcbiAgICAgICBzcmM9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pbWdIaWRlVXJsIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pbWdIaWRlVXJsIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpbWdIaWRlVXJsXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCJcXG4gICAgICAgYWx0PVxcXCJoaWRlIHBhc3N3b3JkXFxcIj5cXG48L2J1dHRvbj5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b24tZXllL3RlbXBsYXRlLmhic1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL0ZpbG1SZW50YWwvd2ViLXByb2plY3RzL3NpbWJpb3ovc2ltYmlvei1mcm9udC1lbmQvbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJpbnB1dC1wYXNzd29yZFxcXCJcXG4gICAgIGRhdGEtY29tcG9uZW50PVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuY29tcG9uZW50TmFtZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29tcG9uZW50TmFtZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiY29tcG9uZW50TmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcbiAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIlxcbiAgICAgICAgIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1wYXNzd29yZF9faW5wdXRGaWVsZFxcXCJcXG4gICAgICAgICBkYXRhLWVsZW1lbnQ9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb21wb25lbnROYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb21wb25lbnROYW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjb21wb25lbnROYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIl9faW5wdXRGaWVsZFxcXCJcXG4gICAgICAgICBpZD1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmlkIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiaWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXG4gPGRpdiBjbGFzcz1cXFwiaW5wdXQtcGFzc3dvcmRfX2J1dHRvbi1leWUtY29udGFpbmVyXFxcIlxcbiAgICAgIGRhdGEtZWxlbWVudD1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmNvbXBvbmVudE5hbWUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbXBvbmVudE5hbWUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImNvbXBvbmVudE5hbWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiX19idXR0b24tZXllLWNvbnRhaW5lclxcXCI+XFxuIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9pbnB1dHMvaW5wdXQtcGFzc3dvcmQvdGVtcGxhdGUuaGJzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7OztBQTdCQTtBQUNBOzs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBRUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUpBO0FBS0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7OztBQWhCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQUdBOzs7OztBQUNBO0FBSUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBekJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBR0E7Ozs7O0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFKQTtBQUtBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQXBCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBR0E7Ozs7O0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVVBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBN0NBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBWkE7QUFZQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7OztBQTlDQTtBQUNBOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=