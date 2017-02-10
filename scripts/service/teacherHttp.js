angular.module("app").service("teacherHttp",["$http",function($http){
    this.getteacherList=function(){
        return $http({
            method:"GET",
            url:"/service/teacher"
        }).then(function(result){
            return result.data;
        });
    };
    
    this.getteacherListUniq=function(studentId){
        return $http({
            method:"GET",
            url:"/service/teacher/studentId"
        }).then(function(result){
            return result.data;
        });
    };
    
     this.postteacherList=function(dataParam){
        return $http({
            method:"POST",
            url:"/service/teacher",
            data:dataParam
        }).then(function(result){
            return result.status;
        });
     }
     this.deleteteacherlist=function(teacherId){
         return $http({
             method:"DELETE",             
             url:"/service/teacher/"+teacherId,
         }).then(function(result){
             return result.status;
         })
     }
     this.updateteacherList=function(dataParam,teacherId){

         return $http({
             method:"PUT",
             url:"/service/teacher/"+teacherid,
             data:dataParam
         }).then(function(result){
             return result.status;
         });
     } 
}]);