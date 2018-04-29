//Insert InspectionData SQL insert query code

/**
* Author : Jimmy Liang
* Date : 2018/04/23
*/

function InsertInspectionData(req, callback) {
    req.dbConnection.query("INSERT INTO InspectionData (Clinic_No,Clinic_Name,Class_Name,Inspectionday, Height, Weight, Waist, SBP, DBP, ACSugar, HbA1C, BUN, Creatinine, eGFR, stage,TCH, TG, LDL, UACR, UR, ModifiedDate, ModifiedBy) VALUES ("
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
        + '?' + ", "
        + '?' + ");", [req.body.Clinic_No,req.body.Clinic_Name,req.body.Class_Name,req.body.Inspectionday, req.body.Height, req.body.Weight, req.body.Waist, req.body.SBP, req.body.DBP, req.body.ACSugar, req.body.HbA1C, req.body.BUN, req.body.Creatinine, req.body.eGFR, req.body.Stage, req.body.TCH, req.body.TG, req.body.LDL, req.body.UACR, req.body.UR, req.body.ModifiedDate, req.body.ModifiedBy], function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results);
            callback(results);
        });
}

//Get InspectionData SQL query code
function GetInspectionData(req, callback) {
    req.dbConnection.query('SELECT a.*,b.Gender FROM InspectionData a INNER JOIN customdata b ON a.Clinic_No=b.Clinic_No;', function (error, results, fields) {
        
        if (error) throw error;
        console.log('The solution is: ', results);
        callback(results);
    });
};


//export module then you can call this js file's function
module.exports = {
    InsertInspectionData: InsertInspectionData,
    GetInspectionData: GetInspectionData
};