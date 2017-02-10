angular.module("app").service("classHttp",["$http",function($http){
    this.getclassList=function(){
        return $http({
            method:"GET",
            url:"/service/class"
        }).then(function(result){
            return result.data;
        });
    };
    
    this.getclassListUniq=function(classId){
        return $http({
            method:"GET",
            url:"/service/class/classId"
        }).then(function(result){
            return result.data;
        });
    };
    
     this.postclassList=function(dataParam){
        return $http({
            method:"POST",
            url:"/service/class",
            data:dataParam
        }).then(function(result){
            return result.status;
        });
     }
     this.deleteclasslist=function(classId){
         return $http({
             method:"DELETE",             
             url:"/service/class/"+classId,
         }).then(function(result){
             return result.status;
         })
     }
     this.updateclassList=function(dataParam,classId){
         return $http({
             method:"PUT",
             url:"/service/class/"+classid,
             data:dataParam
         }).then(function(result){
             return result.status;
         });
     } 
}]);