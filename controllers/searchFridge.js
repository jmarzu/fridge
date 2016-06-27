var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res) {
    request({
      url: 'http://www.recipepuppy.com/api/',
      qs: {
        i: req.query.q
      }
    }, function(error, response, body) {
      if(!error && response.statusCode === 200) {
        var data = JSON.parse(body);
        res.render('recipies', { data: data.results });
      }
  });
});

module.exports = router;