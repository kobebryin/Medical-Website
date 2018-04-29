angular.module('Medical Website').service('indexService', function ($rootScope, $http) {

    /**
    * Author : Jimmy Liang
    * Date : 2018/04/23
    */

    //get all CustomData data's api
    this.getIndexData = function (callback) {
        $http.get($rootScope.apiUrl + 'indexApi').success(function (data) {
            // you can do some processing here
            
            callback(data);
        });
    }
});