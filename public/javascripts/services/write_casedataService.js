angular.module('Medical Website').service('write_casedataService', function ($rootScope, $http) {

    /**
    * Author : Jimmy Liang
    * Date : 2018/04/23
    */

    //新增 -- 檢驗資料/檢驗資料登陸/檢驗資訊
    this.postCaseDataByInspectionData = function (inputObj, callback) {
        $http.post($rootScope.apiUrl + 'write_casedataApi', inputObj).success(function (data) {
            // you can do some processing here
            callback(data);
        });
    }


});