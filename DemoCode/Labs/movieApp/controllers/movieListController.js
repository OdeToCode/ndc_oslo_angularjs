(function (app) {

    var MovieListController = function($scope, $window, movieService) {

        var setMovies = function(response) {
            $scope.movies = response.data;
        };

        var onError = function(error) {
            if (error.status == 404) {
                $scope.error = "Not found!";
            } else {
                $scope.error = "Unknown error!";
            }
            
        };

        $scope.flag = true;

        $scope.movies =
            movieService
                .getAll()
                .then(setMovies, onError)
                ["finally"](function() {

                });
              
        $scope.raiseAlert = function(message) {
            $window.alert(message);
        };

        $scope.edit = function(index) {
            $scope.editable = {
                index: index, 
                movie: angular.copy($scope.movies[index])
            };
        };

    };

    MovieListController.$inject = ["$scope", "$window", "movieService"];

    app.controller("MovieListController", MovieListController);
   
}(angular.module("movieApp")));

