var express = require('express');
var router = express.Router();

// Server alive
router.get('/', function(req, res, next) {
  res.json('Server is alive');
});

module.exports = router;
