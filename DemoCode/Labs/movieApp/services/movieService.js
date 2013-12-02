(function(app) {

    var movieService = function($http, $q) {

        var getAllMovies = function() {

            //var deferred = $q.defer();

            //deferred.resolve({
            //    data: [
            //        { "title": "Star Wars", "length": 90 },
            //        { "title": "Star Trek", "length": 120 },
            //        { "title": "Starship Troopers", "length": 90 }
            //    ]
            //});

            //return deferred.promise;

            return $http.get("/movieApp/data/movies.json");
        };


        return {
            getAll: getAllMovies
        };
    };
    movieService.$inject = ["$http", "$q"];

    app.factory("movieService", movieService);


}(angular.module("movieApp")));