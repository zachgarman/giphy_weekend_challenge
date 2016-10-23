angular.module('giphyGetter')
       .service('favorite', FavoriteService);

function FavoriteService($http) {
  // var config = {
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
  //     }
  // };
  // this.addRandomFavorite = function(fav) {
  //   console.log(fav);
  //    $http.post({
  //      method: 'POST',
  //      url: '/favoriteGifs',
  //      headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'},
  //      data: fav
  //    )}.success(function(response) {
  //                 console.log(response);
  //                 return;
  //    });
  // };

  this.getFavorites = function () {
    return $http.get('/favoriteGifs')
      .then(function (response) {
        return response.data;
      });
};

}
