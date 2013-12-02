var MovieListController = function($scope) {

    $scope.movies =
    [
        { title: "Star Wars", length: 90 },
        { title: "Star Trek", length: 120 },
        { title: "Star Gates", length: 90 }
    ];


    $scope.increment = function(movie) {
        movie.length += 1;
    };

    $scope.decrement = function(index) {
        $scope.movies[index].length -= 1;
    };
};