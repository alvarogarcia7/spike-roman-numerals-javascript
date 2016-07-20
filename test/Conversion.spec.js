"use strict";

var chai = require('chai');
var demand = require("must");
var Conversion = require('./../src/conversion');
var Bus = require('./../src/bus');
var Conversor = require('./../src/sender');
var ConversionView = require('./../src/conversionView');
var events = require('./../src/events');
var sinon = require('sinon');


describe("ViewModel", function () {
  var conversionView;
  var conversor;
  var bus;
  
  beforeEach(function () {
    conversor = Conversor();
    conversionView = ConversionView();
    bus = Bus();
    Conversion(conversionView, bus, conversor, events);
  });
  
  
  afterEach(function () {
    conversor.convertToRoman.restore();
  });
  
  describe("when an Arabic is entered", function () {
    it("sends it to the conversor", function () {
      var arabic = '1';
      sinon.spy(conversor, 'convertToRoman');
      sinon.stub(conversionView, 'getArabic').returns(arabic);
    
      bus.publish(events.arabicEntered);
    
      demand(conversor.convertToRoman.calledWith(arabic)).must.be.true();
  
      conversionView.getArabic.restore();
    });
    
    it("sets the converted arabic number", function () {
      var roman = 'I';
      sinon.stub(conversor, 'convertToRoman').returns(roman);
      sinon.spy(conversionView, 'setRoman');
    
      bus.publish(events.arabicEntered);
    
      demand(conversionView.setRoman.calledWith(roman)).must.be.true();
    });
  })
});
