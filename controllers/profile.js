var express = require('express');
var bodyParser = require('body-parser');
var db = require('../models');
//var isLoggedIn = require('./middleware/isLoggedIn');
var router = express.Router();

router.post('/:id', function(req, res) {
  db.favorite.create({
    userID: req.user.id,
    title: req.body.title,
    href: req.body.href
  }).then(function(favorite) {
    res.render('profile', { favorite: favorite });
  });
});

module.exports = router;