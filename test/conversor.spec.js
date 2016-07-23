"use strict";

var chai = require('chai');
var sinon = require('sinon');

var demand = require("must");
var nock = require("nock");
var Conversor = require('./../src/conversor');
var Request = require('./../src/request');


describe("Conversor", function () {
  var conversor;
  
  beforeEach(function () {
    var request = Request();
    conversor = Conversor(request);
  });
  
  it("converts to roman", function (done) {
    var arabic = 'anything';
    nock('http://localhost').persist().post('/toroman').reply(200, {'roman': 'I'});
    conversor.convertToRoman(arabic)
      .then(function (response) {
        return response.roman;
      }).then(function (roman) {
      demand(roman).must.be('I');
      done();
    });
  });
});
