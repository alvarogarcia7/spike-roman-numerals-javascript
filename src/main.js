var romanNumeralAPI = require('./restapi');
var romanNumeralConverter = require('./converter');

var app = romanNumeralAPI.app(romanNumeralConverter);

app.listen(3002);
