angular.module('giphyGetter')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/random', {
           templateUrl: 'views/random.html'
         }).when('/favorites', {
           templateUrl: 'views/favorites.html'
         }).when('/main', {
           templateUrl: 'views/main.html'
         }).otherwise({
           redirectTo: "/main"
         });

         $locationProvider.html5Mode(true);
       });
