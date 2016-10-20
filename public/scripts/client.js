var app = angular.module('giphyGetter', []);

app.controller('MainController', MainController);


function MainController($http) {
  var main = this;
  console.log('MainController Loaded');

  var randomAPI = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
  var searchAPI = 'http://api.giphy.com/v1/gifs/search?q=';
  var searchKey = '&api_key=dc6zaTOxFJmzC';

  main.randomGiphy = function() {
    $http.get(randomAPI)
         .then(function(response) {
           main.random = response.data.data.image_url;
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
