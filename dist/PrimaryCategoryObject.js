"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _memoize = require("memoize");

var _plotUtils = require("plot-utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WIDTH = 40;

var PrimaryCategoryObject =
/*#__PURE__*/
function () {
  /*
   * Primary category objects are initialized with name, backgroundColor.
   * They should remain unchanged over their life time.
   */
  function PrimaryCategoryObject(_ref) {
    var _this = this;

    var name = _ref.name,
        backgroundColor = _ref.backgroundColor;

    _classCallCheck(this, PrimaryCategoryObject);

    _defineProperty(this, "_getBitmap", (0, _memoize.memoize_one)(function () {
      var text = _this._name;
      var font = "bold 18px Sans";
      var fillStyle = "white";
      var strokeStyle = "#878787";
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      ctx.font = font;
      var width = 18;
      var height = ctx.measureText(text).width;
      canvas.width = width;
      canvas.height = height;
      ctx.font = font;
      ctx.fillStyle = fillStyle;
      ctx.strokeStyle = strokeStyle;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.rotate(-Math.PI / 2);

      var _getRotatedAxisCoordi = (0, _plotUtils.getRotatedAxisCoordinate)(width / 2, height / 2, -Math.PI / 2),
          x = _getRotatedAxisCoordi.x,
          y = _getRotatedAxisCoordi.y;

      ctx.fillText(text, x, y);
      ctx.strokeText(text, x, y);
      return canvas;
    }));

    this._name = name;
    this._backgroundColor = backgroundColor;
  }

  _createClass(PrimaryCategoryObject, [{
    key: "draw",
    value: function draw(ctx, width, height, startDomX, endDomX) {
      var bitmap = this._getBitmap();

      var start = Math.round(startDomX);
      var end = Math.round(endDomX);
      var plotWidth = WIDTH;
      var plotHeight = end - start;
      var srcx = Math.round(bitmap.width / 2 - plotWidth / 2);
      var srcy = Math.round(bitmap.height / 2 - plotHeight / 2);
      ctx.fillStyle = this._backgroundColor;
      ctx.fillRect(0, start, plotWidth, plotHeight);

      try {
        ctx.drawImage(bitmap, srcx, srcy, plotWidth, plotHeight, 0, start, plotWidth, plotHeight);
      } catch (error) {// Mose likely, when string is empty, drawing a empty bitmap will cause InvalidStateError 
      }
    }
  }]);

  return PrimaryCategoryObject;
}();

var _default = PrimaryCategoryObject;
exports.default = _default;