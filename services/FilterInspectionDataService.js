//Insert InspectionData SQL insert query code

/**
* Author : Jimmy Liang
* Date : 2018/04/23
*/


//Get InspectionData SQL query code
function GetFilterInspectionData(req, callback) {
    req.dbConnection.query('SELECT a.*,b.Gender FROM InspectionData a INNER JOIN CustomData b ON a.Clinic_No=b.Clinic_No where  SBP>=130 OR DBP>=85 OR (HbA1C<4.00 OR HbA1C>6.00) OR (ACSugar<70 OR ACSugar>110) OR (BUN<7 OR BUN>25) OR (Creatinine<0.5 OR Creatinine>1.3) OR (TCH<110 OR TCH>200) OR TG>=150 OR LDL>130 OR UACR<150 OR eGFR<100 OR (Gender=1 AND Waist>=90) OR (Gender=2 AND Waist>=80);'
    , function (error, results, fields) {
        
        if (error) throw error;
        console.log('The solution is: ', results);
        callback(results);
    });
};


//export module then you can call this js file's function
module.exports = {
    GetFilterInspectionData: GetFilterInspectionData
};