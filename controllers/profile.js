var express = require('express');
var bodyParser = require('body-parser');
var db = require('../models');
var router = express.Router();

// app.use(bodyParser.urlencoded({ extended: false }));

// router.get('/', function(req, res) {
//   res.send('button worked');
// });

// router.get('/:id', function(req, res) {
//   res.send('profile page for user');
// });

module.exports = router;