var AppDispatcher = require('../dispatcher/dispatcher');
var PuzzleConstants = require('../constants/puzzle_constants');


var ApiActions = {
  receivePuzzles: function(puzzles){
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.PUZZLES_RECEIVED,
      puzzles: puzzles
    });
  }
}

module.exports = ApiActions;
