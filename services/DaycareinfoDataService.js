//Insert Careinfo SQL insert query code

/**
* Author : Jimmy Liang
* Date : 2018/04/23
*/



//Get dayCareinfo SQL query code
function GetDaycareInfoData(req, callback) {
    req.dbConnection.query('SELECT * FROM appinfo;', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        callback(results);
    });
};

//export module then you can call this js file's function
module.exports = {
    GetDaycareInfoData: GetDaycareInfoData
};