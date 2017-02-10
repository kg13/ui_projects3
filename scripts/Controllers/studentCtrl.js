angular.module("app").controller("studentCtrl", ['$scope','studentHttp',function($scope,studentHttp){
    
 $scope.studentList=[];
    
    refreshEntries();
    $scope.updateId = 0;
    
    $scope.formModels={
        firstname:"",
        lastname:"",
        email:"",
        phonenumber:"",
        ssn:""
    };
    
    $scope.delete=function(studentId){
    alert("delete"+studentId);     
    studentHttp.deletestudentlist(studentId).then(function(response){
     refreshEntries();
      }
    )}; 
    
   $scope.update=function(studentId){
       var prom=studentHttp.getstudentListUniq(studentId);
        prom.then(function(response){
            console.log(response[0]);
            $scope.updateStudentlist=response;
            $scope.formModels=response[0];
            $scope.formModels.firstname=response[0].firstname;
            $scope.formModels.lastname=response[0].lastname;
            $scope.formModels.email=response[0].email;
            $scope.formModels.phoneNumber=parseInt(response[0].phoneNumber);
            $scope.formModels.ssn=parseInt(response[0].ssn);
        }); 
        alert("updating "+studentId);
        $scope.updateId = studentId;
    };
    
      $scope.add=function(){
        var tempObj={
            firstName:$scope.formModels.firstname,
            lastName:$scope.formModels.lastname,
            email:$scope.formModels.email,
            phoneNumber:$scope.formModels.phonenumber,
            ssn:$scope.formModels.ssn

        };
      studentHttp.postStudentList(tempObj).then(function(response){
        refreshEntries();
        resetForm();
        });
      };
    
    function refreshEntries(){ 
        var promise=studentHttp.getstudentList();
        promise.then(function(response){
            $scope.studentList=response;
        });
    }
    function resetForm(){
        $scope.formModels={
            firstname:"",
            lastname:"",
            email:"",
            phonenumber:"",
            ssn:""
        };
    };
}]);