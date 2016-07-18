var chai = require('chai');
var request = require('supertest');
var express = require('express');
var should = require('should');
var expect = chai.expect; 
var romanNumeralAPI = require('./../src/restapi');
var romanNumeralConverter = require('./../src/converter');

var app = romanNumeralAPI.app(romanNumeralConverter);

describe('Roman Numeral', function() {
  it('should return the roman numeral equivalent', function(done) {
    request(app)
      .post('/toroman')
      .send({'arabic': 1})
      .set('Accept', 'application/json')
      .expect(200, {'roman': 'I'}, done);
  });
});

describe('Roman Numeral conversion', function() {
  it('should return the roman numeral equivalent of 1', function() {
      romanNumeralConverter(1).should.equal('I');
  });
});
