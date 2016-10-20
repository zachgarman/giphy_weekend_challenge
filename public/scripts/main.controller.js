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

  main.searchGiphy = function () {
    giphy.searchGiphy(main.search)
         .then(function(array) {
           main.searchImages = array;
         });
  };
  main.randomGiphy();
}
