"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _memoize = require("memoize");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OFFSETX = 40;

var SecondaryCategoryObject =
/*#__PURE__*/
function () {
  function SecondaryCategoryObject(_ref) {
    var _this = this;

    var name = _ref.name,
        from = _ref.from,
        to = _ref.to,
        backgroundColor = _ref.backgroundColor;

    _classCallCheck(this, SecondaryCategoryObject);

    _defineProperty(this, "_getBitmap", (0, _memoize.memoize_one)(function () {
      var text = _this._name;
      var font = "bold 12px Sans";
      var fillStyle = "black";
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      ctx.font = font;
      var width = ctx.measureText(text).width;
      var height = 14;
      canvas.width = width;
      canvas.height = height;
      ctx.font = font;
      ctx.fillStyle = fillStyle;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, width / 2, height / 2);
      return canvas;
    }));

    this._name = name;
    this._backgroundColor = backgroundColor;
  }

  _createClass(SecondaryCategoryObject, [{
    key: "getName",
    value: function getName() {
      return this._name;
    }
  }, {
    key: "draw",
    value: function draw(ctx, width, height, startDomX, endDomX) {
      var bitmap = this._getBitmap();

      var bgColor = this._backgroundColor;
      var start = Math.round(startDomX);
      var end = Math.round(endDomX);
      var plotHeight = end - start;
      var plotWidth = width - OFFSETX;
      ctx.fillStyle = bgColor;
      ctx.fillRect(OFFSETX, start, plotWidth, plotHeight);
      var srcx = 0;
      var srcy = Math.round(bitmap.height / 2 - plotHeight / 2);
      ctx.drawImage(bitmap, srcx, srcy, plotWidth, plotHeight, OFFSETX + 5, start, plotWidth, plotHeight);
    }
  }]);

  return SecondaryCategoryObject;
}();

var _default = SecondaryCategoryObject;
exports.default = _default;