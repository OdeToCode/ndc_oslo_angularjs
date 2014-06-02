(function() {

    var HelloController = function ($scope) {

        $scope.showMessage = function () {
            $scope.message = "Hello, World!";
        };

        $scope.saveMessage = function () {
            $scope.alert = "Saved...";
        };

    };

    var module = angular.module("atTheMovies");
    module.controller("HelloController", HelloController);
}());

