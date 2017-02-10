"use strict";
angular.module("app",[]);
angular.module("app",['ui.router','ui.bootstrap']);
angular.module("app").config(['$locationProvider','$stateProvider','$urlRouterProvider',function($locationProvider,$stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/student");
    
    $stateProvider.state('student',{
        url:"/student",
        templateUrl:'/views/StudentForm.html',
        controller:"studentCtrl"
    }).state("teacher",{
        url:"/teacher",
        controller:"teacherCtrl",
    templateUrl:'/views/TeacherForm.html'
    }).state("class",{
        url:"/class",
        templateUrl:'/views/classForm.html',
        controller:"classCtrl"
    }).state("batch",{
        url:"/batch",
        templateUrl:'/views/batchForm.html',
        controller:"batchCtrl"
    }).state("session",{
        url:"/session",
      templateUrl:'/views/sessionForm.html',
        controller:"sessionCtrl"
    })
             
}]);
