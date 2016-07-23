var arabicToRoman = {
  1: 'I',
  2: 'II',
  5: 'V',
  10: 'X'
};

var converter = function (arabic) {
  return arabicToRoman[arabic];
};

module.exports = converter;
