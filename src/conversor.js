

module.exports = function (request) {
  return {
    convertToRoman: function (arabic) {
      return request
        .post('http://debian:3002/toroman', {arabic: Number.parseInt(arabic)})
        .then(function (response) {
          return response.roman;
        });
    }
  };
};