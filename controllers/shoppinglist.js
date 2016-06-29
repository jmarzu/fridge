var express = require('express');
var bodyParser = require('body-parser');
var db = require('../models');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('shoppinglist');
});

router.post('/',function(req, res) {
  db.shoppinglist.create({
    userId: req.user.id,
    name: req.body.name,
    type: req.body.type
  }).then(function(list) {
    console.log(list.get());
  });
});

module.exports = router;
