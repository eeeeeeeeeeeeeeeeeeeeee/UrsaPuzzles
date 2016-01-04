var React = require('react');
var UserStore = require('../stores/user');
var GameStore = require('../stores/game');
var ApiUtil = require('../util/api_util');
var GameActions = require('../actions/game_actions');


function _getStartTime() {
  return GameStore.getStartTime();
}

function _getWonStatus() {
  return GameStore.getWonStatus();
}

var GameToolbar = React.createClass({
  getInitialState: function() {
    var timeElapsed = _getStartTime();
    return { timeElapsed: timeElapsed, title: "" };
  },

  componentDidMount: function () {
    this.interval = setInterval(this.tick, 1000);
    this.gameListener = GameStore.addListener(this._gameChanged);
  },

  componentWillUnmount: function(){
    clearInterval(this.interval);
    this.gameListener.remove();
  },

  _gameChanged: function() {
    var gameInfo = GameStore.getGameInfo();
    this.setState({title: gameInfo.title});
  },

  tick: function () {
    var newTime = this.state.timeElapsed + 1;
    this.setState({ timeElapsed: newTime});

    if(this.state.timeElapsed % 5 === 0) {
      this.saveGame();
    }
  },

  _convertSecondsToTimer: function() {
    var totalSeconds = this.state.timeElapsed;
    if(totalSeconds > 100000) {
      this.setState({timeElapsed: 0});
    }

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
    var won = _getWonStatus();
    var game = {current_game_state: currentGameState,
                time_elapsed:
                timeElapsed,
                won: won};

    ApiUtil.saveGame(gameId, game);
  },

  checkGame: function() {
    GameActions.receiveCheckRequest(true);
  },

  clearGame: function() {
    GameActions.receiveClearRequest();
    this.saveGame();
  },

  revealGame: function() {
    GameActions.receiveSolutionRequest();
    GameActions.receiveWonStatus(true);
  },

  render: function() {

    return (
      <div className="game-toolbar">
        <span className="timer-count">{this._convertSecondsToTimer()}</span>
        <button type="button"
                className="save-button btn"
                onClick={this.clearGame}>Clear</button>
        <button type="button"
                className="save-button btn"
                onClick={this.checkGame}>Check</button>
        <button type="button"
                className="save-button btn"
                onClick={this.revealGame}
                data-toggle="modal"
                data-target=".bs-example-modal-sm">Reveal Solution</button>
        <span className="game-title">{this.state.title}</span>
      </div>
    );
  }

});

module.exports = GameToolbar;
