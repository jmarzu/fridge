var express = require('express');
var bodyParser = require('body-parser');
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');
var router = express.Router();

router.post('/:id', function(req, res) {
  db.favorite.create({
    userId: req.user.id,
    title: req.body.title,
    href: req.body.href
  }).then(function() {
    res.redirect('/profile');
  });
});

router.get('/', isLoggedIn, function(req, res) {
  db.favorite.findAll({   
    where: {
      userId: req.user.id
    }
  }).then(function(favorite) {
    res.render('profile', { favorite: favorite } );
  });
});

router.post('/delete/:id', function(req, res) {
  db.favorite.destroy({
    where: {
      userId: req.user.id,
      title: req.body.title,
      href: req.body.href
    }
  }).then(function(deletedFavorite) {
    res.redirect('/profile');
  });
});

module.exports = router;