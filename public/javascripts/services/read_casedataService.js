angular.module('Medical Website').service('read_casedataService', function ($rootScope, $http) {
    
    /**
    * Author : Jimmy Liang
    * Date : 2018/04/23
    */
    
    //get all CustomData data's api
    this.getCasenumData = function (callback) {
        $http.get($rootScope.apiUrl + 'read_casedataApi').success(function (data) {
            // you can do some processing here
            
            callback(data);
        });
    }
});