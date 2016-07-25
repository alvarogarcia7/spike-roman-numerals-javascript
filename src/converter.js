"use strict";

var arabicToRoman = {
  5: 'V',
  1: 'I',
  10: 'X'
};

var converter = function (arabic) {
  var remaining = arabic;
  var values = Object.getOwnPropertyNames(arabicToRoman).sort((a, b) => {
    return Number.parseInt(b) - Number.parseInt(a);
  });
  
  var vals = [];
  values.forEach(function (value) {
    vals.push({arabic: value, roman: arabicToRoman[value]});
  });
  
  values = vals;
  
  var roman = '';
  var i = 0;
  while (remaining > 0) {
    while (remaining  >= values[i].arabic) {
      roman += values[i].roman;
      remaining -= values[i].arabic;
    }
    i++;
  }
  
  return roman;
};

module.exports = converter;
