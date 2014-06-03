(function() {

    var MovieListController = function (
            $scope, movieService,
            $log, $location, $anchorScroll) {


        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

        $scope.showMessage = true;
        $scope.hideMessage = function() {
            $scope.showMessage = false;
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
    };    

    var module = angular.module("atTheMovies");
    module.controller("MovieListController", MovieListController);

}());

