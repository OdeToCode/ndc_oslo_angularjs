(function(app) {

    var checkmarkFilter = function() {
        return function(input) {
            return input ? "\u2713" : "\u2718";
        };
    };

    app.filter("checkmark", checkmarkFilter);

}(angular.module("movieApp")));