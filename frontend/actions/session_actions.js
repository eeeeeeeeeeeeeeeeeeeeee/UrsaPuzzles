var AppDispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/session_constants');

var SessionActions = {
  login: function(user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: user.username
    });
  },

  logout: function() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
  },

  receiveErrors: function(errors) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.RECEIVE_ERRORS
    });
  }

}

module.exports = SessionActions;
