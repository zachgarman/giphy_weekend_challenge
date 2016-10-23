angular.module('giphyGetter')
       .controller('MainController', MainController);

function MainController(giphy) {
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
    console.log(main.showRandom);
    return main.showRandom;
  };

  main.addRandomFavorite = function() {
    console.log(main.addRandomFavorite);
    return main.addRandomFavorite;
  };

  main.searchGiphy = function (searchTerm) {
    giphy.searchGiphy(searchTerm)
         .then(function(gifs) {
           main.searchImages = gifs;
         });
  };
  main.randomGiphy();
}
