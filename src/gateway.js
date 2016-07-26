
var Conversor = require('./conversor');
var Request = require('./request');
var Bus = require('./bus');
var RomanConversionDialog = require('./conversionView');


var converter = Conversor(Request());
var fns = {
  convertToRoman: converter.convertToRoman,
  bus: Bus(),
};


window.arabicNumberEvent = function() {
  fns.bus.publish('arabicEntered');
}

window.onload = function () {
  var arabicInput = document.getElementById("arabic");
  var romanInput = document.getElementById("roman");
  fns.dialog = RomanConversionDialog(arabicInput, romanInput);
  fns.bus.subscribe('arabicEntered', convertToRoman);
  fns.bus.subscribe('romanConverted', fns.dialog.setRoman);
};

function convertToRoman(){
  Conversor(Request()).convertToRoman(fns.dialog.getArabic())
    .then((x)=>fns.bus.publish('romanConverted',x));
}

module.exports = fns;