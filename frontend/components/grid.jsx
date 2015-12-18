var React = require('react');
var Square = require('./square');
var GameStore = require('../stores/game');
var CurrentSquareStore = require('../stores/current_square');


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
    return ({ game: game, currentGameState: currentGameState, currentSquare: null});
  },

  _gameChanged: function(){
    var game = _getGame()[0];
    var currentGameState = _getCurrentGameState();
    this.setState({ game: game, currentGameState: currentGameState });

  },

  _currentSquareChanged: function(idx) {
    var currentSquare = _getCurrentSquare();
    this.setState({ currentSquare: currentSquare}, function () {
      var next = this.findNextSqaure();
      var id = 'ut-' + next;
      var input = document.getElementById(id);
      input.focus();
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

    for(var i = 0; i < game.length; i++) {
      if(game[i] > idx)
        return game[i];
    }
    return nil;
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
          return <Square className="grid-square-outer" id={counter-1} key={counter-1} counter={counter-1} i={row} j={col} clueNumber={null}/> ;
        else if(square === 'white')
          return <Square className="grid-square-outer" id={counter-1} key={counter-1} active={active} counter={counter-1} i={row} j={col} clueNumber=" "/>;
        else
          return <Square className="grid-square-outer" id={counter-1} key={counter-1} active={active} counter={counter-1} i={row} j={col} clueNumber={square}/>;
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
