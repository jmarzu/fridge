var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res) {
  if (req.query.q === '') {
    res.send('Must Enter Ingredients');
  } else {
    request({
      url: 'http://www.recipepuppy.com/api/',
      q: req.query.q
    }, function(error, response, body) {
      console.log('Query: ', req.query.q);
      if(!error && response.statusCode === 200) {
        var data = JSON.parse(body);
        res.render('recipies', { data: data.results });
        console.log('!!!! ', data.results);
      }
  });
  }
});

module.exports = router;