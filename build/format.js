"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var format = function format(value) {
  var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  value = (value / 100).toFixed(decimal);
  return "$".concat(value);
};

var _default = format;
exports["default"] = _default;