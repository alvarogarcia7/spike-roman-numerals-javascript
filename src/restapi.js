var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.post('/toroman', function(req, res) {
    console.log(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ 'roman': 'I' }));
});

module.exports = {app: app};
