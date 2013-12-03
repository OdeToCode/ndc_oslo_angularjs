(function(app) {

    var movieService = function($http, $q) {

        var getById = function(id) {
            var deferred = $q.defer();

            $http.get("/movieApp/data/movies.json")
                .then(function(result) {
                    var movie = null;
                    
                    for (var i = 0; i < result.data.length; i++) {
                        if (result.data[i].id == id) {
                            movie = result.data[i];
                            break;
                        }
                    }
                    
                    if (movie != null) {
                        deferred.resolve({ data: movie });
                    } else {
                        deferred.reject("Could not find that movie");
                    }
                });
            return deferred.promise;
        };


        var getAllMovies = function() {
            return $http.get("/movieApp/data/movies.json");
        };


        return {
            getAll: getAllMovies,
            getById: getById
        };
    };
    movieService.$inject = ["$http", "$q"];

    app.factory("movieService", movieService);


}(angular.module("movieApp")));