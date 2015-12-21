var React = require('react');
var GameStore = require('../stores/game');
var ApiUtil = require('../util/api_util');
var Grid = require('./grid');
var ClueLists = require('./clue_lists');
var ClueSpotlight = require('./clue_spotlight');

function _getGame() {
  return GameStore.getGame();
}

function _getAcrossClueIndices() {
  return GameStore.getAcrossCluesAndIndices();
}

function _getDownClueIndices() {
  return GameStore.getDownCluesAndIndices();
}

var GameContainer = React.createClass({
  getInitialState: function() {
    return ({ game: _getGame(), currentAcrossClue: -1, currentDownClue: -1, across: true });
  },

  updateClue: function(square) {
    var acrossClues = _getAcrossClueIndices();
    var downClues = _getDownClueIndices();

    for(var clue in acrossClues) {
      var indices = acrossClues[clue];
      if(indices.indexOf(square) !== -1) {
        this.setState({currentAcrossClue: clue});
        break;
      }

    }

    for(var clue in downClues) {
      var indices = downClues[clue];
      if(indices.indexOf(square) !== -1) {
        this.setState({currentDownClue: clue});
        break;
      }

    }


  },

  switchDirection: function() {
    this.state.across = (this.state.across ? false : true);
  },

  render: function() {
    return (
        <div className="game-container">
          <div className="clues">
            <ClueLists className="clue-lists" currentAcrossClue={this.state.currentAcrossClue} currentDownClue={this.state.currentDownClue} across={this.state.across}/>
            <ClueSpotlight className="clue-spotlight" currentAcrossClue={this.state.currentAcrossClue} currentDownClue={this.state.currentDownClue} across={this.state.across}/>
          </div>
          <Grid game={this.state.game} updateClue={this.updateClue} across={this.state.across} switchDirection={this.switchDirection} currentAcrossClue={this.state.currentAcrossClue} currentDownClue={this.state.currentDownClue}/>
        </div>
    );
  }
});

module.exports = GameContainer;
