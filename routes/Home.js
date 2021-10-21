var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/home', function(req, res, next) {
  return res.send('you are already logged in');
});

module.exports = router;
