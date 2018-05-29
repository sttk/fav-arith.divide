(function(){
'use strict';


var expect = chai.expect;




var ArithNumber = fav.arith.number;
var divide = fav.arith.divide;

describe('fav.arith.divide', function() {

  describe('Divide zeros', function() {
    it('Should return inaccurate ArithNumber when both numerator is zero',
    function() {
      var a1 = new ArithNumber(0, 1, 0);
      var a2 = new ArithNumber(0, 1, 0);
      var a3 = divide(a1, a2);
      expect(a3.isAccurate()).to.equal(false);
    });

    it('Should return zero ArithNumber when divided numerator is zero (1)',
    function() {
      var a1 = new ArithNumber(0, 1, 0);
      var a2 = new ArithNumber(1, 1, 0);
      var a3 = divide(a1, a2);
      expect(a3.numerator).to.equal(0);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('0');
    });

    it('Should return zero ArithNumber when divided numerator is zero (2)',
    function() {
      var a1 = new ArithNumber(0, 100, 0);
      var a2 = new ArithNumber(1, 1, 1000);
      var a3 = divide(a1, a2);
      expect(a3.numerator).to.equal(0);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('0');
    });

    it('Should return inaccurate ArithNumber when dividing numerator is zero',
    function() {
      var a1 = new ArithNumber(1, 1, 0);
      var a2 = new ArithNumber(0, 1, 0);
      var a3 = divide(a1, a2);
      expect(a3.isAccurate()).to.equal(false);
    });
  });

  describe('Divide integers', function() {
    it('Should return accurate quotient of two numbers (1)', function() {
      var a1 = new ArithNumber(1, 1, 0);
      var a2 = new ArithNumber(3, 1, 0);
      var a3 = divide(a1, a2);
      expect(a3.numerator).to.equal(1);
      expect(a3.denominator).to.equal(3);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('0.33333333333333333333');
    });

    it('Should return accurate quotient of two numbers (2)', function() {
      var a1 = new ArithNumber(123, 1, -1);
      var a2 = new ArithNumber(1, 456, 1);
      var a3 = divide(a1, a2);
      expect(a3.numerator).to.equal(56088);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(-2);
      expect(a3.toApproximateString()).to.equal('560.88');
    });

    it('Should return an accurate quotient of two numbers (3)', function() {
      var a1 = new ArithNumber(3, 1, -3);
      var a2 = new ArithNumber(1, 4, 2);
      var a3 = divide(a1, a2);
      expect(a3.numerator).to.equal(12);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(-5);
      expect(a3.toApproximateString()).to.equal('0.00012');
    });

    it('Should return an accurate quotient of two numbers (4)', function() {
      var a1 = ArithNumber.of(9);
      var a2 = ArithNumber.of(6);
      var a3 = divide(a1, a2);
      expect(a3.numerator).to.equal(9);
      expect(a3.denominator).to.equal(6);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('1.5');
    });

    it('Should return an accurate quotient of two numbers (5)', function() {
      var a1 = ArithNumber.of('9');
      var a2 = ArithNumber.of('6');
      var a3 = divide(a1, a2);
      expect(a3.numerator).to.equal(9);
      expect(a3.denominator).to.equal(6);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('1.5');
    });
  });

  describe('Divide decimals', function() {
    it('Should return an accurate quotient of two numbers (1)', function() {
      var a1 = ArithNumber.of('1.23');
      var a2 = ArithNumber.of('4.56');
      var a3 = divide(a1, a2);
      expect(a3.numerator).to.equal(123);
      expect(a3.denominator).to.equal(456);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('0.26973684210526315789');
    });

    it('Should return an accurate quotient of two numbers (2)', function() {
      var a1 = ArithNumber.of('-0.2');
      var a2 = ArithNumber.of('3.33');
      var a3 = divide(a1, a2);
      expect(a3.numerator).to.equal(-2);
      expect(a3.denominator).to.equal(333);
      expect(a3.exponent).to.equal(1);
      expect(a3.toApproximateString()).to.equal('-0.06006006006006006006');
    });
  });

  describe('Divide fractions', function() {
    it('Should return an accurate quotient of two numbers (1)', function() {
      var a1 = new ArithNumber(123, 45, 2);
      var a2 = new ArithNumber(12, 99, 1);
      var a3 = divide(a1, a2);
      expect(a3.numerator).to.equal(12177);
      expect(a3.denominator).to.equal(540);
      expect(a3.exponent).to.equal(1);
      expect(a3.toApproximateString()).to.equal('225.5');
    });

    it('Should return an accurate quotient of two numbers (2)', function() {
      var a1 = new ArithNumber(1, 3, -1);
      var a2 = new ArithNumber(7, 1, -1);
      var a3 = divide(a1, a2);
      expect(a3.numerator).to.equal(1);
      expect(a3.denominator).to.equal(21);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('0.04761904761904761904');
    });
  });

  describe('Attach the divide function to ArithNumber.prototype',
  function() {
    it('Should return an inaccurate number', function() {
      var a1 = ArithNumber.of(Math.pow(2, 53) - 1);
      var a2 = new ArithNumber(1, 1.1, 0);
      var a3 = divide(a1, a2);
      expect(a3.isAccurate()).to.equal(false);
    });

    it('Should return an accurate quotient of two numbers (1)', function() {
      var a1 = new ArithNumber(9007199254740960, 560, 1);
      var a2 = new ArithNumber(3, 2, -1);
      var a3 = divide(a1, a2);
      expect(a3.numerator).to.equal(32168568766932);
      expect(a3.denominator).to.equal(3);
      expect(a3.exponent).to.equal(2);
      expect(a3.toApproximateString()).to.equal('1072285625564400');
    });

    it('Should return an accurate quotient of two numbers (2)', function() {
      var a1 = new ArithNumber(9007199254740960, 19, 1);
      var a2 = new ArithNumber(56, 16, -4);
      var a3 = divide(a1, a2);
      expect(a3.numerator).to.equal(2573485501354560);
      expect(a3.denominator).to.equal(19);
      expect(a3.exponent).to.equal(5);
      expect(a3.toApproximateString()).to.equal(
        '13544660533445052631.57894736842105263157');
    });

    it('Should return an accurate quotient of two numbers (3)', function() {
      var a1 = new ArithNumber(9007199254740960, 3, 1);
      var a2 = new ArithNumber(56, 2, -4);
      var a3 = divide(a1, a2);
      expect(a3.numerator).to.equal(1072285625564400);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(4);
      expect(a3.toApproximateString()).to.equal('10722856255644000000');
    });
  });

  describe('Attach the divide function to ArithNumber.prototype',
  function() {
    it('Should divide a number of which data type is number', function() {
      var a1 = new ArithNumber(123, 1, -2);
      var a2 = a1.divide(4.567);
      expect(a2.numerator).to.equal(123);
      expect(a2.denominator).to.equal(4567);
      expect(a2.exponent).to.equal(1);
      expect(a2.toApproximateString()).to.equal('0.26932340705058024961');
    });

    it('Should divide a number of which data type is string', function() {
      var a1 = new ArithNumber(123, 1, -2);
      var a2 = a1.divide('4.567');
      expect(a2.numerator).to.equal(123);
      expect(a2.denominator).to.equal(4567);
      expect(a2.exponent).to.equal(1);
      expect(a2.toApproximateString()).to.equal('0.26932340705058024961');
    });

    it('Should divide a number of which data type is ArithNumber',
    function() {
      var a1 = new ArithNumber(123, 1, -2);
      var a2 = a1.divide(new ArithNumber(4567, 1, -3));
      expect(a2.numerator).to.equal(123);
      expect(a2.denominator).to.equal(4567);
      expect(a2.exponent).to.equal(1);
      expect(a2.toApproximateString()).to.equal('0.26932340705058024961');
    });
  });
});

})();
