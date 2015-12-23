var React = require('react');
var UserStore = require('../stores/user');
var GameStore = require('../stores/game');
var ApiUtil = require('../util/api_util');

var GameToolbar = React.createClass({
  getInitialState: function() {
    return { timeElapsed: 0 };
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
    var userId = UserStore.getUserId();
    var currentGameState = GameStore.getCurrentGameState();
    var timeElapsed = this.state.timeElapsed;
    var game = {currentGameState: currentGameState, timeElapsed: timeElapsed};

    ApiUtil.saveGame(userId, game);
  },

  render: function() {

    var id = UserStore.getUserId();
    var link = "/users/" + id;
    var currentGameState = GameStore.getCurrentGameState();

    return (
      <div className="game-toolbar">
        <span className="timer-count">{this._convertSecondsToTimer()}</span>
        <button type="button" className="save-button btn" onClick={this.saveGame}>Save Game</button>
      </div>
    );
  }

});

module.exports = GameToolbar;
