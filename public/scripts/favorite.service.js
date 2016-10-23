angular.module('giphyGetter')
       .service('favorite', FavoriteService);

function FavoriteService($http) {
  var config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
      }
  };

  this.addFavorite = function(fav) {
    console.log(fav);

    $http({
      method: 'POST',
      url: '/favoriteGifs',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      // What is this and why does it work?  I don't know.
      transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
      },
      data: fav
    }).success(function() {
      console.log('post worked');
    });
  };

//   $http({
//   url: 'some/api/endpoint',
//   method: 'POST',
//   data: $httpParamSerializerJQLike($scope.appForm.data), // Make sure to inject the service you choose to the controller
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
//   }
// }).success(function(response) { /* do something here */ });

  this.getFavorites = function () {
    return $http.get('/favoriteGifs')
      .then(function (response) {
        return response.data;
      });
};

}
