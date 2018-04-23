var express = require('express');
var router = express.Router();
var CareinfoDataService = require('../services/CareinfoDataService.js');    //need to require ClinicDataService.js cause have to call the query function

/**
* Author : Jimmy Liang
* Date : 2018/04/23
*/

// --------  insert Data from MySQL's table InspectionData ----------------------- 
router.post('/', function (req, res, next) {
    //call InspectionData query function
    CareinfoDataService.InsertCareinfo(req, function (result) {
        res.json(result);
    })
});
module.exports = router;