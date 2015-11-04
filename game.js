
var Menu = Backbone.View.extend({
  tagName: 'section', // we want our container element to be a section (this.$el)
  className: 'game_view', // we want our container elefment to have a class post
  template: _.template($('#loadingScreen').html()), // create a template from our html source

var AppRouter = Backbone.Router.extend({

    routes: {
      "menu": "menu",
      "game": "game",
      "leaderboard": "leaderboard",
      "settings": "settings"
      },
    menu: function() {
    var menuScreen = $('#startMenu');
    $('body').append(menuScreen)
          });
        },

}),
