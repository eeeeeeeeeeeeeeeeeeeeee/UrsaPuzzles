var React = require('react');
var GameActions = require('../actions/game_actions')
var reactDOM = require('react-dom');
var GameStore = require('../stores/game');
var _ = require('underscore');


function _getAcrossCluesAndIndices() {
  return GameStore.getAcrossCluesAndIndices();
};

function _getDownCluesAndIndices() {
  return GameStore.getDownCluesAndIndices();
};

function _getGameState() {
  return GameStore.getCurrentGameState();
}

var Square = React.createClass({
  getInitialState: function() {
    var acrossCluesAndIndices = _getAcrossCluesAndIndices();
    var downCluesAndIndices = _getDownCluesAndIndices();
    return ({clueNumber: this.props.clueNumber,
             active: false, guess: "",
             acrossCluesAndIndices: acrossCluesAndIndices,
             downCluesAndIndices: downCluesAndIndices});
  },

  handleKeyPress: function(event) {
    this.setState({guess: String.fromCharCode(event.charCode).toUpperCase()});
    var letterInfo = {letter: String.fromCharCode(event.charCode),
                      i: this.props.i,
                      j: this.props.j,
                      idx: this.props.counter};
    GameActions.receiveTypedLetter(letterInfo);
  },

  handleKeyDown: function(event) {
    var key = event.which;
    var counter = this.props.counter;
    var game = _getGameState();

    if(key === 39) {
      if(this.props.across) {
        GameActions.receiveStep(this.props.counter);
      } else {
        GameActions.receiveMove(true);
      }
    } else if (key === 37) {
      if(this.props.across) {
        var coords = GameStore.getAcrossCoords();
        var idx = coords.indexOf(this.props.counter);
        GameActions.receiveStep(coords[idx-2]);
      } else {
        GameActions.receiveMove(true);
      }
    } else if (key === 40) {
      if(this.props.across) {
        GameActions.receiveMove(false);
      } else {
        GameActions.receiveStep(this.props.counter);
      }
    } else if (key === 38) {
      if(this.props.across) {
        GameActions.receiveMove(false);
      } else {
        var coords = GameStore.getDownCoords();
        var idx = coords.indexOf(this.props.counter);
        GameActions.receiveStep(coords[idx-2]);
      }
    } else if (key === 8) {
      if(this.props.across) {
        var coords = GameStore.getAcrossCoords();
        var idx = coords.indexOf(this.props.counter);
        var newIdx = coords[idx-2];

        if(game[coords[idx]] !== "" &&
            game[coords[idx]] !== "white" &&
             isNaN(parseFloat(game[coords[idx]]))) {
          newIdx = coords[idx-1];
        }

        GameActions.receiveBackspace(newIdx);
      } else {
        var coords = GameStore.getDownCoords();
        var idx = coords.indexOf(this.props.counter);
        var newIdx = coords[idx-2];

        if(game[coords[idx]] !== "" &&
            game[coords[idx]] !== "white" &&
              isNaN(parseFloat(game[coords[idx]]))) {
          newIdx = coords[idx-1];
        }

        GameActions.receiveUpBackspace(newIdx);
      }
    }
  },

  getOpenSquareIndices: function() {
    var board = GameStore.getCurrentGameState();
    var openSquares = [];

    for(var i = 0; i < board.length; i++) {
      if(board[i] !== "black") {
        openSquares.push(i);
      }
    }

    return openSquares;
  },

  componentDidMount: function() {
    if(this.props.counter === 0) {
      document.querySelector("#ut-0").focus();
    }
    this.gameListener = GameStore.addListener(this._gameChanged);
  },

  componentWillUnmount: function() {
    this.gameListener.remove();
  },

  _gameChanged: function() {
    var acrossCluesAndIndices = _getAcrossCluesAndIndices();
    var downCluesAndIndices = _getDownCluesAndIndices();
    this.setState({acrossCluesAndIndices: acrossCluesAndIndices,
                   downCluesAndIndices: downCluesAndIndices});
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({active: nextProps.active,
                   currentAcrossClue: nextProps.currentAcrossClue,
                   currentDownClue: nextProps.currentDownClue});
  },

  handleDoubleClick: function() {
    var across = (this.props.across === true ? false : true);
    GameActions.receiveMove(across);
  },

  handleClick: function() {
    var squareString = "#ut-" + this.props.counter;
    next = this.props.counter;

    if(this.props.across) {
      next -= 1;
    } else {
      next -= 15;
    }

    GameActions.receiveCurrentSquare(next);
  },

  render: function() {
    var wordIndices = [];
    if(!_.isEmpty(this.state.acrossCluesAndIndices) && this.props.across) {
      var clueNum = (this.props.currentAcrossClue === -1 ? 1 : this.props.currentAcrossClue);
      wordIndices = this.state.acrossCluesAndIndices[clueNum];
    } else if (!_.isEmpty(this.state.downCluesAndIndices) && this.props.currentAcrossClue !== -1){
      wordIndices = this.state.downCluesAndIndices[this.props.currentDownClue];
    }

    var square = <div className="grid-square black"></div> ;

    if(this.state.clueNumber !== null) {
      var className = "grid-square";
      var inputClass = "user-type";


      if(this.state.active) {
        className = "grid-square highlight";
      } else if(wordIndices.indexOf(this.props.counter) !== -1) {
        className = "grid-square neighbor";
      }

      if(this.props.wrong) {
        inputClass += " wrong"
      }

      square = <div className={className}
                    onDoubleClick={this.handleDoubleClick}
                    onClick={this.handleClick}>
                 <div className="clue-number">{this.state.clueNumber}</div>
                 <input className={inputClass} id={"ut-" + this.props.counter}
                        type="text" styles="text-transform:uppercase"
                        onKeyDown={this.handleKeyDown}
                        onKeyPress={this.handleKeyPress}
                        value={this.props.value}>
                 </input>
               </div>
    }

    return (
      square
    );
  }

});

module.exports = Square;
