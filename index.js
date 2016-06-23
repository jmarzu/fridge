var express = require('express');
var request = require('request');
var bodyParser = require('body-parser')
var ejsLayouts = require('express-ejs-layouts');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);

app.get('/', function(req, res) {
  res.send('What\'s in your fridge?');
});

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
