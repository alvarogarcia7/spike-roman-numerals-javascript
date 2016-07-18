var express = require('express');

var app = express();

app.post('/toroman', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ 'roman': 'I' }));
});

module.exports = {app: app};
