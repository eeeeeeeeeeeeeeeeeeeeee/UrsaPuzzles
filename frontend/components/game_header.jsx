var React = require('react');
var GameStore = require('../stores/game');

var _getGameInfo = function() {
  return GameStore.getGameInfo();
}

var GameHeader = React.createClass({
  getInitialState: function() {
    return ({title: "", author: "", difficulty: ""});
  },

  _gameChanged: function() {
    var gameInfo = _getGameInfo();
    if(typeof gameInfo !== "undefined") {
      this.setState({title: gameInfo.title, author: gameInfo.author, difficulty: gameInfo.difficulty});
    }
  },

  componentDidMount: function() {
    this.gameListener = GameStore.addListener(this._gameChanged);
  },

  componentWillUnmount: function() {
    this.gameListener.remove();
  },

  render: function() {
    return (
      <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Info
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li>{this.state.title}</li>
          <li>By: {this.state.author}</li>
          <li>{this.state.difficulty}</li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </div>

    );
  }

});

module.exports = GameHeader;

//
// <div className="game-header">
//   <div className="game-info title">{this.state.title}</div>
//   <div className="game-info author">By: {this.state.author}</div>
//   <div className="game-info difficult">Difficulty: {this.state.difficulty}</div>
// </div>
