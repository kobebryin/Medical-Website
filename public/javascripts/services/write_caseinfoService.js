angular.module('Medical Website').service('write_caseinfoService', function ($rootScope, $http) {

    //新增會員資料
    this.postCaseInfoData = function (inputObj, callback) {
        $http.post($rootScope.apiUrl + 'write_caseinfoApi', inputObj).success(function (data) {
            // you can do some processing here
            callback(data);
        });
    }

});