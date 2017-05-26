var Store = require('flux/utils').Store;
var _ = require('underscore');
var PuzzleConstants = require('../constants/puzzle_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var _game = [];
var _currentGrid = [];
var _emptyGrid = [];
var _gameParams = { id: null,
                    author: null,
                    difficulty: null,
                    emptyGrid: null,
                    answerGrid: null };
var _solution = [];
var _clues = [];
var _across = true;
var _currentAcrossClue = 1;
var _currentDownClue = 1;
var _startTime = 0;
var _check = false;
var _won = false;
var _author = "";
var _title = "";
var _difficulty = "";


var GameStore = new Store(AppDispatcher);

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

GameStore.getWonStatus = function () {
  return _won === true;
};

GameStore.getStartingBoard = function() {
  return _emptyGrid;
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
  var clueNumberIndex1 = findIndexOfClueNumber(1);
  var clueNumberIndex24 = findIndexOfClueNumber(24);

  for(var i = 0; i < _clues.length; i++) {
    if(!_clues[i].across) {
      continue;
    }

    var currentClueNum = _clues[i].clue_number;

    var occupiedIndices = [];
    var clueNumberIndex = findIndexOfClueNumber(currentClueNum);
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
    var clueNumberIndex = findIndexOfClueNumber(currentClueNum);
    var indexArray = [];

    while(indexArray.length < _clues[i].answer_length) {
      indexArray.push(clueNumberIndex);
      clueNumberIndex += 15;
    }

    cluesAndIndices[currentClueNum] = indexArray;
  }

  return cluesAndIndices;
};

GameStore.getCheckStatus = function() {
  return _check === true;
}

GameStore.getGameInfo = function() {
  var difficulty = _difficulty.charAt(0).toUpperCase() + _difficulty.slice(1);
  return {title: _title, author: _author, difficulty: difficulty}
}

function findIndexOfClueNumber(clueNumber) {
  var origBoard = _emptyGrid;

  if(origBoard.indexOf(clueNumber) !== -1) {
    return origBoard.indexOf(parseInt(clueNumber));
  } else {
    return null;
  }
};


GameStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PuzzleConstants.GAME_RECEIVED:
      _game = [payload.game];
      _currentGrid = $.parseJSON(payload.game.current_board_state);
      _emptyGrid = $.parseJSON(payload.game.current_board_state);
      _solution = payload.puzzle.answer_grid;
      _clues = payload.clues;
      _author = payload.puzzle.author;
      _title = payload.puzzle.title;
      _difficulty = payload.puzzle.difficulty;
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
      _won = payload.game.won;
      GameStore.__emitChange();
      break;

    case PuzzleConstants.PUZZLE_RECEIVED:
      _solution = payload.puzzle.puzzle.answer_grid;
      _clues = payload.puzzle.clues;
      _emptyGrid = payload.puzzle.puzzle.empty_grid;
      _author = payload.puzzle.puzzle.author;
      _title = payload.puzzle.puzzle.title;
      _difficulty = payload.puzzle.puzzle.difficulty;
      GameStore.__emitChange();
      break;

    case PuzzleConstants.ARROW_MOVE:
      _updateFromArrow(payload.keyCode);
      GameStore.__emitChange();
      break;

    case PuzzleConstants.CLEAR:
      _currentGrid = _emptyGrid.slice(0);
      GameStore.__emitChange();
      break;

    case PuzzleConstants.SHOW_ALL:
      _currentGrid = _solution.slice(0);
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

    case PuzzleConstants.CHECK_PUZZLE:
      _check = payload.check;
      GameStore.__emitChange();
      break;

    case PuzzleConstants.UPDATE_WON:
      _won = payload.won;
      GameStore.__emitChange();
      break;

  }
};

module.exports = GameStore;
