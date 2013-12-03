(function() {

    var app = angular.module("movieApp", ["ngRoute"]);

    app.config(function($httpProvider, $routeProvider, $locationProvider) {

        $httpProvider.defaults.headers.common["x-myheader"] = "FromMovieApp";

        $routeProvider
            .when("/", { templateUrl: "/movieApp/templates/listTemplate.html" })
            .when("/details/:id", { templateUrl: "/movieapp/templates/detailsTemplate.html" })
            .otherwise({ redirectTo: "/" });

        $locationProvider.html5Mode(true);
    });

    var run = function($rootScope) {
        $rootScope.message = "Hello from Root Scope";
        $rootScope.version = angular.version;
    };
    run.$inject = ["$rootScope"];
    app.run(run);

}());











