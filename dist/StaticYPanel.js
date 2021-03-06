"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PrimaryCategoryObject = _interopRequireDefault(require("./PrimaryCategoryObject"));

var _SecondaryCategoryObject = _interopRequireDefault(require("./SecondaryCategoryObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var StaticYPanel =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(StaticYPanel, _PureComponent);

  function StaticYPanel(props) {
    var _this;

    _classCallCheck(this, StaticYPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StaticYPanel).call(this, props));
    _this.ref = _react.default.createRef();
    return _this;
  }

  _createClass(StaticYPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height;
      return _react.default.createElement("canvas", {
        ref: this.ref,
        width: width,
        height: height,
        style: {
          width: width,
          height: height,
          display: "block"
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.draw();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this$props2 = this.props,
          categoryStructure = _this$props2.categoryStructure,
          rowHeight = _this$props2.rowHeight,
          width = _this$props2.width,
          height = _this$props2.height;
      this.draw_memo = this.draw_memo || {};
      var memo = this.draw_memo; // Cache categoryStructure change

      if (memo.categoryStructure !== categoryStructure) {
        memo.categoryStructure = categoryStructure;
        memo.categoryStructureClone = [];

        for (var i = 0; i < categoryStructure.length; i++) {
          var p = categoryStructure[i];
          var newP = new _PrimaryCategoryObject.default(p);
          newP.children = [];

          for (var j = 0; j < p.children.length; j++) {
            var s = p.children[j];
            var newS = new _SecondaryCategoryObject.default(s);
            newP.children.push(newS);
          }

          memo.categoryStructureClone.push(newP);
        }
      } // Draw


      var canvas = this.ref.current;
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, width, height);

      for (var _i = 0, rowNum = 0; _i < memo.categoryStructureClone.length; _i++) {
        var _p = memo.categoryStructureClone[_i];
        var rowStart = rowNum;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _p.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _s = _step.value;

            _s.draw(ctx, width, height, rowNum * rowHeight, (rowNum + 1) * rowHeight);

            rowNum += 1;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (rowNum !== rowStart) {
          _p.draw(ctx, width, height, rowStart * rowHeight, rowNum * rowHeight);
        }
      }
    }
  }]);

  return StaticYPanel;
}(_react.PureComponent);

StaticYPanel.propTypes = {
  categoryStructure: _propTypes.default.array.isRequired,
  rowHeight: _propTypes.default.number.isRequired,
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired
};
var _default = StaticYPanel;
exports.default = _default;