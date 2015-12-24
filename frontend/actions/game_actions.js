var AppDispatcher = require('../dispatcher/dispatcher');
var PuzzleConstants = require('../constants/puzzle_constants');

var GameActions = {

  receiveTypedLetter: function(letter) {
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.LETTER_ENTERED,
      letter: letter
    })
  },

  receiveArrowMove: function(keyCode) {
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.ARROW_MOVE,
      keyCode: keyCode
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
  },

  receivePreviousGame: function(game) {
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.PREVIOUS_GAME,
      game: game
    })
  },

  receivePuzzle: function(puzzle) {
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.PUZZLE_RECEIVED,
      puzzle: puzzle
    })
  },

  receiveCurrentSquare: function(idx) {
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.NEW_CURRENT_SQUARE,
      idx: idx
    })
  },

  receiveClearRequest: function() {
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.CLEAR
    })
  },

  receiveSolutionRequest: function() {
    AppDispatcher.dispatch({
      actionType: PuzzleConstants.SHOW_ALL
    })
  }

}

module.exports = GameActions;
