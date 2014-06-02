(function() {

    var MoviesController = function ($scope, movieService) {

        var onMovies = function(response) {
            $scope.movies = response.data;
        };

        var onError = function(reason) {
            $scope.error = "There was a problem";
        };

        movieService.getAll()
            .then(onMovies, onError);
                         

        $scope.increase = function (movie) {
            movie.rating += 1;
        };

        $scope.decrease = function (movie) {
            movie.rating -= 1;
        };
    };    

    var module = angular.module("atTheMovies");
    module.controller("MoviesController",
        ["$scope", "movieService", MoviesController]);

}());

