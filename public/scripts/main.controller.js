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
    return main.showRandom;
  };

  main.setIndex = function ($index) {
    main.show = $index;
  };

  main.resetIndex = function () {
    main.show = -1;
  }

  main.showForm = function() {
    return main.show;
  };

  main.addRandomFavorite = function() {
    var data = {
      url: main.random,
      comment: main.randomComment,
      category: main.randomCategory
    };
    favorite.addRandomFavorite(data);
    main.showRandomForm();
  };

  main.searchGiphy = function (searchTerm) {
    giphy.searchGiphy(searchTerm)
         .then(function(gifs) {
           main.searchImages = gifs;
         });
  };
}
