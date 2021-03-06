var express = require('express');
var router = express.Router();

/**
    * Author : Jimmy Liang
    * Date : 2018/03/28
    */

/* GET login page. */
router.get('/', function (req, res, next) {
  res.render('login', { title: '代謝症候群個案管理系統' });
});

/* GET home page. */
router.get('/index', function (req, res, next) {
  res.render('index', { title: '代謝症候群個案管理系統' });
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
