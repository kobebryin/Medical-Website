angular.module('Medical Website').service('read_caseinfoService', function ($rootScope, $http) {
    //get all CustomData data's api
    this.getCaseinfoData = function (callback) {
        $http.get($rootScope.apiUrl + 'read_caseinfoApi').success(function (data) {
            // you can do some processing here
            callback(data);
        });
    }
});