var express = require('express');
var router = express.Router();

// // --------  get Data from MySQL's table bbs ----------------------- 
// router.get('/', function (req, res, next) {
//     connection.query('SELECT * FROM bbs;', function (error, results, fields) {
//         if (error) throw error;
//         console.log('The solution is: ', results);
//         res.json(results);
//     });
// });

// --------  insert Data from MySQL's table CustomData ----------------------- 
router.post('/', function (req, res, next) {
    req.dbConnection.query("INSERT INTO CustomData (Clinic_No, Clinic_Name, Class_Name, Gender, Age, Religion, Education, MaritalStatus, JobStatus, ResidentSituation, SmokingHabits, DrinkHabits, SportsHabits, DiabetesEducation, BloodGlucoseMachine, MedicationHabits, MedicalHistory, Remark, BeginTime, ModifiedDate, ModifiedBy) VALUES ("
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ");", [req.body.Clinic_No, req.body.Clinic_Name, req.body.Class_Name, req.body.Gender, req.body.Age, req.body.Religion, req.body.Education, req.body.MaritalStatus, req.body.JobStatus, req.body.ResidentSituation, req.body.SmokingHabits, req.body.DrinkHabits, req.body.SportsHabits, req.body.DiabetesEducation, req.body.Blood_GlucoseMachine, req.body.MedicationHabits, req.body.MedicalHistory, req.body.Remark, req.body.BeginTime, req.body.ModifiedDate, req.body.ModifiedBy], function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results);
            res.json(results);
        });
});

// --------  insert Data from MySQL's table InspectionData ----------------------- 
router.post('/InspectionData', function (req, res, next) {
    req.dbConnection.query("INSERT INTO InspectionData (Clinic_No, Height, Weight, Waist, tension, ACSugar, HbA1C, BUN, Creatinine, eGFR, TCH, TG, LDL, UACR, ModifiedDate, ModifiedBy) VALUES ("
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ", "
    + '?' + ");", [req.body.Clinic_No, req.body.Height, req.body.Weight, req.body.Waist, req.body.tension, req.body.ACSugar, req.body.HbA1C, req.body.BUN, req.body.Creatinine, req.body.eGFR, req.body.TCH, req.body.TG, req.body.LDL, req.body.UACR, req.body.ModifiedDate, req.body.ModifiedBy], function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results);
            res.json(results);
        });
});

// // --------  update Data from MySQL's table bbs ----------------------- 
// router.put('/', function (req, res, next) {
//     connection.query('UPDATE bbs SET '
//         + "RID=" + "'" + req.body.rid + "', "
//         + 'MID=' + "'" + req.body.mid + "', "
//         + 'MIP=' + "'" + req.body.mip + "', "
//         + 'MID2=' + "'" + req.body.mid2 + "', "
//         + 'MIP2=' + "'" + req.body.mip2 + "', "
//         + 'Content=' + "'" + req.body.content + "', "
//         + 'ReplyID=' + "'" + req.body.replayid + "', "
//         + 'ReplyTime=' + "'" + req.body.replaytime + "', "
//         + 'ReadID=' + "'" + req.body.readid + "', "
//         + 'Flag=' + "'" + req.body.flag + "', "
//         + 'CreateTime=' + "'" + req.body.createtime + "', "
//         + 'RecordTime=' + "'" + req.body.recordtime + "', "
//         + 'ShowTime=' + "'" + req.body.showtime + "' "
//         + 'WHERE ID=' + "'" + req.body.id + "';"
//         , function (error, results, fields) {
//             if (error) throw error;
//             console.log('The solution is: ', results);
//             res.json(results);
//         });
// });

// // --------  delete Data from MySQL's table bbs ----------------------- 
// router.delete('/', function (req, res, next) {
//     connection.query('DELETE FROM bbs WHERE ID=' + "'" + req.body.id + "';", function (error, results, fields) {
//         if (error) throw error;
//         console.log('The solution is: ', results);
//         res.json(results);
//     });
// });


module.exports = router;