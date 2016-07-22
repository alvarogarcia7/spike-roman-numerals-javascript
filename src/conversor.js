

module.exports = function (request) {
  return {
    convertToRoman: function (arabic) {
      return request.post('http://localhost/toroman', {arabic: arabic});
    }
  };
};