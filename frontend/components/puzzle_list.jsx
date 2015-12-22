var React = require('react');
var PuzzleStore = require('../stores/puzzle');
var GameStore = require('../stores/game');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/api_util');
var GameActions = require('../actions/game_actions');

var Link = require('react-router').Link

function _getAllPuzzles() {
  return PuzzleStore.all();
}

var PuzzleList = React.createClass({
  getInitialState: function() {
    return({puzzles: _getAllPuzzles()});
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
    // currentGame = UserStore.getPreviousGameState(id);
    // if(currentGame) {
    //   GameActions.receivePreviousGame(currentGame);
    //   ApiUtil.fetchPuzzle(id);
    // } else {
    //   ApiUtil.createGame({puzzle_id: id});
    // }
    ApiUtil.createGame({puzzle_id: id});
  },

  sortPuzzlesByDifficulty: function() {
    var easy = [], medium = [], hard = [];

    this.state.puzzles.map (function(puzzle) {
      switch(puzzle.difficulty) {
        case "easy":
          easy.push(puzzle);
          break;
        case "medium":
          medium.push(puzzle);
          break;
        case "hard":
          hard.push(puzzle);
          break;
      }
    })

    return {easy: easy, medium: medium, hard: hard};
  },

  render: function() {
    var puzzleListItems = "";
    var that = this;

    if(this.state.puzzles.length !== 0) {
      var allPuzzles = this.sortPuzzlesByDifficulty();
      var easyPuzzles = allPuzzles["easy"], mediumPuzzles = allPuzzles["medium"], hardPuzzles = allPuzzles["hard"];

      var easyPuzzleList = easyPuzzles.map (function(puzzle) {
        return ( <li key={puzzle.id}>
                    <Link to="/puzzle/:id" onClick={that.handleClick.bind(null, puzzle.id)}>
                      {puzzle.title}
                    </Link>
                  </li>
               );
      });

      var mediumPuzzleList = mediumPuzzles.map (function(puzzle) {
        return ( <li key={puzzle.id}>
                    <Link to="/puzzle/:id" onClick={that.handleClick.bind(null, puzzle.id)}>
                      {puzzle.title}
                    </Link>
                  </li>
               );
      });

      var hardPuzzleList = hardPuzzles.map (function(puzzle) {
        return ( <li key={puzzle.id}>
                    <Link to="/puzzle/:id" onClick={that.handleClick.bind(null, puzzle.id)}>
                      {puzzle.title}
                    </Link>
                  </li>
               );
      });
    }

    return (
      <div className="puzzle-list-element">
        <h3 className="puzzle-list-header">Crosswords to Play</h3>
        <div className="puzzle-header">Easy</div>
        <ul className="puzzle-list-items">{easyPuzzleList}</ul>
        <div className="puzzle-header">Medium</div>
        <ul className="puzzle-list-items">{mediumPuzzleList}</ul>
        <div className="puzzle-header">Hard</div>
        <ul className="puzzle-list-items">{hardPuzzleList}</ul>
      </div>
    );
  }
});

module.exports = PuzzleList;
