'use strict';

var ArithNumber = require('@fav/arith.number');
var multiply = require('@fav/arith.multiply');

function divide(a1, a2) {
  var n2 = a2.numerator;
  var d2 = a2.denominator;
  if (n2 < 0) {
    n2 = -n2;
    d2 = -d2;
  }
  a2 = new ArithNumber(d2, n2, -a2.exponent);
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
