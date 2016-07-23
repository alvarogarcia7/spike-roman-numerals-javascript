var arabicToRoman = {
  1: 'I',
  2: 'II',
  5: 'V',
  10: 'X'
};

var converter = function (arabic) {
  if (arabic === 1) return arabicToRoman[arabic];
  if (arabic === 2) return arabicToRoman[arabic];
  if (arabic === 10) return arabicToRoman[arabic]
  return arabicToRoman[arabic];
};

module.exports = converter;
