var AppDispatcher = require('../dispatcher/dispatcher');
var PuzzleConstants = require('../constants/puzzle_constants');

var GameActions = {

  receiveTypedLetter: function(letter) {
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.LETTER_ENTERED,
      letter: letter
    })
  },

  receiveMove: function(across) {
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.SWITCH_DIRECTION,
      across: across
    })
  },

  receiveAcrossClue: function(clueNum) {
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.ACROSS_CLUE,
      clueNum: clueNum
    })
  },

  receiveDownClue: function(clueNum) {
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.DOWN_CLUE,
      clueNum: clueNum
    })
  }
}

module.exports = GameActions;
