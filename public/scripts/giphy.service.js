angular.module('giphyGetter')
       .service('giphy', GiphyAPIService);

function GiphyAPIService($http) {
  var randomSearch = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
  var api = 'http://api.giphy.com/v1/gifs';
  var searchKey = 'dc6zaTOxFJmzC';

  this.randomGiphy = function() {
    return $http.get(randomSearch)
                .then(function(response) {
                  return response.data.data;
                  // main.random = response.data.data.image_url;
                });
  };

  this.searchGiphy = function (query) {
    return $http.get(api + '/search', {
      params: {
        api_key: searchKey,
        q: query
      }
    }).then(function(response) {
      return response.data.data;
    });
  };
}
