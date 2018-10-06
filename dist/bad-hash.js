webpackJsonp([3],{

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"bad-hash\">\n  <div class=\"bad-hash__message-container\">\n    <div class=\"bad-hash__circle\">\n      <div class=\"bad-hash__rectangular\">\n        СТРАНИЦА НЕ НАЙДЕНА\n      </div>\n    </div>\n    <a href=\"http://localhost:3000\"\n       class=\"bad-hash__link\">Перейти на основную страницу\n    </a>\n  </div>\n</div>\n";
},"useData":true});

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(122);

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

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".bad-hash {\n  overflow: auto;\n  height: 100%;\n  white-space: nowrap;\n  text-align: center;\n  background: linear-gradient(25deg, rgba(39, 171, 255, 0.6) 0%, rgba(39, 171, 255, 0.95) 25%, #2eb4ff 25.05%, rgba(46, 180, 255, 0.8) 75%, rgba(39, 171, 255, 0.65) 75.01%, rgba(39, 171, 255, 0.3)); }\n  .bad-hash:before {\n    content: '';\n    height: 100%;\n    display: inline-block;\n    vertical-align: middle; }\n  .bad-hash__message-container {\n    width: 270px;\n    padding: 10px 0;\n    display: inline-block;\n    vertical-align: middle;\n    text-align: left;\n    white-space: normal; }\n  .bad-hash__circle {\n    width: 270px;\n    height: 270px;\n    background-color: #db3f35;\n    border: solid 10px #f7f7f7;\n    border-radius: 50%;\n    box-sizing: border-box;\n    box-shadow: 0 0 0 2px #8c8c8c;\n    position: relative; }\n  .bad-hash__rectangular {\n    width: 230px;\n    height: 60px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    font-size: 105%;\n    font-weight: bold;\n    background-color: #f7f7f7;\n    color: #db3f35;\n    text-align: center;\n    line-height: 60px;\n    border-radius: 5px;\n    margin-left: -115px;\n    margin-top: -30px; }\n  .bad-hash__link {\n    display: block;\n    letter-spacing: 1px;\n    color: #f3f3f3;\n    font-size: 110%;\n    margin-top: 30px;\n    transition: color 0.1s ease-out;\n    text-align: center;\n    text-decoration: none; }\n    .bad-hash__link:hover {\n      color: white; }\n", ""]);

// exports


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _baseComponent = _interopRequireDefault(__webpack_require__(7));

var _template = _interopRequireDefault(__webpack_require__(120));

__webpack_require__(121);

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
var BadHash =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(BadHash, _BaseComponent);

  function BadHash(_ref) {
    var _this;

    var el = _ref.el;

    _classCallCheck(this, BadHash);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BadHash).call(this, {
      el: el
    }));

    _this.render();

    return _this;
  }

  _createClass(BadHash, [{
    key: "render",
    value: function render() {
      this.el.innerHTML = (0, _template.default)();
    }
  }]);

  return BadHash;
}(_baseComponent.default);

module.exports = BadHash;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLWhhc2guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iYWQtaGFzaC90ZW1wbGF0ZS5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFkLWhhc2gvc3R5bGUuc2Nzcz8wMTFlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JhZC1oYXNoL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2JhZC1oYXNoL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9GaWxtUmVudGFsL3dlYi1wcm9qZWN0cy9zaW1iaW96L3NpbWJpb3otZnJvbnQtZW5kL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImJhZC1oYXNoXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImJhZC1oYXNoX19tZXNzYWdlLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImJhZC1oYXNoX19jaXJjbGVcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImJhZC1oYXNoX19yZWN0YW5ndWxhclxcXCI+XFxuICAgICAgICDQodCi0KDQkNCd0JjQptCQINCd0JUg0J3QkNCZ0JTQldCd0JBcXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxhIGhyZWY9XFxcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFxcXCJcXG4gICAgICAgY2xhc3M9XFxcImJhZC1oYXNoX19saW5rXFxcIj7Qn9C10YDQtdC50YLQuCDQvdCwINC+0YHQvdC+0LLQvdGD0Y4g0YHRgtGA0LDQvdC40YbRg1xcbiAgICA8L2E+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYmFkLWhhc2gvdGVtcGxhdGUuaGJzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zdHlsZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9iYWQtaGFzaC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYmFkLWhhc2gge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI1ZGVnLCByZ2JhKDM5LCAxNzEsIDI1NSwgMC42KSAwJSwgcmdiYSgzOSwgMTcxLCAyNTUsIDAuOTUpIDI1JSwgIzJlYjRmZiAyNS4wNSUsIHJnYmEoNDYsIDE4MCwgMjU1LCAwLjgpIDc1JSwgcmdiYSgzOSwgMTcxLCAyNTUsIDAuNjUpIDc1LjAxJSwgcmdiYSgzOSwgMTcxLCAyNTUsIDAuMykpOyB9XFxuICAuYmFkLWhhc2g6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuICAuYmFkLWhhc2hfX21lc3NhZ2UtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDI3MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgfVxcbiAgLmJhZC1oYXNoX19jaXJjbGUge1xcbiAgICB3aWR0aDogMjcwcHg7XFxuICAgIGhlaWdodDogMjcwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjNmMzU7XFxuICAgIGJvcmRlcjogc29saWQgMTBweCAjZjdmN2Y3O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjOGM4YzhjO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5iYWQtaGFzaF9fcmVjdGFuZ3VsYXIge1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBmb250LXNpemU6IDEwNSU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgICBjb2xvcjogI2RiM2YzNTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTExNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMzBweDsgfVxcbiAgLmJhZC1oYXNoX19saW5rIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGNvbG9yOiAjZjNmM2YzO1xcbiAgICBmb250LXNpemU6IDExMCU7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMXMgZWFzZS1vdXQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgIC5iYWQtaGFzaF9fbGluazpob3ZlciB7XFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3NyYy9jb21wb25lbnRzL2JhZC1oYXNoL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJpbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL19fc2hhcmVkL2Jhc2UtY29tcG9uZW50JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLmhicyc7IC8vIHRlbXBsYXRlXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7IC8vIGNzc1xuXG5jbGFzcyBCYWRIYXNoIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgZWwgfSkge1xuICAgIHN1cGVyKHsgZWwgfSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRlbXBsYXRlKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYWRIYXNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2JhZC1oYXNoL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBRUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7OztBQVJBO0FBQ0E7QUFVQTs7OztBIiwic291cmNlUm9vdCI6IiJ9