angular.module('giphyGetter')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/random', {
           templateUrl: 'views/random.html'
         }).when('/favorites', {
           templateUrl: 'views/favorites.html'
         }).when('/', {
           templateUrl: 'views/random.html'
         });

         $locationProvider.html5Mode(true);
       });
