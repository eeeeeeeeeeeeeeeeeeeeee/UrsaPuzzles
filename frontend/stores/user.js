var Store = require('flux/utils').Store;
var PuzzleConstants = require('../constants/puzzle_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var UserStore = new Store(AppDispatcher);

var _userData;

UserStore.getUserId = function() {
  return _userData[0].user_id;
};

UserStore.getPreviousGameState = function(puzzleId) {
  for(var i = 0; i < _userData.length; i++) {
    if(_userData[i].puzzle_id === puzzleId)
      return _userData[i];
  }

  return null;
};

UserStore.getInProgessPuzzleIds = function() {
  if(typeof _userData === "undefined") {
    return [];
  }

  var puzzleIDs = [];

  for(var i = 0; i < _userData.length; i++) {
    puzzleIDs.push(_userData[i].puzzle_id);
  }

  return puzzleIDs.sort();
}

UserStore.getWonPuzzleIds = function() {
  if(typeof _userData === "undefined") {
    return [];
  }

  var puzzleIDs = [];

  for(var i = 0; i < _userData.length; i++) {
    if(_userData[i].won){
      puzzleIDs.push(_userData[i].puzzle_id);
    }
  }

  return puzzleIDs.sort();
}

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PuzzleConstants.USER_DATA_RECEIVED:
      _userData = payload.data;
      UserStore.__emitChange();
      break;
  }
};


module.exports = UserStore;
