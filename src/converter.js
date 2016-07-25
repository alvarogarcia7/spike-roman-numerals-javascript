"use strict";

var arabicToRoman = {
  5: 'V',
  1: 'I',
  4: 'IV',
  
  10: 'X',
  9: 'IX',
  
  40: 'XL',
  50: 'L',
  90: 'XC',
  
  100: 'C',
  400: 'CD',
  500: 'D',
  
  900: 'CM',
  1000: 'M',
};

function sortTranslation() {
  var values = Object.getOwnPropertyNames(arabicToRoman).sort((a, b) => {
    return Number.parseInt(b) - Number.parseInt(a);
  });
  
  var vals = [];
  values.forEach(function (value) {
    vals.push({arabic: value, roman: arabicToRoman[value]});
  });
  
  values = vals;
  return values;
}

function notFinished(remaining) {
  return remaining > 0;
}

function fitsIn(remaining, valueTuple) {
  return remaining >= valueTuple.arabic;
}

var converter = function (arabic) {
  var values = sortTranslation();
  
  var roman = '';
  var remaining = arabic;
  var i = 0;
  while (notFinished(remaining)) {
    while (fitsIn(remaining, values[i])) {
      roman += values[i].roman;
      remaining -= values[i].arabic;
    }
    i++;
  }
  
  return roman;
};

module.exports = converter;
