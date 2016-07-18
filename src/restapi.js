var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var self = this;
app.use(bodyParser.json());

app.post('/toroman', function(req, res) {
    console.log(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ 'roman': self.converter(req.body.arabic) }));
});

module.exports = {app: function(converter){
    self.converter = converter;
    return app;
}};
