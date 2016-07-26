module.exports = function (arabicInput, romanOutput) {
  return {
    getArabic: function () {
      return arabicInput.value;
    },
    setRoman: function(roman){
      console.log(roman);
      romanOutput.value = roman;
    }
  };
};