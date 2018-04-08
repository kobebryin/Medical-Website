//Insert InspectionData SQL insert query code
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
    InsertInspectionData: InsertInspectionData
};