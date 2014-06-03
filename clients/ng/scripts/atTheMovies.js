(function() {

    var module = angular.module("atTheMovies",
        ["ngRoute", "atTheMovies.data"]);

    module.config(function (movieServiceProvider) {
        movieServiceProvider.setRootUrl("/api/movies");
    });

    module.config(function($routeProvider) {
        $routeProvider
            .when("/list", {
                templateUrl: "views/list.html",
                controller: "MovieListController"                
            })
            .when("/edit/:id", {                
                templateUrl: "views/edit.html",
                controller: "MovieEditController",
                resolve: {
                    editableMovie: function(movieService, $route) {
                        var id = $route.current.params.id;
                        return movieService.getById(id);
                    }
                }
            })
            .otherwise({                
                redirectTo: "/list" 
            });
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