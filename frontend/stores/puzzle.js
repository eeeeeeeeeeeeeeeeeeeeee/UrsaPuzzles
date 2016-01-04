var Store = require('flux/utils').Store;
var PuzzleConstants = require('../constants/puzzle_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var _puzzles = [];

var PuzzleStore = new Store(AppDispatcher);


PuzzleStore.all = function () {
  return _puzzles.slice(0);
};

PuzzleStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PuzzleConstants.PUZZLES_RECEIVED:
      _puzzles = payload.puzzles;
      PuzzleStore.__emitChange();
      break;
  }
};

module.exports = PuzzleStore;
