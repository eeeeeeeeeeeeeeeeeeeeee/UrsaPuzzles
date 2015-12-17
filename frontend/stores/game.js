var Store = require('flux/utils').Store;
// var CHANGE_EVENT = "change";
var PuzzleConstants = require('../constants/puzzle_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var _game = [];
var _currentGrid = [];
var _gameParams = { id: null, author: null, difficulty: null, emptyGrid: null, answerGrid: null };

var GameStore = new Store(AppDispatcher);


GameStore.getGame = function () {
  return _game.slice(0);
}

GameStore.getCurrentGameState = function () {
  return _currentGrid.slice(0);
}

GameStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PuzzleConstants.GAME_RECEIVED:
      _game = [payload.game];
      _currentGrid = $.parseJSON(payload.game.current_board_state);
      GameStore.__emitChange();
      break;
    case PuzzleConstants.LETTER_ENTERED:
      var idx = payload.letter.idx;
      _currentGrid[idx] = payload.letter.letter;
      GameStore.__emitChange();
      break;
  }
};

module.exports = GameStore;
