(function() {

   var movieService = function($http) {        

        return {            
          getAll : function() {
              return $http.get("/api/movies");
          }  
        };
   };

    var module = angular.module("atTheMovies");
    module.factory("movieService", movieService);

}());