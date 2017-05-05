var React = require('react');
var PuzzleStore = require('../stores/puzzle');
var GameStore = require('../stores/game');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/api_util');
var GameActions = require('../actions/game_actions');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

function _getAllPuzzles() {
  return PuzzleStore.all();
}

function _getInProgressPuzzles() {
  return UserStore.getInProgessPuzzleIds();
}

function _getWonPuzzles() {
  return UserStore.getWonPuzzleIds();
}

var PuzzleList = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return({puzzles: _getAllPuzzles(),
            inProgress: _getInProgressPuzzles(),
            won: _getWonPuzzles()});
  },

  _puzzlesChanged: function(){
    this.setState({ puzzles: _getAllPuzzles() });
  },

  _userChanged: function(){
    this.setState({ inProgress: _getInProgressPuzzles(), won: _getWonPuzzles() });
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
    var currentGame = UserStore.getPreviousGameState(id);
    if(currentGame) {
      ApiUtil.fetchPuzzle(id);
      GameActions.receivePreviousGame(currentGame);
    } else {
      ApiUtil.createGame({puzzle_id: id});
    }
    this.history.push('/puzzle/' + id);
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
    var wonIDs = this.state.won;
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

    if(this.state.puzzles.length !== 0) {
      var inProgress = "";
      var counter = 0;

      var allPuzzleList = this.state.puzzles.map(function(puzzle) {
        if(wonIDs.length > 0 && wonIDs.indexOf(puzzle.id) !== -1) {
          inProgress = "solved";
        } else if(inProgressIDs.length > 0 && inProgressIDs.indexOf(puzzle.id) !== -1) {
          inProgress = "in progress";
        } else {
          inProgress = "";
        }

        var route = "/puzzle/" + puzzle.id;
        var listElementClass = "puzzle-list-element " + colors[counter];
        counter++;

        return (
                  <div className={listElementClass} key={puzzle.id} onClick={that.handleClick.bind(null, puzzle.id)}>
                    <h3 className="puzzle-list-header">
                        {puzzle.title}
                        <br/>
                        <span className="in-progress">  {inProgress}</span>

                    </h3>
                  </div>
                );
      });
    }

    return (
      <div className="all-puzzle-lists">
        {allPuzzleList}
      </div>
    );
  }
});

module.exports = PuzzleList;
