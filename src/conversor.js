var rp = require('request-promise');

module.exports = function () {
  return {
    convertToRoman: function (arabic) {
      var options = {
        method: 'POST',
        uri: 'http://localhost/toroman',
        body: {
          arabic: arabic
        },
        json: true // Automatically stringifies the body to JSON
      };
      
      return rp(options);
    }
  };
};