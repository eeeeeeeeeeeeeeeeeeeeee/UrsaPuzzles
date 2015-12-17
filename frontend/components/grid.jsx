var React = require('react');
var Square = require('./square');
var GameStore = require('../stores/game');


function _getGame() {
  return GameStore.getGame();
}

var Grid = React.createClass({
  getInitialState: function() {
    var game = _getGame()[0];
    return ({ game: game});
  },

  _gameChanged: function(){
    var game = _getGame()[0];
    this.setState({ game: game});
  },

  componentDidMount: function(){
    this.gameListener = GameStore.addListener(this._gameChanged);
  },

  componentWillUnmount: function(){
    this.gameListener.remove();
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
          return <Square key={counter} i={row} j={col} clueNumber={null}/> ;
        else if(square === 'white')
          return <Square key={counter} i={row} j={col} clueNumber=" "/>;
        else
          return <Square key={counter} i={row} j={col} clueNumber={square}/>;
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
