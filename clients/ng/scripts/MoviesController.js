(function() {

    var MoviesController = function (
            $scope, movieService,
            $log, $location, $anchorScroll) {


        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

        $scope.alerts = [
            {
                type: "warning",
                message: "This is a warning from MovieController",
                reason: ""
            },
            {
                type: "info",
                message: "This is some information",
                reason: ""
            }
        ];

        var onMovies = function(movies) {
            $scope.movies = movies;
        };

        var onError = function(reason) {
            $scope.error = reason;
        };


        $scope.createError = function() {
            throw "oops!!!";
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
            $location.hash("editForm");
            $anchorScroll();
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

