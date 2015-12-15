var Store = require('flux/utils').Store;
// var CHANGE_EVENT = "change";
var PuzzleConstants = require('../constants/puzzle_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var _puzzle = [];

var PuzzleStore = new Store(AppDispatcher);

var resetPuzzles = function(benches){
  _benches = benches.slice(0);
}

BenchStore.all = function () {
  return _benches.slice(0);
};

module.exports = PuzzleStore;
