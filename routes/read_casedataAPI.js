var express = require('express');
var router = express.Router();
var InspectionDataService = require('../services/InspectionDataService.js');    //need to require InspectionDataService.js cause have to call the query function

// // --------  get Data from MySQL's table bbs ----------------------- 
router.get('/', function (req, res, next) {
    //call InspectionData query function
    InspectionDataService.GetInspectionData(req, function (result) {
        //stage's type mapping
        for (var i in result) {
            if (result[i].stage == 'Stage1')
                result[i].stage = 'Stage1';
            else if (result[i].stage == 'Stage2')
                result[i].stage = 'Stage2';
            else if (result[i].stage == 'Stage3')
                result[i].stage = 'Stage3';
            else if (result[i].stage == 'Stage3a')
                result[i].stage = 'Stage3a';
            else if (result[i].stage == 'Stage3b')
                result[i].stage = 'Stage3b';
            else if (result[i].stage == 'Stage4')
                result[i].stage = 'Stage4';
            else if (result[i].stage == 'Stage5')
                result[i].stage = 'Stage5';
            else
                result[i].stage = '無匹配/有錯誤';
        }

        res.json(result);
    })
});
module.exports = router;