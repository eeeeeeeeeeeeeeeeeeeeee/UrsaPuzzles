var Store = require('flux/utils').Store;
var PuzzleConstants = require('../constants/puzzle_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var _currentSquare;
var _currentWord;

var CurrentSquareStore = new Store(AppDispatcher);

CurrentSquareStore.getCurrentSquare = function () {
  return _currentSquare;
};

CurrentSquareStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PuzzleConstants.LETTER_ENTERED:
      _currentSquare = payload.letter.idx;
      CurrentSquareStore.__emitChange();
      break;
  }
};

module.exports = CurrentSquareStore;
