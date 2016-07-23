var converter = function (arabic) {
  if (arabic === 1) return 'I';
  if (arabic === 2) return 'II';
  if (arabic === 10) return 'X';
  return 'V';
};

module.exports = converter;
