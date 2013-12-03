(function(app) {

    var otcGreeting = function() {

        return {            
            replace: true,
            templateUrl:  "/movieApp/templates/otcGreeting.html",
            restrict: "EAC",
            transclude: true,
            scope: {
                number: "=",
                additionalText: "@",
                increment: "&"
            },
            link: function(scope, element, attributes) {
                element.on("click", function() {
                    scope.$apply(function() {
                        scope.increment();
                    });
                });
            }
        };
    };


    app.directive("otcGreeting", otcGreeting);


}(angular.module("movieApp")));