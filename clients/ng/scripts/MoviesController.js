(function() {

    var MoviesController = function ($scope, movieService, $rootScope) {

        $scope.broadcast = function(message) {
            $rootScope.$broadcast("messageSent", { message: message });
        };

        $scope.$on("messageSent", function(event, args) {
            $scope.eventDetails = {                
                event: event,
                args: args
            };
        });




        $scope.version2 = $scope.version;

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
    module.controller("MoviesController", MoviesController);

}());

