'use strict';

var ArithNumber = require('@fav/arith.number');
var multiply = require('@fav/arith.multiply');

function divide(a1, a2) {
  a2 = new ArithNumber(a2.denominator, a2.numerator, -a2.exponent);
  return multiply(a1, a2);
}

ArithNumber.prototype.divide = function(num) {
  if (num instanceof ArithNumber) {
    return divide(this, num);
  } else {
    return divide(this, ArithNumber.of(num));
  }
};

module.exports = divide;
