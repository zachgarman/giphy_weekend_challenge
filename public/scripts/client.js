var app = angular.module('giphyGetter', []);

app.controller('MainController', MainController);

var API = 'http://swapi.co/api';

function MainController($http) {
  var main = this;
  console.log('MainController Loaded');

  var randomSearch = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
  var searchAPI = 'http://api.giphy.com/v1/gifs/search?q=';
  var searchKey = '&api_key=dc6zaTOxFJmzC';

  main.randomGiphy = function() {
    $http.get(randomSearch)
         .then(function(response) {
           main.random = response.data.data.image_url;
         });
  };

  main.searchImages = [];

  main.searchGiphy = function () {
    console.log(searchAPI + main.search.split(' ').join('+') + searchKey);
    $http.get(searchAPI + main.search.split(' ').join('+') + searchKey)
      .then(function(response){
        main.searchImages = response.data.data;
      });
  };
  $(function() {
    main.randomGiphy();
  });
}
