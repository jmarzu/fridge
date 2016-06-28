var express = require('express');
var request = require('request');
var bodyParser = require('body-parser')
var ejsLayouts = require('express-ejs-layouts');
var session = require('express-session');
var passport = require('./config/ppConfig');
var flash = require('connect-flash');
var isLoggedIn = require('./middleware/isLoggedIn');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(function(req, res, next) {
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', function(req, res) {
  res.render('mainPage');
});

app.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile');
});

app.use('/searchFridge', require('./controllers/searchFridge'));
app.use('/auth', require('./controllers/auth'));
app.use('/mainPage', require('./controllers/mainPage'));
app.use('/profile', require('./controllers/profile'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
