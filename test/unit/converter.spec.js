var chai = require('chai');
var should = require('should');
var expect = chai.expect;
var toRoman = require('./../../src/converter');

describe('Roman Numeral conversion', function () {
  describe('should return the roman numeral equivalent of ', function () {
    it('1', () => toRoman(1).should.equal('I'));
    it('5', () => toRoman(5).should.equal('V'));
    it('10', () => toRoman(10).should.equal('X'));
    it('2', () => toRoman(2).should.equal('II'));
  })
});
