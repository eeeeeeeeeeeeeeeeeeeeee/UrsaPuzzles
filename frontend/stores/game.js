var Store = require('flux/utils').Store;
var _ = require('underscore');
// var CHANGE_EVENT = "change";
var PuzzleConstants = require('../constants/puzzle_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var _game = [];
var _currentGrid = [];
var _emptyGrid = [];
var _gameParams = { id: null, author: null, difficulty: null, emptyGrid: null, answerGrid: null };
var _solution = [];
var _clues = [];
var _across = true;
var _currentAcrossClue = 1;
var _currentDownClue = 1;
var _startTime = 0;

var GameStore = new Store(AppDispatcher);

// bad, not flux, replace with action call
// GameStore.setExisitingGame = function(game) {
//   _game = game;
//
// }


GameStore.getGame = function () {
  return _game.slice(0);
};

GameStore.getCurrentGameState = function () {
  return _currentGrid.slice(0);
};

GameStore.getClues = function () {
  return _clues.slice(0);
};

GameStore.getCurrentClues = function () {
  return {across: _currentAcrossClue, down: _currentDownClue};
};

GameStore.getSolution = function () {
  return _solution.slice(0);
};

GameStore.getDirection = function () {
  return _across;
};

GameStore.getStartTime = function () {
  return _startTime;
};

GameStore.getStartingBoard = function() {
  return _emptyGrid;
  // return $.parseJSON(_game[0].current_board_state);
};

GameStore.getDownCoords = function() {
  var values = _.values(this.getDownCluesAndIndices());
  return _.flatten(values);
}

GameStore.getAcrossCoords = function() {
  var values = _.values(this.getAcrossCluesAndIndices());
  return _.flatten(values);
}

GameStore.getAcrossCluesAndIndices = function() {
  var cluesAndIndices = {};

  for(var i = 0; i < _clues.length; i++) {
    if(!_clues[i].across) {
      continue;
    }

    var currentClueNum = _clues[i].clue_number;

    var occupiedIndices = [];
    var clueNumberIndex = findIndexOfClueNumber(currentClueNum)
    cluesAndIndices[currentClueNum] = _.range(clueNumberIndex, (clueNumberIndex + _clues[i].answer_length));
  }

  return cluesAndIndices;
};

GameStore.getDownCluesAndIndices = function() {
  var cluesAndIndices = {};

  for(var i = 0; i < _clues.length; i++) {
    if(_clues[i].across) {
      continue;
    }

    var currentClueNum = _clues[i].clue_number;

    var occupiedIndices = [];
    var clueNumberIndex = findIndexOfClueNumber(currentClueNum)
    var indexArray = [];

    while(indexArray.length < _clues[i].answer_length) {
      indexArray.push(clueNumberIndex);
      clueNumberIndex += 15;
    }

    cluesAndIndices[currentClueNum] = indexArray;
  }

  return cluesAndIndices;
};

var findIndexOfClueNumber = function(clueNumber) {
  // var origBoard = $.parseJSON(_game[0].current_board_state);
  var origBoard = _emptyGrid;

  if(origBoard.indexOf(clueNumber) !== -1) {
    return origBoard.indexOf(clueNumber);
  } else {
    return null;
  }

};

function _updateFromArrow(keyCode) {

  // switch keyCode  {
  //   case 37:
  //
  //
  // }
}

GameStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PuzzleConstants.GAME_RECEIVED:
      _game = [payload.game];
      _currentGrid = $.parseJSON(payload.game.current_board_state);
      _emptyGrid = $.parseJSON(payload.game.current_board_state);
      _solution = payload.puzzle.answer_grid;
      _clues = payload.clues;
      GameStore.__emitChange();
      break;

    case PuzzleConstants.LETTER_ENTERED:
      var idx = payload.letter.idx;
      _currentGrid[idx] = payload.letter.letter.toUpperCase();
      GameStore.__emitChange();
      break;

    case PuzzleConstants.SWITCH_DIRECTION:
      _across = payload.across;
      GameStore.__emitChange();
      break;

    case PuzzleConstants.ACROSS_CLUE:
      _currentAcrossClue = payload.clueNum;
      GameStore.__emitChange();
      break;

    case PuzzleConstants.DOWN_CLUE:
      _currentDownClue = payload.clueNum;
      GameStore.__emitChange();
      break;

    case PuzzleConstants.PREVIOUS_GAME:
      _game = [payload.game];
      _startTime = payload.game.time_elapsed;
      _currentGrid = $.parseJSON(payload.game.current_board_state);
      GameStore.__emitChange();
      break;

    case PuzzleConstants.PUZZLE_RECEIVED:
      _solution = payload.puzzle.puzzle.answer_grid;
      _clues = payload.puzzle.clues;
      _emptyGrid = payload.puzzle.puzzle.empty_grid;
      GameStore.__emitChange();
      break;

    case PuzzleConstants.ARROW_MOVE:
      _updateFromArrow(payload.keyCode);
      GameStore.__emitChange();
      break;

    case PuzzleConstants.CLEAR:
      _currentGrid = _emptyGrid;
      GameStore.__emitChange();
      break;

    case PuzzleConstants.SHOW_ALL:
      _currentGrid = _solution;
      GameStore.__emitChange();
      break;

    case PuzzleConstants.BACKSPACE:
      var currIdx = this.getAcrossCoords().indexOf(payload.idx);
      var newIdx = this.getAcrossCoords()[currIdx+1];
      _currentGrid[newIdx] = "";
      GameStore.__emitChange();
      break;

    case PuzzleConstants.BACKSPACE_UP:
      var currIdx = this.getDownCoords().indexOf(payload.idx);
      var newIdx = this.getDownCoords()[currIdx+1];
      _currentGrid[newIdx] = "";
      GameStore.__emitChange();
      break;
  }
};

module.exports = GameStore;
