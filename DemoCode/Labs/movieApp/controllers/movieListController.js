(function (app) {

    var MovieListController = function($scope, $window, movieService) {

        var setMovies = function(response) {
            $scope.movies = response.data;
        };

        var onError = function(error) {
            $scope.error = error;
        };

        $scope.movies =
            movieService
                .getAll()
                .then(setMovies, onError);
        
      

        $scope.raiseAlert = function(message) {
            $window.alert(message);
        };

        $scope.increment = function (movie) {
            movie.length += 1;
        };

        $scope.decrement = function (index) {
            $scope.movies[index].length -= 1;
        };
    };

    app.controller("MovieListController", MovieListController);
   
}(angular.module("movieApp")));

