var AppDispatcher = require('../dispatcher/dispatcher');
var PuzzleConstants = require('../constants/puzzle_constants');


var ApiActions = {
  receivePuzzles: function(puzzles){
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.PUZZLES_RECEIVED,
      puzzles: puzzles
    });
  },

  receiveGame: function(game){
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.GAME_RECEIVED,
      game: game
    });
  }
}

module.exports = ApiActions;
