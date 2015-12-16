var Store = require('flux/utils').Store;
// var CHANGE_EVENT = "change";
var PuzzleConstants = require('../constants/puzzle_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var _game = [];
var _gameParams = { id: null, author: null, difficulty: null, emptyGrid: null, answerGrid: null };

var GameStore = new Store(AppDispatcher);

// var resetPuzzles = function(puzzles){
//   _puzzles = puzzles.slice(0);
// }

// PuzzleStore.all = function () {
//   return _puzzles.slice(0);
// };

GameStore.getGame = function () {
  return _game.slice(0);
}

GameStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PuzzleConstants.GAME_RECEIVED:
      _game = [payload.game]
      GameStore.__emitChange();
      break;
  }
};

module.exports = GameStore;
