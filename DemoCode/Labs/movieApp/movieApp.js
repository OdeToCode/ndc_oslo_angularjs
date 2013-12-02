(function() {

    var app = angular.module("movieApp", []);

    app.config(function($httpProvider) {

        $httpProvider.defaults.headers.common["x-myheader"] = "FromMovieApp";

    });

}());











