webpackJsonp([3],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"bad-hash\">\n  <div class=\"bad-hash__message-container\">\n    <div class=\"bad-hash__circle\">\n      <div class=\"bad-hash__rectangular\">\n        СТРАНИЦА НЕ НАЙДЕНА\n      </div>\n    </div>\n    <a href=\"http://localhost:3000\"\n       class=\"bad-hash__link\">Перейти на основную страницу\n    </a>\n  </div>\n</div>\n";
},"useData":true});

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(105);

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

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".bad-hash {\n  overflow: auto;\n  height: 100%;\n  white-space: nowrap;\n  text-align: center;\n  background: linear-gradient(25deg, rgba(39, 171, 255, 0.6) 0%, rgba(39, 171, 255, 0.95) 25%, #2eb4ff 25.05%, rgba(46, 180, 255, 0.8) 75%, rgba(39, 171, 255, 0.65) 75.01%, rgba(39, 171, 255, 0.3)); }\n  .bad-hash:before {\n    content: '';\n    height: 100%;\n    display: inline-block;\n    vertical-align: middle; }\n  .bad-hash__message-container {\n    width: 270px;\n    padding: 10px 0;\n    display: inline-block;\n    vertical-align: middle;\n    text-align: left;\n    white-space: normal; }\n  .bad-hash__circle {\n    width: 270px;\n    height: 270px;\n    background-color: #db3f35;\n    border: solid 10px #f7f7f7;\n    border-radius: 50%;\n    box-sizing: border-box;\n    box-shadow: 0 0 0 2px #8c8c8c;\n    position: relative; }\n  .bad-hash__rectangular {\n    width: 230px;\n    height: 60px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    font-size: 105%;\n    font-weight: bold;\n    background-color: #f7f7f7;\n    color: #db3f35;\n    text-align: center;\n    line-height: 60px;\n    border-radius: 5px;\n    margin-left: -115px;\n    margin-top: -30px; }\n  .bad-hash__link {\n    display: block;\n    letter-spacing: 1px;\n    color: #f3f3f3;\n    font-size: 110%;\n    margin-top: 30px;\n    transition: color 0.1s ease-out;\n    text-align: center;\n    text-decoration: none; }\n    .bad-hash__link:hover {\n      color: white; }\n", ""]);

// exports


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _baseComponent = _interopRequireDefault(__webpack_require__(4));

var _template = _interopRequireDefault(__webpack_require__(103));

__webpack_require__(104);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLWhhc2guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iYWQtaGFzaC90ZW1wbGF0ZS5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmFkLWhhc2gvc3R5bGUuc2Nzcz8wMTFlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JhZC1oYXNoL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2JhZC1oYXNoL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi9Vc2Vycy9GaWxtUmVudGFsL3dlYi1wcm9qZWN0cy9zaW1iaW96LWZyb250LWVuZC9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJiYWQtaGFzaFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJiYWQtaGFzaF9fbWVzc2FnZS1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJiYWQtaGFzaF9fY2lyY2xlXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJiYWQtaGFzaF9fcmVjdGFuZ3VsYXJcXFwiPlxcbiAgICAgICAg0KHQotCg0JDQndCY0KbQkCDQndCVINCd0JDQmdCU0JXQndCQXFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8YSBocmVmPVxcXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcXFwiXFxuICAgICAgIGNsYXNzPVxcXCJiYWQtaGFzaF9fbGlua1xcXCI+0J/QtdGA0LXQudGC0Lgg0L3QsCDQvtGB0L3QvtCy0L3Rg9GOINGB0YLRgNCw0L3QuNGG0YNcXG4gICAgPC9hPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2JhZC1oYXNoL3RlbXBsYXRlLmhic1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zdHlsZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYmFkLWhhc2gvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJhZC1oYXNoIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNWRlZywgcmdiYSgzOSwgMTcxLCAyNTUsIDAuNikgMCUsIHJnYmEoMzksIDE3MSwgMjU1LCAwLjk1KSAyNSUsICMyZWI0ZmYgMjUuMDUlLCByZ2JhKDQ2LCAxODAsIDI1NSwgMC44KSA3NSUsIHJnYmEoMzksIDE3MSwgMjU1LCAwLjY1KSA3NS4wMSUsIHJnYmEoMzksIDE3MSwgMjU1LCAwLjMpKTsgfVxcbiAgLmJhZC1oYXNoOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcbiAgLmJhZC1oYXNoX19tZXNzYWdlLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAyNzBweDtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IH1cXG4gIC5iYWQtaGFzaF9fY2lyY2xlIHtcXG4gICAgd2lkdGg6IDI3MHB4O1xcbiAgICBoZWlnaHQ6IDI3MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIzZjM1O1xcbiAgICBib3JkZXI6IHNvbGlkIDEwcHggI2Y3ZjdmNztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggIzhjOGM4YztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuYmFkLWhhc2hfX3JlY3Rhbmd1bGFyIHtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgZm9udC1zaXplOiAxMDUlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG4gICAgY29sb3I6ICNkYjNmMzU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMTVweDtcXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7IH1cXG4gIC5iYWQtaGFzaF9fbGluayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBjb2xvcjogI2YzZjNmMztcXG4gICAgZm9udC1zaXplOiAxMTAlO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2Utb3V0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgICAuYmFkLWhhc2hfX2xpbms6aG92ZXIge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS00LTIhLi9zcmMvY29tcG9uZW50cy9iYWQtaGFzaC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9fX3NoYXJlZC9iYXNlLWNvbXBvbmVudCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZS5oYnMnOyAvLyB0ZW1wbGF0ZVxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnOyAvLyBjc3NcblxuY2xhc3MgQmFkSGFzaCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih7IGVsIH0pIHtcbiAgICBzdXBlcih7IGVsIH0pO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFkSGFzaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9iYWQtaGFzaC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQUVBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSEE7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFSQTtBQUNBO0FBVUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==