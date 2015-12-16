var React = require('react');
var GameStore = require('../stores/game');
var ApiUtil = require('../util/api_util');

function _getGame() {
  return GameStore.getGame();
}

var GameContainer = React.createClass({
  getInitialState: function() {
    return ({ game: _getGame() });
  },

  _gameChanged: function(){
    this.setState({ game: _getGame() });
  },

  componentDidMount: function(){
    this.gameListener = GameStore.addListener(this._gameChanged);
  },

  componentWillUnmount: function(){
    this.gameListener.remove();
  },

  render: function() {
    return <div>inside game container</div>
  }
});

module.exports = GameContainer;
