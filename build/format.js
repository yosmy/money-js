"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var format = function format(value) {
  return "$".concat((value / 100).toFixed(2));
};

var _default = format;
exports["default"] = _default;