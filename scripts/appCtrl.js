"use strict";
angular.module("app").controller("appCtrl",['$scope',function($scope){
	$scope.title="Sample app for ui routing";


	$scope.person=[{
		'firstName':'john',
		'lastName':'Doe'
	},{
		'firstName' :'abc',
		'lastName' :'xyz'
	},{
		'firstName' :'def',
		'lastName' : 'ghi'
	}
	}];
}])