(function() {

    var allJson = function() {
        return function (data) {
            return JSON.stringify(data, null, 2);
        };
    };

    var app = angular.module("atTheMovies");
    app.filter("allJson", allJson);

}());