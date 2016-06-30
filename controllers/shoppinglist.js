var express = require('express');
var bodyParser = require('body-parser');
var db = require('../models');
var router = express.Router();

router.post('/',function(req, res) {
  db.shoppinglist.create({
    userId: req.user.id,
    food: req.body.food,
    date: req.body.date
  }).then(function(list) {
    res.redirect('/shoppinglist');
  });
});

router.get('/', function(req, res) {
  db.shoppinglist.findAll({
    where: {
      userId: req.user.id
    }
  }).then(function(list) {
    res.render('shoppinglist', { list: list });
  });
});

router.post('/delete', function(req, res) {
  db.shoppinglist.destroy({
    where: {
      userId: req.user.id,
      food: req.body.food,
      date: req.body.date
    }
  }).then(function(food) {
    res.redirect('/shoppinglist')
  });
});

module.exports = router;
