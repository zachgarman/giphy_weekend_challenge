angular.module('giphyGetter')
       .service('giphy', GiphyAPIService);

function GiphyAPIService($http) {
  var randomSearch = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
  var searchAPI = 'http://api.giphy.com/v1/gifs/search?q=';
  var searchKey = '&api_key=dc6zaTOxFJmzC';

  this.randomGiphy = function() {
    return $http.get(randomSearch)
                .then(function(response) {
                  return response.data.data.image_url;
                  // main.random = response.data.data.image_url;
                });
  };

  this.searchGiphy = function (gifSearch) {
    return $http.get(searchAPI + gifSearch.split(' ').join('+') + searchKey)
                .then(function(response){
                  return response.data.data;
                  //main.searchImages = response.data.data;
                });
  };
}
