var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();

/**
* Author : Jimmy Liang
* Date : 2018/03/28
*/

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* User login */
router.post('/login', (req, res, next) => {
  console.log(req.body);
  req.dbConnection.query('SELECT * FROM sysUser WHERE account = "' + req.body.username + '";', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);

    if(results.length == 0){
      res.json({error: true});
    }else {
      if(results[0].password == req.body.password){
        var jwt = generateJWT(results[0].account);
        res.setHeader('Authorization', jwt);
        res.json({error: false});
      }else{
        res.json({error: true});
      }
    }
  });
});

function generateJWT(Clinic_No) {
  return jwt.sign({ Clinic_No: Clinic_No }, 'JimmyLiang');
}


module.exports = router;
