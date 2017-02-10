angular.module("app").service("batchHttp",["$http",function($http){
    this.getbatchList=function(){
        return $http({
            method:"GET",
            url:"/service/batch"
        }).then(function(result){
            return result.data;
        });
    };
    
    this.getbatchListUniq=function(batchId){
        return $http({
            method:"GET",
            url:"/service/batch/batchid"
        }).then(function(result){
            return result.data;
        });
    };
    
     this.postbatchList=function(dataParam){
        
        return $http({
            method:"POST",
            url:"/service/batch",
            data:dataParam
        }).then(function(result){
            return result.status;
        });
     }
     this.deletebatchlist=function(batchId){
         return $http({
             method:"DELETE",             
             url:"/service/batch/"+batchid,
         }).then(function(result){
             return result.status;
         })
     }
     this.updatebatchList=function(dataParam,batchId){
         return $http({
             method:"PUT",
             url:"/service/batch/"+batchid,
             data:dataParam
         }).then(function(result){
             return result.status;
         });
     } 
}]);