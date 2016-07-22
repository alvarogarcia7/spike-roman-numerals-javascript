"use strict";

var requestify = require('requestify');


module.exports = function () {
  return {
    post: post
  };
  
  /**
   * returns a promise
   */
  function post(url, payload) {
    return requestify.post(url, payload);
  }
};