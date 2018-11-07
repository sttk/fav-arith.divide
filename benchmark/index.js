'use strict';

var BenchmarkTester = require('benchmark-tester');
var assert = require('assert');
var ArithNumber = require('@fav/arith.number');

new BenchmarkTester()
  .addTest('@fav/arith.divide', function(module, data) {
    return data[0].divide(data[1]);
  })
  .setConverter('@fav/arith.divide', function(data) {
    return [
      new ArithNumber(data[0][0], data[0][1], 0),
      new ArithNumber(data[1][0], data[1][1], 0),
    ];
  })
  .verifyTest('@fav/arith.divide', function(test, divide) {
    var a = test(divide, [
      new ArithNumber(12, 3, 0),
      new ArithNumber(45, 6, 0),
    ]);
    assert.strictEqual(a.numerator, 72);
    assert.strictEqual(a.denominator, 135);
    assert.strictEqual(a.exponent, 0);
  })

  .addTest('fraction.js', function(module, data) {
    return data[0].div(data[1]);
  })
  .configPackage('fraction.js', function(Fraction) {
    Fraction.REDUCE = false;
  })
  .setConverter('fraction.js', function(data, Fraction) {
    return [
      new Fraction(data[0][0], data[0][1]),
      new Fraction(data[1][0], data[1][1]),
    ];
  })
  .verifyTest('fraction.js', function(test, Fraction) {
    var f = test(Fraction, [
      new Fraction(12, 3),
      new Fraction(45, 6),
    ]);
    assert.strictEqual(f.n, 72);
    assert.strictEqual(f.d, 135);
    assert.strictEqual(f.s, 1);
  })

  .runTest('0/1', [[0, 1], [1, 1]])
  .runTest('Integers', [[123, 1], [456, 1]])
  .runTest('Decimals', [[123, 1000], [456, 10000]])
  .runTest('Fractions', [[123, 45], [678, 90]])
  .runTest('Fractions', [[123, 456789], [98, 7654321]])
  .runTest('Big Numbers', [[9007199254740990, 90], [9007199254740, 20]])
  .print();
