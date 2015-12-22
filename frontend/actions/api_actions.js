var AppDispatcher = require('../dispatcher/dispatcher');
var PuzzleConstants = require('../constants/puzzle_constants');


var ApiActions = {
  receivePuzzles: function(puzzles) {
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.PUZZLES_RECEIVED,
      puzzles: puzzles
    });
  },

  receiveGame: function(game) {
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.GAME_RECEIVED,
      game: game.game,
      puzzle: game.puzzle,
      clues: game.clues
    });
  },

  receiveUserData: function(data) {
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.USER_DATA_RECEIVED,
      data: data
    });
  }

}

module.exports = ApiActions;
