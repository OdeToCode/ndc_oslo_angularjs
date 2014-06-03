(function() {

    var module = angular.module("atTheMovies");
    module.directive("alert", function() {
        
        return {
            restrict: "EA",
            transclude: true,
            scope: {
                type: "@",
                reason: "=",
                close: "&"
            },
            replace: true,
            controller: function(scope, element, attributes) {
                
            },
            templateUrl: "views/alert.html"           
        };
    });

}());