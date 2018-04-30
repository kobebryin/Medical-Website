angular.module('Medical Website').config(function($stateProvider, $urlRouterProvider) {

  /**
    * Author : Jimmy Liang
    * Date : 2018/03/28
    */

  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('index', {
      url: "/",
      templateUrl: "views/index.html",
      controller: "indexController"
    })
    .state('write_caseinfo', {
      url: "/write_caseinfo",
      templateUrl: "views/write_caseinfo.html",
      controller: "write_caseinfoController"
    })
    .state('read_caseinfo', {
      url: "/read_caseinfo",
      templateUrl: "views/read_caseinfo.html",
      controller: "read_caseinfoController"
    })
    .state('write_casedata', {
      url: "/write_casedata",
      templateUrl: "views/write_casedata.html",
      controller: "write_casedataController"
    })
    .state('read_casedata', {
      url: "/read_casedata",
      templateUrl: "views/read_casedata.html",
      controller: "read_casedataController"
    })
    .state('write_careinfo', {
      url: "/write_careinfo",
      templateUrl: "views/write_careinfo.html",
      controller: "write_careinfoController"
    })
    .state('read_careinfo', {
      url: "/read_careinfo",
      templateUrl: "views/read_careinfo.html",
      controller: "read_careinfoController"
    })
    .state('read_daycareinfo', {
      url: "/read_daycareinfo",
      templateUrl: "views/read_daycareinfo.html",
      controller: "read_daycareinfoController"
    })
    .state('write_endinfo', {
      url: "/write_endinfo",
      templateUrl: "views/write_endinfo.html",
      controller: "write_endinfoController"
    })
    .state('read_endinfo', {
      url: "/read_endinfo",
      templateUrl: "views/read_endinfo.html",
      controller: "read_endinfoController"
    });

});