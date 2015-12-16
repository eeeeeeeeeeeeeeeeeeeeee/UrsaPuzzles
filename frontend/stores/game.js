var Store = require('flux/utils').Store;
// var CHANGE_EVENT = "change";
var PuzzleConstants = require('../constants/puzzle_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var _game = [];

var _id, _author, _difficulty, _emptyGrid, _answerGrid;

var GameStore = new Store(AppDispatcher);

// var resetPuzzles = function(puzzles){
//   _puzzles = puzzles.slice(0);
// }

// PuzzleStore.all = function () {
//   return _puzzles.slice(0);
// };


// GameStore.__onDispatch = function (payload) {
//   switch(payload.actionType) {
//     case PuzzleConstants.PUZZLES_RECEIVED:
//       _id = payload.puzzles
//
//
//
//       // resetPuzzles(payload.puzzles);
//       _puzzles = puzzles;
//       PuzzleStore.__emitChange();
//       break;
//   }
// };

module.exports = PuzzleStore;
