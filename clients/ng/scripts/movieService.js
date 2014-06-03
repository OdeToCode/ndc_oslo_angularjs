(function () {

    var module = angular.module("atTheMovies.data", []);
    module.config(function ($provide) {
        $provide.provider("movieService", function () {

            var url;

            this.setRootUrl = function (newUrl) {
                url = newUrl;
            };

            this.$get = function ($http, $q, $timeout) {

                var movies = null;

                return {

                    getAll: function () {

                        if (movies) {
                            return $q.when(movies);
                        } else {

                            return $http.get(url)
                                .then(function (response) {
                                    movies = response.data;
                                    return movies;
                                });
                        }
                    },
                    save: function (movie) {
                        return $http.put(url, movie);
                    }
                };
            };

        });
    });
}());



//(function () {
//    var movieService = function ($http, $q, $timeout) {
//        var movies = null;
//        return {
//            getAll: function () {
//                if (movies) {
//                    return $q.when(movies);
//                } else {
//                    return $http.get("/api/movies")
//                        .then(function(response) {
//                            movies = response.data;
//                            return movies;
//                        });
//                }
//            },
//            save: function (movie) {
//                return $http.put("/api/movies", movie);
//            }
//        };
//    };
//    var module = angular.module("atTheMovies");
//    module.factory("movieService", movieService);
//}());


//getMovie: function (id) {
//    var deferred = $q.defer();
//    $timeout(function() {
//        if (id < 0) {
//            deferred.reject("Could not fetch the movie");
//        } else {
//            deferred.resolve({ title: "This movie came from a promise" });
//        }
//    }, 2000);
//    return deferred.promise;
//},