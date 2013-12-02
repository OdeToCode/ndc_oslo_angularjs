(function() {

    var app = angular.module("movieApp", []);

    app.config(function($httpProvider) {
        $httpProvider.defaults.headers.common["x-myheader"] = "FromMovieApp";
    });

    var run = function($rootScope) {
        $rootScope.message = "Hello from Root Scope";
        $rootScope.version = angular.version;
    };
    run.$inject = ["$rootScope"];
    app.run(run);

}());











