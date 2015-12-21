var Store = require('flux/utils').Store;
var PuzzleConstants = require('../constants/puzzle_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var UserStore = new Store(AppDispatcher);

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PuzzleConstants.PUZZLES_RECEIVED:
      // resetPuzzles(payload.puzzles);
      _puzzles = payload.puzzles;
      UserStore.__emitChange();
      break;
  }
};


module.exports = UserStore;
