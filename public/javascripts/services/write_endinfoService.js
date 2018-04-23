angular.module('Medical Website').service('write_endinfoService', function ($rootScope, $http) {
    
    /**
    * Author : Jimmy Liang
    * Date : 2018/04/23
    */

    //新增 -- 照護資訊
    this.postEndinfo = function (inputObj, callback) {
        $http.post($rootScope.apiUrl + 'write_endinfoApi', inputObj).success(function (data) {
            // you can do some processing here
            callback(data);
        });
    }


});