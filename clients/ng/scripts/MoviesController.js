(function() {

    var MoviesController = function ($scope, movieService, $log) {

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

        $scope.edit = function(movie) {
            $scope.editableMovie = angular.copy(movie);
        };

        $scope.save = function(movie) {
            movieService
                .save(movie)
                .then(function() {
                    return movieService.getAll();
                })
                .then(function(response) {
                    $scope.movies = response.data;
                    $scope.editableMovie = null;
                })
                .catch(onError);
        };

        $scope.cancelEdit = function() {
            $scope.editableMovie = null;
        };
    };    

    var module = angular.module("atTheMovies");
    module.controller("MoviesController", MoviesController);

}());

