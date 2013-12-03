(function(app) {

    var movieService = function($http, $q) {

        var getAllMovies = function() {
            return $http.get("/movieApp/data/movies.json");
        };


        return {
            getAll: getAllMovies
        };
    };
    movieService.$inject = ["$http", "$q"];

    app.factory("movieService", movieService);


}(angular.module("movieApp")));