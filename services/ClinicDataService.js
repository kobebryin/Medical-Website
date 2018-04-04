//InsertCustomData SQL insert query code
function InsertCustomData(req, callback) {
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
            callback(results);
        });
}

//InsertInspectionData SQL insert query code
function InsertInspectionData(req, callback) {
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
            callback(results);
        });
}

//export module then you can call this js file's function
module.exports = {
    InsertCustomData: InsertCustomData, 
    InsertInspectionData: InsertInspectionData
};