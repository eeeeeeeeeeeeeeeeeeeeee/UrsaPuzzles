var React = require('react');
var GameStore = require('../stores/game');
var UserStore = require('../stores/user');
var CurrentSquareStore = require('../stores/current_square');
var ApiUtil = require('../util/api_util');
var Grid = require('./grid');
var ClueLists = require('./clue_lists');
var ClueSpotlight = require('./clue_spotlight');
var GameToolbar = require('./game_toolbar');

function _getGame() {
  return GameStore.getGame();
}

function _getAcrossClueIndices() {
  return GameStore.getAcrossCluesAndIndices();
}

function _getDownClueIndices() {
  return GameStore.getDownCluesAndIndices();
}

function _getDirection() {
  return GameStore.getDirection();
}

function _getCurrentClues() {
  return GameStore.getCurrentClues();
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

  _gameChanged: function(){
    var across = _getDirection();
    var clues = _getCurrentClues();
    var currentAcrossClue = clues["across"];
    var currentDownClue = clues["down"];
    this.setState({ across: across });
  },

  _userChanged: function() {
    // do I need to keep???
  },

  componentDidMount: function() {
    this.gameListener = GameStore.addListener(this._gameChanged);
  },

  componentWillUnmount: function() {
    this.gameListener.remove();
  },

  switchDirection: function() {
    this.state.across = (this.state.across ? false : true);
  },

  render: function() {
    return (
      <div className="container">
        <div className="game-container">
          <div className="clues">
            <GameToolbar/>
            <ClueLists className="clue-lists" currentAcrossClue={this.state.currentAcrossClue} currentDownClue={this.state.currentDownClue} across={this.state.across}/>
            <ClueSpotlight className="clue-spotlight" currentAcrossClue={this.state.currentAcrossClue} currentDownClue={this.state.currentDownClue} across={this.state.across}/>
          </div>
          <Grid game={this.state.game} updateClue={this.updateClue} across={this.state.across} switchDirection={this.switchDirection} currentAcrossClue={this.state.currentAcrossClue} currentDownClue={this.state.currentDownClue}/>
        </div>
      </div>
    );
  }
});

module.exports = GameContainer;
