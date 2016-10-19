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
           console.log('response', response.data);
           console.log(response.data.data.image_url);
           main.image = response.data.data.image_url;
           console.log(main.image);
         });
  };

  main.searchGiphy = function () {
    $http.get(searchAPI + main.search + searchKey)
      .then(function(response){
        console.log('search response', response);
        main.image = response.data.data[0].images.original.url;
        console.log('search main.image', main.image);
      });
  };


}
