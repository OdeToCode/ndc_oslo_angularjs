(function() {

    var module = angular.module("atTheMovies", ["atTheMovies.data"]);

    module.config(function (movieServiceProvider) {
        movieServiceProvider.setRootUrl("/api/movies");
    });

    module.config(function($provide) {
        $provide.decorator("$exceptionHandler", function($delegate) {
            return function(reason, cause) {
                $delegate(reason, cause);
            };
        });
    });

    module.run(function($rootScope) {
        $rootScope.appConfig = {
            version: "v1.1"
        };
    });

}());