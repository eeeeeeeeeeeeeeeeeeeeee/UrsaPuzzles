var Store = require('flux/utils').Store;
var _ = require('underscore');
// var CHANGE_EVENT = "change";
var PuzzleConstants = require('../constants/puzzle_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var _game = [];
var _currentGrid = [];
var _gameParams = { id: null, author: null, difficulty: null, emptyGrid: null, answerGrid: null };
var _solution = [];
var _clues = [];

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

GameStore.getSolution = function () {
  return _solution.slice(0);
};

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
  var origBoard = $.parseJSON(_game[0].current_board_state);

  if(origBoard.indexOf(clueNumber) !== -1) {
    return origBoard.indexOf(clueNumber);
  } else {
    return nil;
  }

};

GameStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PuzzleConstants.GAME_RECEIVED:
      _game = [payload.game];
      _currentGrid = $.parseJSON(payload.game.current_board_state);
      _solution = payload.puzzle.answer_grid;
      _clues = payload.clues;
      GameStore.__emitChange();
      break;

    case PuzzleConstants.LETTER_ENTERED:
      var idx = payload.letter.idx;
      _currentGrid[idx] = payload.letter.letter.toUpperCase();
      GameStore.__emitChange();
      break;
  }
};

module.exports = GameStore;
