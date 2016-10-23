angular.module('giphyGetter')
       .controller('MainController', MainController);

function MainController(giphy, favorite) {
  var main = this;

  console.log('MainController Loaded');

  main.randomGiphy = function() {
    giphy.randomGiphy()
         .then(function(url) {
           main.random = url.image_url;
         });
  };

  main.searchImages = [];

  main.showGreeting = function(){
    return main.searchImages.length;
  };

  main.showRandom = false;
  main.showRandomForm = function() {
    main.showRandom = !main.showRandom
    main.randomComment = '';
    main.randomCategory = '';
    return main.showRandom;
  };

  main.setIndex = function ($index) {
    main.show = $index;
  };

  main.setFavIndex = function ($index) {
    main.updateFav = $index;
  }

  main.resetIndex = function () {
    main.show = -1;
  }

  main.resetFavIndex = function () {
    main.updateFav = -1;
  }
  main.showForm = function() {
    return main.show;
  };

  main.addRandomFavorite = function() {
    var data = $.param({
      url: main.random,
      comment: main.randomComment,
      category: main.randomCategory
    });
    favorite.addRandomFavorite(data);
    main.showRandomForm();
  };

  main.searchGiphy = function (searchTerm) {
    giphy.searchGiphy(searchTerm)
         .then(function(gifs) {
           main.searchImages = gifs;
         });
    main.search = '';
  };

  main.getFavorites = function() {
    favorite.getFavorites().then(function(response){
      main.favoritedGifs = response;
    });
  };

  main.updateFaves = function() {
    console.log('your updates did not take effect');
    //nrun Put request
    main.resetFavIndex();
  };

  main.deleteFav = function() {
    console.log('your delete did not happen');
    // run delete request
    main.resetFavIndex();
  };
}
