var express = require('express');
var router = express.Router();
var InspectionDataService = require('../services/InspectionDataService.js');    //need to require InspectionDataService.js cause have to call the query function

/**
* Author : Jimmy Liang
* Date : 2018/04/23
*/

// // --------  get Data from MySQL's table bbs ----------------------- 
router.get('/', function (req, res, next) {
    //call InspectionData query function
    InspectionDataService.GetInspectionData(req, function (result) {
        //stage's type mapping
        for (var i in result) {
            if (result[i].Stage == 'no')
                result[i].Stage = '無';
            else if (result[i].Stage == 'Stage1')
                result[i].Stage = 'Stage1';
            else if (result[i].Stage == 'Stage2')
                result[i].Stage = 'Stage2';
            else if (result[i].Stage == 'Stage3')
                result[i].Stage = 'Stage3';
            else if (result[i].Stage == 'Stage3a')
                result[i].Stage = 'Stage3a';
            else if (result[i].Stage == 'Stage3b')
                result[i].Stage = 'Stage3b';
            else if (result[i].Stage == 'Stage4')
                result[i].Stage = 'Stage4';
            else if (result[i].Stage == 'Stage5')
                result[i].Stage = 'Stage5';
            else
                result[i].Stage = '無匹配/有錯誤';
        }
        for (var i in result) {
            if (result[i].Gender == '1')
                result[i].Gender = '男';
            else if (result[i].Gender == '2')
                result[i].Gender = '女';
            else
                result[i].Gender = '無匹配/有錯誤';
        }

        res.json(result);
    })
});
module.exports = router;