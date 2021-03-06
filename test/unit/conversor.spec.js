"use strict";

var chai = require('chai');
var sinon = require('sinon');

var demand = require("must");
var nock = require("nock");
var Conversor = require('./../../src/conversor');
var Request = require('./../../src/request');


describe("Conversor", function () {
  var conversor;
  
  beforeEach(function () {
    var request = Request();
    conversor = Conversor(request);
  });
  
  it("converts to roman", function (done) {
    var arabic = '1';
    nock('http://localhost').persist().post('/toroman', {'arabic': arabic}).reply(200, {'roman': 'I'});
    conversor.convertToRoman(arabic)
      .then((roman) => demand(roman).must.be('I'))
      .then(done);
  });
});
