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

function _getInProgressPuzzles() {
  return UserStore.getInProgessPuzzleIds();
}

var PuzzleList = React.createClass({
  getInitialState: function() {
    return({puzzles: _getAllPuzzles(), inProgress: _getInProgressPuzzles()});
  },

  _puzzlesChanged: function(){
    this.setState({ puzzles: _getAllPuzzles() });
  },

  _userChanged: function(){
    this.setState({ inProgress: _getInProgressPuzzles() });
  },

  componentDidMount: function(){
    this.puzzleListener = PuzzleStore.addListener(this._puzzlesChanged);
    this.userListener = UserStore.addListener(this._userChanged);
    ApiUtil.fetchPuzzles();
  },

  componentWillUnmount: function(){
    this.puzzleListener.remove();
    this.userListener.remove();
  },

  handleClick: function(id, event) {
    currentGame = UserStore.getPreviousGameState(id);
    if(currentGame) {
      ApiUtil.fetchPuzzle(id);
      GameActions.receivePreviousGame(currentGame);
    } else {
      ApiUtil.createGame({puzzle_id: id});
    }
    // ApiUtil.createGame({puzzle_id: id});
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
    var inProgressIDs = this.state.inProgress;

    if(this.state.puzzles.length !== 0) {
      var allPuzzles = this.sortPuzzlesByDifficulty();
      var easyPuzzles = allPuzzles["easy"], mediumPuzzles = allPuzzles["medium"], hardPuzzles = allPuzzles["hard"];
      var inProgress = "";

      var easyPuzzleList = easyPuzzles.map (function(puzzle) {
        if(inProgressIDs.length > 0 && inProgressIDs.indexOf(puzzle.id) !== -1) {
          inProgress = "(in progress)";
        } else {
          inProgress = "";
        }

        return ( <li key={puzzle.id}>
                    <Link to="/puzzle/:id" className="puzzle-link" onClick={that.handleClick.bind(null, puzzle.id)}>
                      {puzzle.title}
                      <span className="in-progress">  {inProgress}</span>
                    </Link>
                  </li>
               );
      });

      var mediumPuzzleList = mediumPuzzles.map (function(puzzle) {
        return ( <li key={puzzle.id}>
                    <Link to="/puzzle/:id" className="puzzle-link" onClick={that.handleClick.bind(null, puzzle.id)}>
                      {puzzle.title}
                    </Link>
                  </li>
               );
      });

      var hardPuzzleList = hardPuzzles.map (function(puzzle) {
        return ( <li key={puzzle.id}>
                    <Link to="/puzzle/:id" className="puzzle-link" onClick={that.handleClick.bind(null, puzzle.id)}>
                      {puzzle.title}
                    </Link>
                  </li>
               );
      });
    }

    // <div className="puzzle-list-element">
    //   <h3 className="puzzle-list-header">Crosswords to Play</h3>
    //   <div className="puzzle-header">Easy</div>
    //   <ul className="puzzle-list-items">{easyPuzzleList}</ul>
    //   <div className="puzzle-header">Medium</div>
    //   <ul className="puzzle-list-items">{mediumPuzzleList}</ul>
    //   <div className="puzzle-header">Hard</div>
    //   <ul className="puzzle-list-items">{hardPuzzleList}</ul>
    // </div>

    return (
      <div className="all-puzzle-lists">
        <div className="puzzle-list-element">
          <h3 className="puzzle-list-header">Easy</h3>
          <ul className="puzzle-list-items">{easyPuzzleList}</ul>
        </div>
        <div className="puzzle-list-element">
          <h3 className="puzzle-list-header">Medium</h3>
          <ul className="puzzle-list-items">{mediumPuzzleList}</ul>
        </div>
        <div className="puzzle-list-element">
          <h3 className="puzzle-list-header">Hard</h3>
          <ul className="puzzle-list-items">{hardPuzzleList}</ul>
        </div>
      </div>
    );
  }
});

module.exports = PuzzleList;
