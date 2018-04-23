var express = require('express');
var router = express.Router();
var EndinfoDataService = require('../services/EndinfoDataService.js');    //need to require InspectionDataService.js cause have to call the query function

/**
* Author : Jimmy Liang
* Date : 2018/04/23
*/

// // --------  get Data from MySQL's table bbs ----------------------- 
router.get('/', function (req, res, next) {
    //call InspectionData query function
    EndinfoDataService.GetEndInfoData(req, function (result) {
        res.json(result);
    })
});
module.exports = router;