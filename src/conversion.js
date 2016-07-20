module.exports = function (view, bus, conversor, events) {
  bus.subscribe(events.arabicEntered, onArabicEntered);
  
  
  function onArabicEntered() {
    var arabic = view.getArabic();
    var roman = conversor.convertToRoman(arabic);
    view.setRoman(roman);
  }
};