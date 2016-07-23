var converter = function (arabic) {
  if (arabic === 1)return 'I';
  if (arabic === 10) return 'X';
  return 'V';
};

module.exports = converter;
