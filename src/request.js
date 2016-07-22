"use strict";

var rp = require('request-promise');

module.exports = function () {
  return {
    post: post
  };
  
  /**
   * returns a promise
   */
  function post(uri, payload) {
    return rp({
      method: 'POST',
      uri: uri,
      body: payload,
      json: true // Automatically stringifies the body to JSON
    });
  }
};