var express = require('express');
var router = express.Router();
var FilterInspectionDataService = require('../services/FilterInspectionDataService.js');    //need to require InspectionDataService.js cause have to call the query function

/**
* Author : Jimmy Liang
* Date : 2018/04/23
*/

// // --------  get Data from MySQL's table bbs ----------------------- 
router.get('/', function (req, res, next) {
    //call InspectionData query function
    FilterInspectionDataService.GetFilterInspectionData(req, function (result) {

        for (var i in result) {
            var tmp_String = '';
            if (result[i].Gender == 1)
                result[i].Gender = '男';
            else if (result[i].Gender == 2)
                result[i].Gender = '女';
            else
                result[i].Gender = '無匹配/有錯誤';

            if (result[i].SBP >= 130)
                tmp_String += 'SBP,';

            if (result[i].DBP >= 85)
                tmp_String += 'DBP,';

            if (result[i].HbA1C < 4.00 || result[i].HbA1C > 6.00)
            tmp_String += 'HbA1C,';

            if (result[i].ACSugar < 70 || result[i].ACSugar > 110)
            tmp_String += 'ACSugar,';

            if (result[i].BUN < 7 || result[i].BUN > 25)
            tmp_String += 'BUN,';

            if (result[i].Creatinine < 0.5 || result[i].Creatinine > 1.3)
            tmp_String += 'Creatinine,';

            if (result[i].TCH < 110 || result[i].TCH > 200)
            tmp_String += 'TCH,';

            if (result[i].TG >= 150)
            tmp_String += 'TG,';

            if (result[i].LDL > 130)
            tmp_String += 'LDL,';

            if (result[i].UACR < 150)
            tmp_String += 'UACR,';

            if (result[i].eGFR < 100 && result[i].eGFR >= 90)
            tmp_String += 'eGFR-stage1,';
            else if (result[i].eGFR <= 89 && result[i].eGFR >= 60)
            tmp_String += 'eGFR-stage2,';
            else if (result[i].eGFR <= 59 && result[i].eGFR >= 45)
            tmp_String += 'eGFR-stage3a,';
            else if (result[i].eGFR <= 44 && result[i].eGFR >= 30)
            tmp_String += 'eGFR-stage3b,';
            else if (result[i].eGFR <= 29 && result[i].eGFR >= 15)
            tmp_String += 'eGFR-stage4,';
            else if (result[i].eGFR < 15)
            tmp_String += 'eGFR-stage5,';

            if (result[i].Gender = 1 && result[i].Waist >= 90)
            tmp_String += '腰圍,';
            else if (result[i].Gender = 2 && result[i].Waist >= 80)
            tmp_String += '腰圍,';

            if(tmp_String.length > 0){
                tmp_String = tmp_String.slice(0, -1);
            }
            result[i].resultString = tmp_String;
        }
        res.json(result);
    })
});
module.exports = router;