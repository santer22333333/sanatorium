var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/food', function(req, res, next) {
  res.render('food', { title: 'Express' });
});
router.get('/bron', function(req, res, next) {
  res.render('bron', { title: 'Express' });
});



module.exports = router;
