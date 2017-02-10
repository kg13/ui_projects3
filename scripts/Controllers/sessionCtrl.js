angular.module("app").controller("sessionCtrl", ['$scope','sessionHttp','teacherHttp','classHttp',function($scope,sessionHttp,teacherHttp,classHttp){
    
    $scope.sessionList=[];
    $scope.teacherList=[];
    $scope.classList=[];
    
    $scope.names=["winter","Summer"];
    $scope.startdates=["01/01/2017","02/02/2017"];
    $scope.enddates=["03/03/2017","04/04/2017"];
    $scope.starttime=["10:30:00 am","12:30:00 pm"];
    refreshEntries();
    
    $scope.formModels={
        startdate:"",
        enddate:"",
        starttime:"",
        classid:"",
        teacherid:"",
        sessiontitle:""
    };
    
        $scope.delete=function(sessionId){
          sessionHttp.deleteSessionList(sessionId).then(function(response){
            refreshEntries();
          }
        )};
    
        $scope.getclassname=function(id){
            for(var classt in $scope.classList){
                if($scope.classList[classt].classid==id){
                   return ($scope.classList[classt].title);
                }
            }
        };
    
        $scope.getteachername=function(id){
            for(var teacher in $scope.teacherList){
                if($scope.teacherList[teacher].teacherid==id){
                   return ($scope.teacherList[teacher].firstname);
                }
            }
        };

        $scope.add=function(){
        var tempObj={
            startdate:$scope.formModels.startdate,
            enddate:$scope.formModels.enddate,
            starttime:$scope.formModels.starttime,
            classid:parseInt($scope.formModels.classid),
            teacherid:parseInt($scope.formModels.teacherid),
            sessiontitle:$scope.formModels.sessiontitle
        };

        sessionHttp.postSessionList(tempObj).then(function(response){
                refreshEntries();
                resetForm();
            });
        };
    
        function refreshEntries(){ 
            var promise=sessionHttp.getSessionList();
            promise.then(function(response){
                $scope.sessionList=response;
            });
        }
    
        function resetForm(){
            $scope.formModels={
                    startdate:"",
                    enddate:"",
                    starttime:"",
                    classid:"",
                    teacherid:"",
                    sessiontitle:""
            };
        };

        var teacherpromise = teacherHttp.getteacherList();
                teacherpromise.then(function(response){
                    $scope.teacherList=response;
                });
        
        var classpromise = classHttp.getclassList();
            classpromise.then(function(response){
                $scope.classList=response;
            });
}]);