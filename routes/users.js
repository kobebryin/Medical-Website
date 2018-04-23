var express = require('express');
var router = express.Router();

/**
* Author : Jimmy Liang
* Date : 2018/03/28
*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
