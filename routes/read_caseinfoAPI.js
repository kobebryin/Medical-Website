var express = require('express');
var router = express.Router();
var clinicDataService = require('../services/ClinicDataService.js');    //need to require ClinicDataService.js cause have to call the query function

// // --------  get Data from MySQL's table bbs ----------------------- 
router.get('/', function (req, res, next) {
    //call InspectionData query function
    clinicDataService.GetCustomData(req, function (result) {
        //Gender's type mapping
        for (var i in result) {
            if (result[i].Gender == 1)
                result[i].Gender = '男';
            else if (result[i].Gender == 2)
                result[i].Gender = '女';
            else
                result[i].Gender = '無匹配/有錯誤';
        }

        //Education's type mapping
        for (var i in result) {
            if (result[i].Education == 0)
                result[i].Education = '不識字';
            else if (result[i].Education == 1)
                result[i].Education = '小學';
            else if (result[i].Education == 2)
                result[i].Education = '國中';
            else if (result[i].Education == 3)
                result[i].Education = '高中職或專科';
            else if (result[i].Education == 4)
                result[i].Education = '大學';
            else if (result[i].Education == 5)
                result[i].Education = '研究所暨以上';
            else
                result[i].Education = '無匹配/有錯誤';
        }

        //Education's type mapping
        for (var i in result) {
            if (result[i].MaritalStatus == 'Single')
                result[i].MaritalStatus = '未婚';
            else if (result[i].MaritalStatus == 'Married')
                result[i].MaritalStatus = '已婚';
            else if (result[i].MaritalStatus == 'Widowed')
                result[i].MaritalStatus = '喪偶';
            else if (result[i].MaritalStatus == 'Divorced')
                result[i].MaritalStatus = '離婚';
            else
                result[i].MaritalStatus = '無匹配/有錯誤';
        }

        //JobStatus's type mapping
        for (var i in result) {
            if (result[i].JobStatus == 'Y')
                result[i].JobStatus = '是';
            else if (result[i].JobStatus == 'N')
                result[i].JobStatus = '否';
            else
                result[i].JobStatus = '無匹配/有錯誤';
        }

        //ResidentSituation's type mapping
        for (var i in result) {
            if (result[i].ResidentSituation == 'A')
                result[i].ResidentSituation = '獨居';
            else if (result[i].ResidentSituation == 'F')
                result[i].ResidentSituation = '與親友同住';
            else if (result[i].ResidentSituation == 'M')
                result[i].ResidentSituation = '機構';
            else if (result[i].ResidentSituation == 'O')
                result[i].ResidentSituation = '機構';
            else
                result[i].ResidentSituation = '無匹配/有錯誤';
        }

        //SmokingHabits's type mapping
        for (var i in result) {
            if (result[i].SmokingHabits == 'Y')
                result[i].SmokingHabits = '有';
            else if (result[i].SmokingHabits == 'N')
                result[i].SmokingHabits = '無';
            else
                result[i].SmokingHabits = '無匹配/有錯誤';
        }

        //DrinkHabits's type mapping
        for (var i in result) {
            if (result[i].DrinkHabits == 'Y')
                result[i].DrinkHabits = '有';
            else if (result[i].DrinkHabits == 'N')
                result[i].DrinkHabits = '無';
            else
                result[i].DrinkHabits = '無匹配/有錯誤';
        }

        //SportsHabits's type mapping
        for (var i in result) {
            if (result[i].SportsHabits == 'Y')
                result[i].SportsHabits = '有';
            else if (result[i].SportsHabits == 'N')
                result[i].SportsHabits = '無';
            else
                result[i].SportsHabits = '無匹配/有錯誤';
        }

        //MedicationHabits's type mapping
        for (var i in result) {
            if (result[i].MedicationHabits == 'W')
                result[i].MedicationHabits = '西醫';
            else if (result[i].MedicationHabits == 'C')
                result[i].MedicationHabits = '中醫';
            else if (result[i].MedicationHabits == 'M')
                result[i].MedicationHabits = '成藥';
            else if (result[i].MedicationHabits == 'T')
                result[i].MedicationHabits = '傳統偏方藥草';
            else if (result[i].MedicationHabits == 'A')
                result[i].MedicationHabits = '電視台廣告藥';
            else if (result[i].MedicationHabits == 'O')
                result[i].MedicationHabits = '其他';
            else
                result[i].MedicationHabits = '無匹配/有錯誤';
        }

        //DiabetesEducation's type mapping
        for (var i in result) {
            if (result[i].DiabetesEducation == 'Y')
                result[i].DiabetesEducation = '是';
            else if (result[i].DiabetesEducation == 'N')
                result[i].DiabetesEducation = '否';
            else
                result[i].DiabetesEducation = '無匹配/有錯誤';
        }

        //BloodGlucoseMachine's type mapping
        for (var i in result) {
            if (result[i].BloodGlucoseMachine == 'Y')
                result[i].BloodGlucoseMachine = '是';
            else if (result[i].BloodGlucoseMachine == 'N')
                result[i].BloodGlucoseMachine = '否';
            else
                result[i].BloodGlucoseMachine = '無匹配/有錯誤';
        }
        
        res.json(result);
    })
});
module.exports = router;