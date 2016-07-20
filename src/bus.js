var radio = require('radio');

module.exports = function () {
  return {
    publish: publish,
    subscribe: subscribe
  };
};

function subscribe(topic, callback) {
  radio(topic).subscribe(callback);
}

function publish(topic, payload) {
  radio(topic).broadcast(payload);
}


