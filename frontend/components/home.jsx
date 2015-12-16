var React = require('react');
var PuzzleStore = require('../stores/puzzle');
var ApiUtil = require('../util/api_util');

function _getAllPuzzles() {
  return PuzzleStore.all();
}

var Home = React.createClass({
  getInitialState: function() {
    return ({ puzzles: _getAllPuzzles() });
  },

  _puzzlesChanged: function(){
    this.setState({ puzzles: _getAllPuzzles() });
  },

  componentDidMount: function(){
    this.puzzleListener = PuzzleStore.addListener(this._puzzlesChanged);
    ApiUtil.fetchPuzzles();
  },

  componentWillUnmount: function(){
    this.puzzleListener.remove();
  },

  handleClick: function(event) {
    event.preventDefault();
    debugger
    var game = { id: 4 };
  },

  render: function() {
    var puzzleListItems = "";
    if(this.state.puzzles.length !== 0) {
      puzzleListItems = this.state.puzzles.map (function(puzzle) {
        var url = "/api/games/"+puzzle.id;
        return ( <li key={puzzle.id}>
                    <a href="#" onClick={this.handleClick}>
                      {puzzle.title}
                    </a>
                  </li>
               );
      });
    }

    return (
      <div>
        <h3>Puzzles!</h3>
        <ul>
          {puzzleListItems}
        </ul>
      </div>
    );
  }
});

module.exports = Home;
