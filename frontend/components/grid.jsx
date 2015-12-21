var React = require('react');
var Square = require('./square');
var GameStore = require('../stores/game');
var CurrentSquareStore = require('../stores/current_square');
var _ = require('underscore');


function _getGame() {
  return GameStore.getGame();
}

function _getCurrentGameState() {
  return GameStore.getCurrentGameState();
}

function _getCurrentSquare() {
  return CurrentSquareStore.getCurrentSquare();
}

var Grid = React.createClass({
  getInitialState: function() {
    var game = _getGame()[0];
    var currentGameState = _getCurrentGameState();
    return ({ game: game, currentGameState: currentGameState,
              currentSquare: null, across: true, currentDownClue: 1, currentAcrossClue: 1});
  },

  _gameChanged: function(){
    var game = _getGame()[0];
    var currentGameState = _getCurrentGameState();
    var across = this.props.across;
    this.setState({ game: game, currentGameState: currentGameState, across: across });

  },

  _currentSquareChanged: function(idx) {
    var currentSquare = _getCurrentSquare();
    this.setState({ currentSquare: currentSquare, currentDownClue: this.props.currentDownClue, currentAcrossClue: this.props.currentAcrossClue}, function () {
      var next = this.findNextSqaure();
      var id = 'ut-' + next;
      var input = document.getElementById(id);
      input.focus();
      this.props.updateClue(next);
    });
  },

  componentDidMount: function() {
    this.gameListener = GameStore.addListener(this._gameChanged);
    this.currentSquareListener = CurrentSquareStore.addListener(this._currentSquareChanged);
  },

  componentWillUnmount: function() {
    this.gameListener.remove();
    this.currentSquareListener.remove();
  },

  getOpenSquareIndices: function() {
    var board = this.state.currentGameState;
    var openSquares = [];

    for(var i = 0; i < board.length; i++) {
      if(board[i] === "white" || typeof board[i] === "number") {
        openSquares.push(i);
      }
    }

    return openSquares;
  },

  findNextSqaure: function() {
    // only works for across.... need to add down functionality
    var idx = this.state.currentSquare;
    var game = this.getOpenSquareIndices();
    var currentIndex = game.indexOf(idx);

    var downClues = GameStore.getDownCluesAndIndices();
    var downClueNumber = this.state.currentDownClue;
    var downIndices = _.keys(downClues);
    var newStart = downIndices.indexOf(downClueNumber);
    var downCluesInOrder = (newStart <= 0) ? downIndices: downIndices.slice(newStart).concat(downIndices.slice(0, newStart));

    if(this.state.across)
      for(var i = 0; i < game.length; i++) {
        if(game[i] > idx)
          return game[i];
      }
    else {
      for(var i = 0; i < downCluesInOrder.length; i++) {
        var clueNumber = downCluesInOrder[i];
        for(var j = 0; j < downClues[clueNumber].length; j++) {
          var clue = downClues[clueNumber][j];
          if(clue > this.state.currentSquare || clueNumber != this.state.currentDownClue) {
            return clue;
          }
        }
      }
    }
    return nil;
  },

  currentWordIndices: function() {
    var nextSquare = this.findNextSqaure();
    var board = this.state.currentGameState;
  },

  render: function() {
    var rows = "";
    var that = this;

    if(this.state.game) {
      var boardArray = $.parseJSON(this.state.game.current_board_state);
      var counter = 0;
      var nextSquare = this.findNextSqaure();

      rows = boardArray.map( function(square) {
        var row = counter / 15;
        var col = counter % 15;
        var active = (nextSquare === counter) ? true : false;
        counter++;
        if(square === 'black')
          return <Square className="grid-square-outer" switchDirection={that.props.switchDirection} id={counter-1} key={counter-1} counter={counter-1} i={row} j={col} clueNumber={null}/> ;
        else if(square === 'white')
          return <Square className="grid-square-outer" switchDirection={that.props.switchDirection} id={counter-1} key={counter-1} active={active} counter={counter-1} i={row} j={col} clueNumber=" " currentAcrossClue={that.state.currentAcrossClue} currentDownClue={that.state.currentDownClue} across={that.state.across}/>;
        else
          return <Square className="grid-square-outer" switchDirection={that.props.switchDirection} id={counter-1} key={counter-1} active={active} counter={counter-1} i={row} j={col} clueNumber={square} currentAcrossClue={that.state.currentAcrossClue} currentDownClue={that.state.currentDownClue} across={that.state.across}/>;
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
