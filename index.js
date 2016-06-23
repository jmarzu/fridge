var express = require('express');
var request = require('request');
var bodyParser = require('body-parser')
var ejsLayouts = require('express-ejs-layouts');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('mainPage');
});

app.get('/mainPage', function(req, res) {
  res.render('searchFridge');
});

app.use('/searchFridge', require('./controllers/searchFridge'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
