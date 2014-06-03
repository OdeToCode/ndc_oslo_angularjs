(function() {

    var app = angular.module("atTheMovies");

    app.controller("MovieEditController", function (
                    $scope, $routeParams, editableMovie,
                    movieService, $location) {

        var onError = function(reason) {
            $scope.error = reason;
        };

        $scope.editableMovie = editableMovie;

        $scope.save = function (movie) {
            movieService
                .save(movie)
                .then(function() {
                    $location.path("#/list");
                })
                .catch(onError);
        };

        $scope.cancelEdit = function () {
            $location.path("#/list");
        };
    });

}());