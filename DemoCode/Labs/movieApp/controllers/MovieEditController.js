(function(app) {

    var MovieEditController = function($scope) {

        $scope.cancel = function() {
            $scope.editable.movie = null;
        };

        $scope.disableSave = function() {
           
        };

        $scope.save = function () {
            
            $scope.movies[$scope.editable.index] = angular.copy($scope.editable.movie);
            $scope.editable.movie = null;
            //$scope.computeAverageLength();
        };

    };

    app.controller("MovieEditController", MovieEditController);

}(angular.module("movieApp")));