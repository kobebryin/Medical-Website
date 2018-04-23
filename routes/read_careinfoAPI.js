var express = require('express');
var router = express.Router();
var CareinfoDataService = require('../services/CareinfoDataService.js');    //need to require InspectionDataService.js cause have to call the query function

/**
* Author : Jimmy Liang
* Date : 2018/04/23
*/

// // --------  get Data from MySQL's table bbs ----------------------- 
router.get('/', function (req, res, next) {
    //call InspectionData query function
    CareinfoDataService.GetCareInfoData(req, function (result) {
        //stage's type mapping
        for (var i in result) {
            if (result[i].EducationTarget == 'P')
                result[i].EducationTarget = '本人';
            else if (result[i].EducationTarget == 'F')
                result[i].EducationTarget = '家屬';
            else if (result[i].EducationTarget == 'O')
                result[i].EducationTarget = '其他';
            else
                result[i].EducationTarget = '無匹配/有錯誤';
        }

        for (var i in result) {
            if (result[i].Method == '0')
                result[i].Method = '個別衛教';
            else if (result[i].Method == '1')
                result[i].Method = '電訪';
            else if (result[i].Method == '2')
                result[i].Method = '團體衛教';
            else if (result[i].Method == '3')
                result[i].Method = '其他';
            else
                result[i].Method = '無匹配/有錯誤';
        }

        res.json(result);
    })
});
module.exports = router;