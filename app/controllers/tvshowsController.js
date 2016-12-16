app.controller('tvshowsController', function($scope,$http) {
$scope.tvList=[];   

    $scope.getTVList = function() {

      var $responsePromise;
      var $url=$apiBase+'tv/top_rated'

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
          $scope.tvList=response.data.results;


        }, function errorCallback() {
          console.error( $error_noData );
        }
      );
    }

    // Calling the function
    $scope.getTVList();

     $scope.searchText = '';
    $scope.searchTV = function(text) {
        valtosend = $scope.searchText;
        if ($scope.searchText.length>2){
        return $http.get('//api.themoviedb.org/3/search/' + 'tv', {
                    params: {
                        api_key: $apiKey,
                        query: valtosend
                    }
                }).then(function(response){
                      $scope.tvList=response.data.results;
                      //return limitToFilter(response.data.results, 10);

        });

                }
        else $scope.getTVList();
        };

});

app.controller('tvController',function($scope,$http,$stateParams){

    var $responsePromise;
    var $url=$apiBase+'tv/'+ $stateParams.id;

    $scope.tvData = [];

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

        // Add tv data to scope
        $scope.tvData = response.data;
            }, function errorCallback() {
        console.error( $error_noData );
      }
    );
  
});