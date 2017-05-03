var ApiActions = require('../actions/api_actions');
var GameActions = require('../actions/game_actions');
var SessionActions = require('../actions/session_actions');


var ApiUtil = {
  fetchPuzzles: function() {
    $.ajax({
      url: 'api/puzzles',
      success: function(puzzles) {
        ApiActions.receivePuzzles(puzzles);
      }
    });
  },

  createGame: function(info) {
    $.ajax({
      type: 'POST',
      url: 'api/games',
      data: { game: info },
      success: function(game) {
        ApiActions.receiveGame(game);
      }
    });
  },

  fetchUserData: function() {
    $.ajax({
      url: 'api/users',
      success: function(data) {
        ApiActions.receiveUserData(data);
      }
    });
  },

  fetchPuzzle: function(puzzleId) {
    $.ajax({
      url: 'api/puzzles/'+puzzleId,
      success: function(puzzle) {
        GameActions.receivePuzzle(puzzle);
      }
    });
  },

  saveGame: function(gameId, game) {
    $.ajax({
      type: 'PATCH',
      url: '/games/'+gameId,
      data: { game: game },
      success: function() {
      }
    });
  },

  signUp: function(userData) {
    $.ajax({
      type: 'POST',
      url: '/users',
      data: { user: userData },
      success: function(data) {
        SessionActions.login(data);
      }
    });
  },

  signIn: function(userData) {
    $.ajax({
      type: 'POST',
      url: '/session',
      data: { user: userData },
      success: function(data) {
        SessionActions.login(data);
      }
    });
  }
};

module.exports = ApiUtil;
