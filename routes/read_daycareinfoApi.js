var express = require('express');
var router = express.Router();
var DaycareinfoDataService = require('../services/DaycareinfoDataService.js');    //need to require InspectionDataService.js cause have to call the query function

/**
* Author : Jimmy Liang
* Date : 2018/04/23
*/

// // --------  get Data from MySQL's table bbs ----------------------- 
router.get('/', function (req, res, next) {
    //call InspectionData query function
    DaycareinfoDataService.GetDaycareInfoData(req, function (result) {
        //stage's type mapping
        for (var i in result) {
            if (result[i].movement == 'Y')
                result[i].movement = '是';
            else if (result[i].movement == 'N')
                result[i].movement = '否';
            else
                result[i].movement = '無匹配/有錯誤';
        }

        for (var i in result) {
            if (result[i].Movement_time == '0')
                result[i].Movement_time = '無';
            else if (result[i].Movement_time == '1')
                result[i].Movement_time = '30分鐘';
            else if (result[i].Movement_time == '2')
                result[i].Movement_time = '1小時';
            else if (result[i].Movement_time == '3')
                result[i].Movement_time = '1.5小時';
            else if (result[i].Movement_time == '4')
                result[i].Movement_time = '2小時';
            else if (result[i].Movement_time == '5')
                result[i].Movement_time = '2.5小時';
            else
                result[i].Movement_time = '無匹配/有錯誤';
        }

        res.json(result);
    })
});
module.exports = router;