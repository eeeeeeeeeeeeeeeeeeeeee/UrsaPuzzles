var React = require('react');
var GameStore = require('../stores/game');
var ApiUtil = require('../util/api_util');
var Grid = require('./grid');
var ClueLists = require('./clue_lists');

function _getGame() {
  return GameStore.getGame();
}

var GameContainer = React.createClass({
  getInitialState: function() {
    return ({ game: _getGame() });
  },

  render: function() {

    return (
        <div className="game-container">
          <ClueLists className="clue-lists"/>
          <Grid game={this.state.game}/>
        </div>
    );
  }
});

module.exports = GameContainer;
