var Store = require('flux/utils').Store;
var PuzzleConstants = require('../constants/puzzle_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var UserStore = new Store(AppDispatcher);

var _userData;

UserStore.getPreviousGameState = function(puzzleId) {
  for(var i = 0; i < _userData.length; i++) {
    if(_userData[i].puzzle_id === puzzleId)
      return _userData[i];
  }

  return null;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PuzzleConstants.USER_DATA_RECEIVED:
      console.log("user data received");
      _userData = payload.data;
      UserStore.__emitChange();
      break;
  }
};


module.exports = UserStore;
