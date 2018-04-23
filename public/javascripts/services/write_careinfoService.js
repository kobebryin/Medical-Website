angular.module('Medical Website').service('write_careinfoService', function ($rootScope, $http) {
    
    /**
    * Author : Jimmy Liang
    * Date : 2018/04/23
    */

    //新增 -- 照護資訊
    this.postCareinfo = function (inputObj, callback) {
        $http.post($rootScope.apiUrl + 'write_careinfoApi', inputObj).success(function (data) {
            // you can do some processing here
            callback(data);
        });
    }


});