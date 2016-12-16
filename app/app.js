var app = angular.module('movieApp', ['ui.router','ui.bootstrap','ngAnimate']);
    var $apiBase  = 'https://api.themoviedb.org/3/';
    var $apiKey = '13c1c151f9ed9aeb95921a6b0c355ebf';

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
        })
        
        .state('home.movies', {
        url: '/movies',
        templateUrl: 'views/movies.html',
        controller:'moviesController',
    	})

    	.state('home.tvshows', {
        url: '/tvshows',
        templateUrl: 'views/tvshows.html',
        controller:'tvshowsController',
    	})

        .state('movieDetails', {
            url: '/movieDetails/:id',
            templateUrl: 'views/movieDetails.html',
            controller:'movieController',
        })

        .state('tvDetails', {
            url: '/tvDetails/:id',
            templateUrl: 'views/tvDetails.html',
            controller:'tvController',
        })
});

app.directive('backButton', function(){
    return {
      restrict: 'A',

      link: function(scope, element, attrs) {
        element.bind('click', goBack);

        function goBack() {
          history.back();
          scope.$apply();
        }
      }
    }
});