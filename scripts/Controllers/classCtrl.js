angular.module("app").controller("classCtrl",['$scope','classHttp',function($scope,classHttp){
 $scope.classList=[];
    refreshEntries();
    $scope.updateId = 0;
    $scope.formModels={
            title:"",
            classlimit:"",
            description:""
    };
    
     $scope.delete=function(classId){
    alert("delete"+classId);   classHttp.deleteclasslist(classId).then(function(response){
     refreshEntries();
      }
    )}; 
    
    $scope.update=function(classId){
        alert("update"+classId);
        $scope.updateId = classId;
    };
  $scope.add=function(){
    var tempObj={
        title:$scope.formModels.title,
    classlimit:$scope.formModels.classlimit,
     description:$scope.formModels.description,
        
    };
      classHttp.postclassList(tempObj).then(function(response){
        alert("sucessfully added");
        refreshEntries();
        resetForm();
    });
  };
    function refreshEntries(){ 
        var promise=classHttp.getclassList();
        promise.then(function(response){
            $scope.classList=response;
        });
    }
    function resetForm(){
        $scope.formModels={
           title:"",
            classlimit:"",
            description:""
        };
    };
}]);