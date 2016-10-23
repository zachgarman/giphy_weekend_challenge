angular.module('giphyGetter')
       .service('favorite', FavoriteService);

function FavoriteService($http) {
  var config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
      }
  };

  this.addFavorite = function(fav) {
    $http({
      method: 'POST',
      url: '/favoriteGifs',
      data: fav
    }).success(function() {
      alert('Your item was added!\n Enjoy your Gif!');
    });
  };

  this.getFavorites = function () {
    return $http.get('/favoriteGifs')
      .then(function (response) {
        return response.data;
      });
  };

  this.deleteFav = function (id) {
    console.log('Trying to delete one');
    return $http({
      method: 'DELETE',
      url: '/favoriteGifs/' + id,
    }).success(function() {
      console.log('Sent it off to the server!');
    });
  };

}
