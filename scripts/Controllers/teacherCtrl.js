angular.module("app").controller("teacherCtrl", ['$scope','teacherHttp',function($scope,teacherHttp){
    
 $scope.teacherList=[];
    
    refreshEntries();
    $scope.updateId = 0;
    $scope.formModels={
            firstname:"",
            lastname:"",
            address:"",
            phonenumber:"",
            email:""
    };
    
    $scope.delete=function(teacherId){
    alert("delete"+teacherId);    
    teacherHttp.deleteteacherlist(teacherId).then(function(response){
     refreshEntries();
      }
    )}; 
    
    $scope.update=function(teacherId){
        alert("update"+teacherId);
        $scope.updateId = teacherId;
    };
  $scope.add=function(){
    var tempObj={
        firstName:$scope.formModels.firstname,
        lastName:$scope.formModels.lastname,
        address:$scope.formModels.address,
        email:$scope.formModels.email,
        phoneNumber:$scope.formModels.phonenumber,
        
        
    };
      teacherHttp.postteacherList(tempObj).then(function(response){
        alert("sucessfully added");
        refreshEntries();
        resetForm();
    });
  };
    function refreshEntries(){ 
        var promise=teacherHttp.getteacherList();
        promise.then(function(response){
            $scope.teacherList=response;
        });
    }
    function resetForm(){
        $scope.formModels={
            firstname:"",
            lastname:"",
            address:"",
            phonenumber:"",
            email:""
        };
    };
}]);