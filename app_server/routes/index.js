var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  if (req.url.match('/api/')) return next();

  res.render('index', { title: 'CuraNu' });
});

module.exports = router;