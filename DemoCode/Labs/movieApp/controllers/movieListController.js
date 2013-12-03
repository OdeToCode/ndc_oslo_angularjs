(function (app) {

    var MovieListController = function($scope, $window, movieService) {

        var setMovies = function(response) {
            $scope.movies = response.data;
            $scope.computeAverageLength();
            $scope.numberOfMovies = $scope.movies.length;
            $scope.magicNumber = 42;
            $scope.$watch(function() {
                return $scope.computeAverageLength();
            });

        };

        $scope.doubleMagicNumber = function() {
            $scope.magicNumber *= 2;
        };

        $scope.increment = function() {
            $scope.magicNumber += 1;
        };

        $scope.computeAverageLength = function() {
            var totalLength = 0;
            for (var i = 0; i < $scope.movies.length; i++) {
                totalLength += $scope.movies[i].length;
            }
            $scope.averageLength = totalLength / $scope.movies.length;
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

