angular.module("app").service("studentHttp",["$http",function($http){
    this.getstudentList=function(){
        return $http({
            method:"GET",
            url:"/service/student"
        }).then(function(result){
            return result.data;
        });
    };
    
    this.getstudentListUniq=function(studentId){
        return $http({
            method:"GET",
            url:"/service/student/studentId"
        }).then(function(result){
            return result.data;
        });
    };
    
     this.postStudentList=function(dataParam){
        return $http({
            method:"POST",
            url:"/service/student",
            data:dataParam
        }).then(function(result){
            return result.status;
        });
     }
     this.deletestudentlist=function(studentId){
         return $http({
             method:"DELETE",             
             url:"/service/student/"+studentId,
         }).then(function(result){
             return result.status;
         })
     }
     this.updateStudentList=function(dataParam,studentId){
         return $http({
             method:"PUT",
             url:"/service/student/"+studnetid,
             data:dataParam
         }).then(function(result){
             return result.status;
         });
     } 
}]);