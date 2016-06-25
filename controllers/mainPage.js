var express = require('express');
var db = require('../models');
var passport = require('../config/ppConfig');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('searchFridge');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/contacts', function(req, res) {
  res.render('contacts');
});

module.exports = router;