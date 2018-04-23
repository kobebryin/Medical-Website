//Insert Careinfo SQL insert query code

/**
* Author : Jimmy Liang
* Date : 2018/04/23
*/

function InsertCareinfo(req, callback) {
    req.dbConnection.query("INSERT INTO CareInfo (Clinic_No, Clinic_Name, Doc_Name, Doc_Name_2, EducationDate, EducationTarget, Method, MedicineUse, Reason, AdmissionDate, DischargeDate, ModifiedDate, ModifiedBy) VALUES ("
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
        + '?' + ");", [req.body.Clinic_No, req.body.Clinic_Name, req.body.Doc_Name, req.body.Doc_Name_2, req.body.EducationDate, req.body.EducationTarget, req.body.Method, req.body.MedicineUse, req.body.Reason, req.body.AdmissionDate, req.body.DischargeDate, req.body.ModifiedDate, req.body.ModifiedBy], function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results);
            callback(results);
        });
}

//Get Careinfo SQL query code
function GetCareInfoData(req, callback) {
    req.dbConnection.query('SELECT * FROM CareInfo;', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        callback(results);
    });
};

//export module then you can call this js file's function
module.exports = {
    InsertCareinfo: InsertCareinfo,
    GetCareInfoData: GetCareInfoData
};