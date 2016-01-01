var React = require('react');
var Square = require('./square');
var GameStore = require('../stores/game');
var CurrentSquareStore = require('../stores/current_square');
var _ = require('underscore');
var GameActions = require('../actions/game_actions');


function _getGame() {
  return GameStore.getGame();
}

function _getCurrentGameState() {
  return GameStore.getCurrentGameState();
}

function _getCurrentSquare() {
  return CurrentSquareStore.getCurrentSquare();
}

function _getDirection() {
  return GameStore.getDirection();
}

function _getCheckStatus() {
  return GameStore.getCheckStatus();
}

function _getWonStatus() {
  return GameStore.getWonStatus();
}

var Grid = React.createClass({
  getInitialState: function() {
    var game = _getGame()[0];
    var currentGameState = _getCurrentGameState();
    var solution = GameStore.getSolution();
    return ({ game: game, currentGameState: currentGameState,
              currentSquare: null, across: true, currentDownClue: 1, currentAcrossClue: 1, check: false, incorrectIndices: [], solution: solution});
  },

  _gameChanged: function(){
    var game = _getGame()[0];
    var currentGameState = _getCurrentGameState();
    var across = _getDirection();
    var check = _getCheckStatus();
    var won = _getWonStatus();
    var solution = GameStore.getSolution();

    this.setState({ game: game, currentGameState: currentGameState, across: across, check: check, solution: solution }, function() {
      if(currentGameState.join("") === GameStore.getSolution().join("")) {
        $('#myModal').modal('show');
        if(!won) {
          GameActions.receiveWonStatus(true);
        }
        debugger

        // $("button.close").on("click", function(){
        //   console.log("modal was closed");
        // });
      }
    }.bind(this));

  },

  _currentSquareChanged: function() {
    var currentSquare = _getCurrentSquare();

    this.setState({nextSquare: this.findNextSqaure(currentSquare)}, function() {
      this._updateFocus();
      this.props.updateClue(this.state.nextSquare);
    }.bind(this));
  },

  _updateFocus: function() {

    var id = 'ut-' + this.state.nextSquare;
    var input = document.getElementById(id);
    input.focus();
  },

  componentDidMount: function() {
    this.gameListener = GameStore.addListener(this._gameChanged);
    this.currentSquareListener = CurrentSquareStore.addListener(this._currentSquareChanged);
  },

  componentWillUnmount: function() {
    this.gameListener.remove();
    this.currentSquareListener.remove();
  },

  componentWillUpdate: function(nextProps, nextState) {
    if(this.state.check === false && nextState.check) {
      this.findIncorrectSquares();
    }
  },

  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.check && prevState.check === false) {
      GameActions.receiveCheckRequest(false);
    }
  },

  getOpenSquareIndices: function() {
    var board = this.state.currentGameState;
    var openSquares = [];

    for(var i = 0; i < board.length; i++) {
      // if(board[i] === "white" || typeof board[i] === "number" || parseInt(board[i])) {
      if(board[i] !== "black") {
        openSquares.push(i);
      }
    }

    return openSquares;
  },

  findNextSqaure: function(currentSquare) {
    var across = _getDirection();
    var idx = (typeof currentSquare === "undefined" ? 1 : currentSquare);
    var game = this.getOpenSquareIndices();
    var currentIndex = game.indexOf(idx);

    var downClues = GameStore.getDownCluesAndIndices();
    var downClueNumber = this._findClueNumFromIndex(idx);
    var downIndices = _.keys(downClues);
    var newStart = downIndices.indexOf(downClueNumber);
    var downCluesInOrder = (newStart <= 0) ? downIndices: downIndices.slice(newStart).concat(downIndices.slice(0, newStart));

    if(typeof currentSquare === "undefined"){
      return 0;
    } else if(across) {
      for(var i = 0; i < game.length; i++) {
        if(game[i] > idx) {
          return game[i];
        } else if(idx === 224) {
          return 0;
        }
      }
    } else {
      if(typeof downClueNumber === "undefined" || downClueNumber === null) {
        return currentSquare + 15;
      }
      for(var i = 0; i < downCluesInOrder.length; i++) {
        var clueNumber = downCluesInOrder[i];
        for(var j = 0; j < downClues[clueNumber].length; j++) {
          var clue = downClues[clueNumber][j];
          if(clue > currentSquare || clueNumber != downClueNumber && game.indexOf(clue) !== -1) {
            return clue;
          }
        }
      }
    }
    return null;
  },

  _findClueNumFromIndex: function(idx) {
    var downClues = GameStore.getDownCluesAndIndices();

    for(var clueNum in downClues) {
      if(downClues[clueNum].indexOf(idx) !== -1) {
        return clueNum;
      }
    }

    return null;
  },

  currentWordIndices: function() {
    var nextSquare = this.findNextSqaure();
    var board = this.state.currentGameState;
  },

  findIncorrectSquares: function() {
    var userGrid = this.state.currentGameState;
    var answerGrid = GameStore.getSolution();
    var incorrectIndices = [];

    for(var i = 0; i < userGrid.length; i++) {
      if(userGrid[i] != answerGrid[i] && userGrid[i] !== "" && userGrid[i] !== "white" && isNaN(parseFloat(userGrid[i]))) {
        incorrectIndices.push(i);
      }
    }

    this.setState({incorrectIndices: incorrectIndices});
    // return incorrectIndices;
  },

  render: function() {
    var rows = "";
    var that = this;
    // var incorrectIndices = (this.state.check ? this.findIncorrectSquares() : []);
    var incorrectIndices = this.state.incorrectIndices;

    if(this.state.game) {
      var boardArray = GameStore.getStartingBoard();
      var currentBoard = GameStore.getCurrentGameState();
      var counter = 0;
      var nextSquare = this.state.nextSquare;
      var solution = this.state.solution;

      rows = boardArray.map( function(square) {
        var row = counter / 15;
        var col = counter % 15;
        var active = (nextSquare === counter) ? true : false;
        var value = "";
        var wrong = false;

        if(!parseInt(currentBoard[counter]) && currentBoard[counter].length <= 1) {
          value = currentBoard[counter];
        }

        if(that.props.currentAcrossClue === -1 && counter === 0) {
          active = true;
        } else if(that.props.currentAcrossClue === -1 && counter === 1) {
          active = false;
        }

        if(incorrectIndices.length > 0 && incorrectIndices.indexOf(counter) !== -1 && currentBoard[counter] !== solution[counter]) {
          debugger
          wrong = true;
        }

        counter++;

        if(square === 'black') {
          return <Square className="grid-square-outer"
                         switchDirection={that.props.switchDirection}
                         id={counter-1} key={counter-1} counter={counter-1}
                         i={row} j={col} clueNumber={null}/> ;
        } else if(square === 'white') {
          return <Square className="grid-square-outer"
                         switchDirection={that.props.switchDirection}
                         id={counter-1} key={counter-1} active={active}
                         counter={counter-1} i={row} j={col} clueNumber=" "
                         currentAcrossClue={that.props.currentAcrossClue}
                         currentDownClue={that.props.currentDownClue}
                         across={that.state.across}
                         currentSquareChanged={that._currentSquareChanged}
                         value={value}
                         wrong={wrong}/>;
        } else {
          return <Square className="grid-square-outer"
                         switchDirection={that.props.switchDirection}
                         id={counter-1} key={counter-1} active={active}
                         counter={counter-1} i={row} j={col} clueNumber={square}
                         currentAcrossClue={that.props.currentAcrossClue}
                         currentDownClue={that.props.currentDownClue}
                         across={that.state.across}
                         currentSquareChanged={that._currentSquareChanged}
                         value={value}
                         wrong={wrong}/>;
        }
      });
    }

    return (
      <div className="grid" id="grid">
        {rows}
      </div>

    );
  }
});


module.exports = Grid;
