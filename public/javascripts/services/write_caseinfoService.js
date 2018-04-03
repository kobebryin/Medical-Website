angular.module('Medical Website').service('write_caseinfoService', function ($rootScope, $http) {

    //新增 -- 個案基本資料/基本資料登錄/基本資料
    this.postCaseInfoData = function (inputObj, callback) {
        $http.post($rootScope.apiUrl + 'write_caseinfoApi', inputObj).success(function (data) {
            // you can do some processing here
            callback(data);
        });
    }
    //新增 -- 個案基本資料/基本資料登錄/檢驗資訊
    this.postCaseInfoDataByInspectionData = function (inputObj, callback) {
        $http.post($rootScope.apiUrl + 'write_caseinfoApi/InspectionData', inputObj).success(function (data) {
            // you can do some processing here
            callback(data);
        });
    }

});