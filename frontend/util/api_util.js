var ApiActions = require('../actions/api_actions.js');
var GameActions = require('../actions/game_actions.js');


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
};

module.exports = ApiUtil;
