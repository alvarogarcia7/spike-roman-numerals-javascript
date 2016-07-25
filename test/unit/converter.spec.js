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
    it('9', () => toRoman(9).should.equal('IX'));
    it('4', () => toRoman(4).should.equal('IV'));
    it('40', () => toRoman(40).should.equal('XL'));
    it('90', () => toRoman(90).should.equal('XC'));
    it('100', () => toRoman(100).should.equal('C'));
    it('400', () => toRoman(400).should.equal('CD'));
    it('500', () => toRoman(500).should.equal('D'));
    it('900', () => toRoman(900).should.equal('CM'));
    it('1000', () => toRoman(1000).should.equal('M'));
    it('3999', () => toRoman(3999).should.equal('MMMCMXCIX'));
  })
});
