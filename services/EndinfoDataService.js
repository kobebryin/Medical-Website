//Insert Endinfo SQL insert query code

/**
* Author : Jimmy Liang
* Date : 2018/04/23
*/

function InsertEndinfo(req, callback) {
    req.dbConnection.query("INSERT INTO EndInfo (Clinic_No, Clinic_Name, BeginTime, endDate, endReason, ModifiedDate, ModifiedBy) VALUES ("
        + '?' + ", "
        + '?' + ", "
        + '?' + ", "
        + '?' + ", "
        + '?' + ", "
        + '?' + ", "
        + '?' + ");", [req.body.Clinic_No, req.body.Clinic_Name, req.body.BeginTime, req.body.endDate, req.body.endReason, req.body.ModifiedDate, req.body.ModifiedBy], function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results);
            callback(results);
        });
}

function GetEndInfoData(req, callback) {
    req.dbConnection.query('SELECT * FROM EndInfo;', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        callback(results);
    });
};

//export module then you can call this js file's function
module.exports = {
    InsertEndinfo: InsertEndinfo,
    GetEndInfoData: GetEndInfoData
};