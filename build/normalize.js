"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var normalize = function normalize(amount) {
  if (amount === null) {
    return amount;
  }

  amount = amount.replace(",", ".");
  amount = amount.replace(/[^0-9.]/g, ""); // Round down to 2 decimals

  amount = Math.floor(amount * 100) / 100;
  return amount;
};

var _default = normalize;
exports["default"] = _default;