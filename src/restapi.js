var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var self = this;
app.use(bodyParser.json());

app.post('/toroman', function(req, res) {
  var roman = self.converter(req.body.arabic);
  setHeaders(res);
  send(res, {'roman': roman});
});

var setHeaders = function(res){
  res.setHeader('Content-Type', 'application/json');
}

var send = function(res, payload){
  res.send(JSON.stringify(payload));
}

module.exports = {app: function(converter){
    self.converter = converter;
    return app;
}};
