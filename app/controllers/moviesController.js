app.controller('moviesController', function($scope,$http,limitToFilter) {
$scope.moviesList=[];

    $scope.getMoviesList = function() {

      var $responsePromise;
      var $url=$apiBase+'movie/top_rated';

      // Get data from API
      $responsePromise = $http({
        method: 'GET',
        url: $url,
        params: {
          api_key: $apiKey,
        }
       });

      // Process requestss
      $responsePromise.then(
        function successCallback(response) {

          // Append new movies to the list
          $scope.moviesList=response.data.results;

        }, function errorCallback() {
          console.error( $error_noData );
        }
      );
    }

    // Calling the function
    $scope.getMoviesList();

    $scope.searchText = '';
    $scope.searchMovie = function(text) {
        valtosend = $scope.searchText;
        if ($scope.searchText.length>=3){
        return $http.get('//api.themoviedb.org/3/search/' + 'movie', {
                    params: {
                        api_key: $apiKey,
                        query: valtosend
                    }
                }).then(function(response){
                      $scope.moviesList=response.data.results;
                      //return limitToFilter(response.data.results, 20);
                      //return response.data.results;

        });

                }
        else $scope.getMoviesList();
        };


});

app.controller('movieController',function($scope,$http,$stateParams){

    var $responsePromise;
    var $url=$apiBase+'movie/'+ $stateParams.id;

    $scope.movieData = [];

    // Get data from API
    $responsePromise = $http({
      method: 'GET',
      url: $url,
      params: {
        api_key: $apiKey
      }
     });

    // Process requests
    $responsePromise.then(
      function successCallback(response) {

        // Add movie data to scope
        $scope.movieData = response.data;
            }, function errorCallback() {
        console.error( $error_noData );
      }
    );
  
});