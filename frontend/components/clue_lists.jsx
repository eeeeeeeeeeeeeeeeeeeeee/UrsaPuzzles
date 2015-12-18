var React = require('react');
var GameStore = require('../stores/game');
var ApiUtil = require('../util/api_util');

function _getClues() {
  return GameStore.getClues();
}

var ClueLists = React.createClass({
  getInitialState: function() {
    return ({ clues: _getClues() });
  },

  _cluesChanged: function(){
    var clues = _getClues();
    this.setState({ clues: clues });
  },

  componentDidMount: function() {
    this.gameListener = GameStore.addListener(this._cluesChanged);
  },

  componentWillUnmount: function() {
    this.gameListener.remove();
  },

  _separateAcrossDown: function() {
    var across = [];
    var down = [];
    var clues = this.state.clues;

    for(var i = 0; i < clues.length; i++) {
      if(clues[i].across === true)
        across.push(clues[i]);
      else
        down.push(clues[i]);
    }

    return {across: across, down: down};
  },

  render: function() {
    var acrossClueListItem = "";
    var downClueListItem = "";

    if(this.state.clues.length > 0) {
      var clues = this._separateAcrossDown();

      acrossClueListItem = clues.across.map (function(clue) {
        return <li className="clue-list-item" value={clue.clue_number}>{clue.description}</li>
      });

      downClueListItem = clues.down.map (function(clue) {
        return <li className="clue-list-item" value={clue.clue_number}>{clue.description}</li>
      });
    }

    return (
      <div className="across-and-down-lists">
        <div className="clue-list-direction-header">Across</div>
        <ol className="crossword-clue-list">
          {acrossClueListItem}
        </ol>
        <div className="clue-list-direction-header">Down</div>
        <ol className="crossword-clue-list">
          {downClueListItem}
        </ol>
      </div>
    )
  }
});

module.exports = ClueLists;
