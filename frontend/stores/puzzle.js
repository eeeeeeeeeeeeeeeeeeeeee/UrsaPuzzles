var Store = require('flux/utils').Store;
// var CHANGE_EVENT = "change";
var PuzzleConstants = require('../constants/puzzle_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var _puzzles = [];

var PuzzleStore = new Store(AppDispatcher);

// var resetPuzzles = function(puzzles){
//   _puzzles = puzzles.slice(0);
// }

PuzzleStore.all = function () {
  return _puzzles.slice(0);
};

PuzzleStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PuzzleConstants.PUZZLES_RECEIVED:
      // resetPuzzles(payload.puzzles);
      _puzzles = payload.puzzles;
      PuzzleStore.__emitChange();
      break;
  }
};

module.exports = PuzzleStore;
