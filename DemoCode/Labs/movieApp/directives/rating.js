(function (app) {

    var rating = function () {

        return {
            restrict: "EA",
            template: "<div></div>",
            scope: {
                ratingValue: "="
            },
            link: function (scope, element) {

                scope.$watch("ratingValue", function () {
                    element.html("");
                    for (var i = 0; i < parseInt(scope.ratingValue) ; i++) {
                        element.append("<span>*</span>");
                    }
                });

                element.on("click", function () {

                    scope.$apply(function() {
                        scope.ratingValue += 1;
                        if (scope.ratingValue > 5) {
                            scope.ratingValue = 1;
                        }
                    });
                });
            }
        };
    };

    app.directive("rating", rating);

    app.filter("stars", function () {
        return function (input) {
            var result = "";
            for (var i = 0; i < parseInt(input) ; i++) {
                result += "*";
            }
            return result;
        };
    });


}(angular.module("movieApp")));