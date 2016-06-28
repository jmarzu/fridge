var express = require('express');
var bodyParser = require('body-parser');
var db = require('../models');
//var isLoggedIn = require('./middleware/isLoggedIn');
var router = express.Router();

router.post('/:id', function(req, res) {
  res.send('profile page for user');
  res.render('profile');
});

module.exports = router;