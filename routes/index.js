var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'webtest' });
});

router.get('/test', function (req, res, next) {
  res.render('test',
    {
      title: 'Website Info.', 
      content:  'Enter Website',
      NAME: 'Web Developer : Jimmy Liang',
      DATE: 'Date: 2018.03.31',
      CONTACT: 'Em@il: kobebryin@gmail.com'
    });
});

module.exports = router;
