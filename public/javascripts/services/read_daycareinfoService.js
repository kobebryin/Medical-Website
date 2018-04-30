angular.module('Medical Website').service('read_daycareinfoService', function ($rootScope, $http) {

    /**
    * Author : Jimmy Liang
    * Date : 2018/04/23
    */

    //get all CustomData data's api
    this.getDaycareinfoData = function (callback) {
        $http.get($rootScope.apiUrl + 'read_daycareinfoApi').success(function (data) {
            // you can do some processing here
            callback(data);
        });
    }
});