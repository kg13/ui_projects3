angular.module("app").service("sessionHttp",["$http",function($http){
    this.getSessionList=function(){
        return $http({
            method:"GET",
            url:"/service/session"
        }).then(function(result){
            return result.data;
        });
    };
    
    this.getSessionListUniq=function(sessionId){
        return $http({
            method:"GET",
            url:"/service/session/sessionid"
        }).then(function(result){
            return result.data;
        });
    };
    
     this.postSessionList=function(dataParam){
        return $http({
            method:"POST",
            url:"/service/session",
            data:dataParam
        }).then(function(result){
            return result.status;
        });
     }
     this.deleteSessionlist=function(sessionId){
         return $http({
             method:"DELETE",             
             url:"/service/session/"+sessionId,
         }).then(function(result){
             return result.status;
         })
     }
     this.updateSessionList=function(dataParam,sessionId){
         return $http({
             method:"PUT",
             url:"/service/session/"+sessionid,
             data:dataParam
         }).then(function(result){
             return result.status;
         });
     } 
}]);