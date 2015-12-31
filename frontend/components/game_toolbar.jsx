var React = require('react');
var UserStore = require('../stores/user');
var GameStore = require('../stores/game');
var ApiUtil = require('../util/api_util');
var GameActions = require('../actions/game_actions');

function _getStartTime() {
  return GameStore.getStartTime();
}

var GameToolbar = React.createClass({
  getInitialState: function() {
    //change time elapsed to start at value stored in game -- needs to be int first...
    var timeElapsed = _getStartTime();
    return { timeElapsed: timeElapsed };
  },

  componentDidMount: function () {
    this.intervalId = setInterval(this.tick, 1000);
  },

  tick: function () {
    var newTime = this.state.timeElapsed + 1;
    this.setState({ timeElapsed: newTime});
  },

  _convertSecondsToTimer: function() {
    var totalSeconds = this.state.timeElapsed;
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);
    var hours = Math.floor(totalSeconds / 3600);

    if(seconds < 10) seconds = "0" + seconds;
    if(minutes < 10) minutes = "0" + minutes;
    if(hours < 10) hours = "0" + hours;

    return hours + ":" + minutes + ":" + seconds;
  },

  saveGame: function() {
    var gameId = GameStore.getGame()[0].id;
    var currentGameState = GameStore.getCurrentGameState();
    var timeElapsed = this.state.timeElapsed;
    var game = {current_game_state: currentGameState, time_elapsed: timeElapsed};

    ApiUtil.saveGame(gameId, game);
  },

  checkGame: function() {
    GameActions.receiveCheckRequest();
  },

  clearGame: function() {
    GameActions.receiveClearRequest();
    this.saveGame();
  },

  revealGame: function() {
    GameActions.receiveSolutionRequest();
    // set hints used to true
  },

  render: function() {

    return (
      <div className="game-toolbar">
        <span className="timer-count">{this._convertSecondsToTimer()}</span>
        <button type="button" className="save-button btn" onClick={this.saveGame}>Save Game</button>
        <button type="button" className="save-button btn" onClick={this.clearGame}>Clear</button>
        <button type="button" className="save-button btn" onClick={this.checkGame}>Check</button>
        <button type="button" className="save-button btn" onClick={this.revealGame}>Reveal Solution</button>
      </div>
    );
  }

});

module.exports = GameToolbar;
