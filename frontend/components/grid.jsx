var React = require('react');
var Square = require('./square');
// var GameStore = require('../stores/game');


// function _getGame() {
//   return GameStore.getGame();
// }

var Grid = React.createClass({
  getInitialState: function() {
    return ({ game: this.props.game, emptyGrid: this.props.game.empty_grid });
  },

  render: function() {

    puzzleListItems = this.state.puzzles.map (function(puzzle)

    var rows = this.state.emptyGrid.map( function(row) {
      for(var)
    });

    return (
      <div>
        <table>

        </table>
      </div>

    );
  }
});


module.exports = Grid;
