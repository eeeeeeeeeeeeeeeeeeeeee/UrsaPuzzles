var React = require('react');
var GameStore = require('../stores/game');
var ApiUtil = require('../util/api_util');

function _getGame() {
  return GameStore.getGame();
}

var ClueLists = React.createClass({
  getInitialState: function() {
    return ({ game: _getGame() });
  },

  render: function() {

  }
});

module.exports = ClueLists;
