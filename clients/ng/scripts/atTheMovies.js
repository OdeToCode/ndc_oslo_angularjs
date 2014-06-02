(function() {

    var module = angular.module("atTheMovies", []);

    module.config(function($httpProvider) {
        
    });

    module.run(function($rootScope) {
        $rootScope.appConfig = {
            version: "v1.1"
        };


    });

}());