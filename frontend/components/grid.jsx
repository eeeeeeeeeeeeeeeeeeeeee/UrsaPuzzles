var React = require('react');
var Square = require('./square');
var GameStore = require('../stores/game');


function _getGame() {
  return GameStore.getGame();
}

function _getCurrentSquare() {
  return CurrentSquareStore.getCurrentSquare();
}

var Grid = React.createClass({
  getInitialState: function() {
    var game = _getGame()[0];
    return ({ game: game, currentSquare: null});
  },

  _gameChanged: function(){
    var game = _getGame()[0];
    this.setState({ game: game });
  },

  _currentSquareChanged: function(idx) {
    var currentSquare = _getCurrentSquare();
    this.setState({ currentSquare: currentSquare});
  },

  componentDidMount: function(){
    this.gameListener = GameStore.addListener(this._gameChanged);
    this.currentSquareListener = CurrentSquareStore.addListener(this._currentSquareChanged);
  },

  componentWillUnmount: function(){
    this.gameListener.remove();
    this.currentSquareListener.remove();
  },

  render: function() {
    var rows = "";

    if(this.state.game) {
      var boardArray = $.parseJSON(this.state.game.current_board_state);
      var counter = 0;

      rows = boardArray.map( function(square) {
        var row = counter / 15;
        var col = counter % 15;
        counter++;

        if(square === 'black')
          return <Square key={counter} counter={counter-1} i={row} j={col} clueNumber={null}/> ;
        else if(square === 'white')
          return <Square key={counter} counter={counter-1} i={row} j={col} clueNumber=" "/>;
        else
          return <Square key={counter} counter={counter-1} i={row} j={col} clueNumber={square}/>;
      });
    }

    return (
      <div className="grid clearfix" id="grid">
        {rows}
      </div>

    );
  }
});


module.exports = Grid;
