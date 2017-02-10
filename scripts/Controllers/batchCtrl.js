angular.module("app").controller("batchCtrl", ['$scope','batchHttp','studentHttp','sessionHttp',function($scope,batchHttp,studentHttp,sessionHttp){
    
    $scope.batchList=[];
    $scope.studentList=[];
    $scope.sessionList=[];
    refreshEntries();
    
    $scope.updateId = 0;
    
    
    $scope.formModels={
        sessionid:"",
        studentid:""
    };
    
    $scope.add=function(){
    var tempObj={  
        studentid:parseInt($scope.formModels.studentid),
        sessionid:parseInt($scope.formModels.sessionid) 
        };
    batchHttp.postbatchList(tempObj).then(function(response){
        refreshEntries();
        resetForm();
        });                                                                                 
    };
    
    function refreshEntries(){ 
        var promise=batchHttp.getbatchList();
        promise.then(function(response){
            $scope.batchList=response;
        });
    }
    
    function resetForm(){
            $scope.formModels={
                 sessionid:"",
                studentid:""

            };
        }
    $scope.getstudentname=function(id){
            for(var student in $scope.studentList){
                if($scope.studentList[student].studentid==id){
                   return ($scope.studentList[student].firstname);

                }

            }
        };
    $scope.getsessionname=function(id){
        for(var session in $scope.sessionList){
            if($scope.sessionList[session].sessionid==id){
               return ($scope.sessionList[session].sessiontitle);
            }
            
        }
     };
     var promise=studentHttp.getstudentList();
         promise.then(function(response){
            $scope.studentList=response;
        });
    
     var promise=sessionHttp.getSessionList();
         promise.then(function(response){
            $scope.sessionList=response;
        });
}]);