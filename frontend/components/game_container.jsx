var React = require('react');
var Modal = require('react-modal');
var GameStore = require('../stores/game');
var UserStore = require('../stores/user');
var CurrentSquareStore = require('../stores/current_square');
var ApiUtil = require('../util/api_util');
var Grid = require('./grid');
var ClueLists = require('./clue_lists');
var ClueSpotlight = require('./clue_spotlight');
var GameToolbar = require('./game_toolbar');
var GameHeader = require('./game_header');


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

function _getWonStatus() {
  return GameStore.getWonStatus();
}

var GameContainer = React.createClass({
  getInitialState: function() {
    return ({ game: undefined,
              currentAcrossClue: -1,
              currentDownClue: -1,
              across: true,
              modalIsOpen: false,
              inPlay: false });
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

  _gameChanged: function() {
    var across = _getDirection();
    var won = _getWonStatus();
    var game = _

    if(won && this.state.inPlay) {
      this.setState({ across: across, modalIsOpen: true, inPlay: false });
    } else if(won) {
      this.setState({ across: across, inPlay: false });
    } else {
      this.setState({ across: across, modalIsOpen: false, inPlay: true });
    }

    if
  },

  closeModal: function() {
    this.setState({ modalIsOpen: false });
  },

  componentDidMount: function() {
    this.gameListener = GameStore.addListener(this._gameChanged);

    var puzzleId = this.props.routeParams.id;
    var currentGame = UserStore.getPreviousGameState(puzzleId);

    if(currentGame) {
      ApiUtil.fetchPuzzle(puzzleId);
      GameActions.receivePreviousGame(currentGame);
      debugger
    } else {
      debugger
      ApiUtil.createGame({puzzle_id: puzzleId});
    }

    //
    //
    // debugger
    // if(!GameStore.getGame().length > 0) {
    //   ApiUtil.fetchPuzzle(this.props.routeParams.id)
    //   GameActions.receivePreviousGame(currentGame);
    // }
  },

  componentWillUnmount: function() {
    this.gameListener.remove();
  },

  switchDirection: function() {
    this.state.across = (this.state.across ? false : true);
  },

  render: function() {
    let gameDetails = "";
    if(this.state.game.length) {
      debugger
      gameDetails = (
        <div className="game-container">
          <div className="clues">
            <GameToolbar/>
            <ClueLists className="clue-lists"
                       currentAcrossClue={this.state.currentAcrossClue}
                       currentDownClue={this.state.currentDownClue}
                       across={this.state.across}/>
            <ClueSpotlight className="clue-spotlight"
                           currentAcrossClue={this.state.currentAcrossClue}
                           currentDownClue={this.state.currentDownClue}
                           across={this.state.across}/>
          </div>
          <Grid game={this.state.game}
                updateClue={this.updateClue}
                across={this.state.across}
                switchDirection={this.switchDirection}
                currentAcrossClue={this.state.currentAcrossClue}
                currentDownClue={this.state.currentDownClue}/>
        </div>
      );
    }

    return (
      <div className="outer-container">
        <div className="play-container">
          { gameDetails }
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customModalStyle}
            contentLabel="won-modal"
          >
            <p className="close-modal" onClick={this.closeModal}>X</p>
            <h2><i className="fa fa-trophy"></i>  Congratulations!  <i className="fa fa-trophy"></i></h2>
            <p>You solved this puzzle like a champ!</p>
            <p>Way to go! </p>
          </Modal>
        </div>
      </div>
    );
  }
});

var customModalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .1)',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    zIndex: 2,
    width: '500px',
    height: '400px',
    position: 'relative',
    marginTop: 'auto',
    marginBottom: 'auto'
  }
};


module.exports = GameContainer;

