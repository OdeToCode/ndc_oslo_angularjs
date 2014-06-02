(function() {

    var module = angular.module("atTheMovies", []);

    module.config(function($httpProvider) {
        
    });

    module.run(function($rootScope) {
        $rootScope.version = "v1.0";
    });

}());