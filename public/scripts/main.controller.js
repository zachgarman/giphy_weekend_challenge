angular.module('giphyGetter')
       .controller('MainController', MainController);

function MainController(giphy, favorite) {
  var main = this;

  console.log('MainController Loaded');
  // This function sends a request to the Giphy API and receives a random gifs
  // The image is displayed in /random.html
  main.randomGiphy = function() {
    giphy.randomGiphy()
         .then(function(url) {
           main.random = url.image_url;
         });
  };
  // Initialized as false so that the Add to Favorites button shows on page load.
  main.showRandom = false;
  // When the button is clicked, Add to Favorites button hides and the form to submit a
  // favorite appears.  The form is emptied on each click.
  main.showRandomForm = function() {
    //
    main.showRandom = !main.showRandom
    main.randomComment = '';
    main.randomCategory = '';
    // return main.showRandom so that ng-hide and ng-show update correctly.
    return main.showRandom;
  };
  // Takes the data entered in the form and sends it in a post request to the server.
  // Afterwards, the view resets to the initial version.  Need to add confirmation
  // that something was added and/or update the Add To Favorites button.
  main.addRandomFavorite = function() {
    var data = {
      url: main.random,
      comment: main.randomComment,
      category: main.randomCategory
    };
    favorite.addFavorite(data);
    // resets form so it is empty
    main.showRandomForm();
    // updates favorites page and the favorites number
    main.getFavorites();
  };
  // initialize a blank array to store search images in
  main.searchImages = [];
  // If there are items in the array, showGreeting is true, and ng-show is true
  // and ng-hide is true.  This changes the initial greeting in /main.html search page.
  main.showGreeting = function(){
    return main.searchImages.length;
  };
  // This search takes the search input and returns a set of images.
  main.searchGiphy = function (searchTerm) {
    // Blank object so I can track the urls.  Is there a better way?
    main.gifTracker = {};
    giphy.searchGiphy(searchTerm)
         .then(function(gifs) {
           main.searchImages = gifs;
           for (i = 0; i < gifs.length; i++) {
             // Made an object of urls with a key = to $index.  Only way
             // I could figure to track the url.
             main.gifTracker[i] = gifs[i].images.original.url;
           }
         });
    main.search = '';
  };
  // Function to add favorite and reset the forms.  Need to add a confirmation
  // and/or update the Add to Favorites form;
  main.addFavorite = function($index) {
    // gets unique url for each gif.
    var url = main.gifTracker[$index];

    var data = {
      
      url: url,
      comment: main.comment,
      category: main.category
    };
    favorite.addFavorite(data);
    main.resetIndex();
    main.getFavorites();
  };

  main.showForm = function() {
    return main.show;
  };
  // Keeps track of which gif/form is being worked on.  Clears the form
  // when a new form is opened.
  main.setIndex = function ($index) {
    main.comment = '';
    main.category = '';
    main.show = $index;
  };
  // Resets main.show so that no forms show up.  Also clears the form.
  main.resetIndex = function () {
    main.comment = '';
    main.category = '';
    main.show = -1;
  };
  // Keeps track of which gif/form in the favorites is being worked on.
  main.setFavIndex = function ($index) {
    main.updateFav = $index;
  };
  // Resets main.updateFav so that no forms show up.
  main.resetFavIndex = function () {
    main.updateFav = -1;
  };
  // The get function that pulls in all favorites from the DB and also updates
  // the total number of favorites displayed in the search bar.
  main.getFavorites = function() {
    favorite.getFavorites().then(function(response){
      main.favoritedGifs = response;
      main.totalFavorites = response.length;
    });
  };

  main.updateFaves = function() {
    console.log('your updates did not take effect');
    //nrun Put request
    main.resetFavIndex();
  };

  main.deleteFav = function() {
    console.log('In Controller, your delete did not happen');
    favorite.deleteFav(id);
    // run delete request
    main.resetFavIndex();
  };


  // run getFavorites to update the total # of favorites
  main.getFavorites()
}
