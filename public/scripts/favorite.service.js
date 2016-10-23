angular.module('giphyGetter')
       .service('favorite', FavoriteService);

function FavoriteService($http) {
  this.addRandomFavorite = function(fav) {
    console.log(fav);
     $http.post('/favoriteGifs', data)
                .then(function(response) {
                  console.log(response);
                  return;
                });
  };

}
