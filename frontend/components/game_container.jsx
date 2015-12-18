var React = require('react');
var GameStore = require('../stores/game');
var ApiUtil = require('../util/api_util');
var Grid = require('./grid');

function _getGame() {
  return GameStore.getGame();
}

var GameContainer = React.createClass({
  getInitialState: function() {
    return ({ game: _getGame() });
  },

  // _gameChanged: function(){
  //   this.setState({ game: _getGame() });
  // },
  //
  // componentDidMount: function(){
  //   this.gameListener = GameStore.addListener(this._gameChanged);
  // },
  //
  // componentWillUnmount: function(){
  //   this.gameListener.remove();
  // },

  render: function() {
    var focus = "";
    if(document.getElementById("true")) {
      focus = document.getElementById("true").focus();
    }
    return (
        <div className="game-container">
          {focus}
          <Grid game={this.state.game}/>
        </div>
    );
  }
});

module.exports = GameContainer;
