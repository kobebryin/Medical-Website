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
            if (result[i].Gender == 1)
                result[i].Gender = '男';
            else if (result[i].Gender == 2)
                result[i].Gender = '女';
            else
                result[i].Gender = '無匹配/有錯誤';
        }
        for (var i in result) {
            if (result[i].SBP >= 130)
                result[i].SBP = 'SBP';
            else
                result[i].SBP = null;
        }
        for (var i in result) {
            if (result[i].DBP >= 85)
                result[i].DBP = 'DBP';
            else
                result[i].DBP = null;
        }
        for (var i in result) {
            if (result[i].HbA1C < 4.00 || result[i].HbA1C > 6.00)
                result[i].HbA1C = 'HbA1C';
            else
                result[i].HbA1C = null;
        }
        for (var i in result) {
            if (result[i].ACSugar < 70 || result[i].ACSugar > 110)
                result[i].ACSugar = 'ACSugar';
            else
                result[i].ACSugar = null;
        }
        for (var i in result) {
            if (result[i].BUN < 7 || result[i].BUN > 25)
                result[i].BUN = 'BUN';
            else
                result[i].BUN = null;
        }
        for (var i in result) {
            if (result[i].Creatinine < 0.5 || result[i].Creatinine > 1.3)
                result[i].Creatinine = 'Creatinine';
            else
                result[i].Creatinine = null;
        }
        for (var i in result) {
            if (result[i].TCH < 110 || result[i].TCH > 200)
                result[i].TCH = 'TCH';
            else
                result[i].TCH = null;
        }
        for (var i in result) {
            if (result[i].TG >= 150)
                result[i].TG = 'TG';
            else
                result[i].TG = null;
        }
        for (var i in result) {
            if (result[i].LDL > 130)
                result[i].LDL = 'LDL';
            else
                result[i].LDL = null;
        }
        for (var i in result) {
            if (result[i].UACR < 150)
                result[i].UACR = 'UACR';
            else
                result[i].UACR = null;
        }
        for (var i in result) {
            if (result[i].eGFR < 100 && result[i].eGFR >= 90)
                result[i].eGFR = 'eGFR-stage1';
            else if (result[i].eGFR <= 89 && result[i].eGFR >= 60)
                result[i].eGFR = 'eGFR-stage2';
            else if (result[i].eGFR <= 59 && result[i].eGFR >= 45)
                result[i].eGFR = 'eGFR-stage3a';
            else if (result[i].eGFR <= 44 && result[i].eGFR >= 30)
                result[i].eGFR = 'eGFR-stage3b';
            else if (result[i].eGFR <= 29 && result[i].eGFR >= 15)
                result[i].eGFR = 'eGFR-stage4';
            else if (result[i].eGFR < 15)
                result[i].eGFR = 'eGFR-stage5';
            else
                result[i].eGFR = null;
        }
        for (var i in result) {
            if (result[i].Gender = 1 && result[i].Waist >= 90)
                result[i].Waist = '腰圍';
            else if (result[i].Gender = 2 && result[i].Waist >= 80)
                result[i].Waist = '腰圍';
            else
                result[i].Waist = null;
        }
        res.json(result);
    })
});
module.exports = router;