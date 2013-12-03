(function(app) {

    var MovieDetailsController = function($scope, movieService, $routeParams) {

        var id = $routeParams.id;

        movieService
            .getById(id)
            .then(function(result) {
                $scope.movie = result.data;
            });

    };

    app.controller("MovieDetailsController", MovieDetailsController);

}(angular.module("movieApp")));