var chai = require('chai');
var should = require('should');
var expect = chai.expect; 
var toRoman = require('./../../src/converter');

describe('Roman Numeral conversion', function() {
  it('should return the roman numeral equivalent of 1', function() {
      toRoman(1).should.equal('I');
  });
});
