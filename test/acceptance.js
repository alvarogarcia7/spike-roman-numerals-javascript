var chai = require('chai');
var request = require('supertest');
var expect = chai.expect; 
var romanNumeralAPI = require('./../src/restapi');
var romanNumeralConverter = require('./../src/converter');

var app = romanNumeralAPI.app(romanNumeralConverter);

describe('Acceptance', function(){
  describe('Roman Numeral Conversion', function() {
    it('convert a number', function(done) {
      request(app)
        .post('/toroman')
        .send({'arabic': 1})
        .set('Accept', 'application/json')
        .expect(200, {'roman': 'I'}, done);
    });
  });
});
