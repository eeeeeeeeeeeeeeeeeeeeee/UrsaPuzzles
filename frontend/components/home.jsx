var React = require('react');
var PuzzleStore = require('../stores/puzzle');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link

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

  handleClick: function(id, event) {
    ApiUtil.createGame({puzzle_id: id});
  },

  render: function() {
    var puzzleListItems = "";
    var that = this;

    if(this.state.puzzles.length !== 0) {
      puzzleListItems = this.state.puzzles.map (function(puzzle) {
        return ( <li key={puzzle.id}>
                    <Link to="/puzzle/player" onClick={that.handleClick.bind(null, puzzle.id)}>
                      {puzzle.title}
                    </Link>
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
