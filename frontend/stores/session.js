var Store = require('flux/utils').Store;
var SessionConstants = require('../constants/session_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var SessionStore = new Store(AppDispatcher);
var _currentUser;
var _authErrors = [];

SessionStore.hasCurrentUser = function() {
  return !!_currentUser;
};

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _currentUser = payload.user;
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _currentUser = null;
      SessionStore.__emitChange();
      break;
    case SessionConstants.RECEIVE_ERRORS:
      _authErrors = payload.data;
      SessionStore.__emitChange();
      break;
  }
};


module.exports = SessionStore;
