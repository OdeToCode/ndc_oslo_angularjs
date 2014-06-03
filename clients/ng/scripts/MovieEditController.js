(function() {

    var app = angular.module("atTheMovies");

    app.controller("MovieEditController", function (
                    $scope, $routeParams, movieService) {
        var movieId = $routeParams.id;

        var onError = function(reason) {
            $scope.error = reason;
        };

        var onMovie = function(movie) {
            $scope.editableMovie = movie; 
        };

        movieService.getById(movieId)
            .then(onMovie, onError);
    });

}());