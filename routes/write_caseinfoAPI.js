var express = require('express');
var router = express.Router();
var clinicDataService = require('../services/ClinicDataService.js');    //need to require ClinicDataService.js cause have to call the query function

/**
* Author : Jimmy Liang
* Date : 2018/04/23
*/

// // --------  get Data from MySQL's table bbs ----------------------- 
// router.get('/', function (req, res, next) {
//     connection.query('SELECT * FROM bbs;', function (error, results, fields) {
//         if (error) throw error;
//         console.log('The solution is: ', results);
//         res.json(results);
//     });
// });

// --------  insert Data from MySQL's table CustomData & InspectionData ----------------------- 
router.post('/', function (req, res, next) {
    //call CustomData query function
    clinicDataService.InsertCustomData(req, function (result) {
        //then call InspectionData query function
        clinicDataService.InsertInspectionData(req, function (result) {
            res.json(result);
        })

    });
});

// --------  insert Data from MySQL's table InspectionData ----------------------- 
router.post('/InspectionData', function (req, res, next) {
    //call InspectionData query function
    clinicDataService.InsertInspectionData(req, function (result) {
        res.json(result);
    })
});
module.exports = router;