var app = angular.module('starWarsApp', []);

app.controller('MainController', MainController);

var API = 'http://swapi.co/api';

function MainController($http) {
  var main = this;
  console.log('MainController Loaded');

  main.films = [];
  main.lines = [];

  main.getFilmData = function() {
    main.lines = [];
    main.class = '';
    $http.get(main.selected)
         .then(function(response) {
           main.lines = response.data.opening_crawl.split('\n');
           main.class = 'scroll';
         });
  };

  main.searchImages = [];

  main.searchGiphy = function () {
    $http.get(searchAPI + main.search.split(' ').join('+') + searchKey)
      .then(function(response){
        main.searchImages = response.data.data;
      });
  };
  $(function() {
    main.randomGiphy();
  });
}
