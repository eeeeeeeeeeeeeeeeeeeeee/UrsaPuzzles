var React = require('react');
var GameStore = require('../stores/game')


function _getClues() {
  return GameStore.getClues();
}

var ClueSpotlight = React.createClass({

  getInitialState: function() {
    return ({clues: _getClues()})
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

  render: function() {
    var acrossClue = "";
    var downClue = "";
    var acrossClass = "single-clue-bar";
    var downClass = "single-clue-bar";

    if(this.props.across === true) {
      acrossClass = "single-clue-bar highlight";
    } else {
      downClass = "single-clue-bar highlight";
    }


    for(var i = 0; i < this.state.clues.length; i++) {
      var clue = this.state.clues[i];
      if(clue.clue_number == this.props.currentAcrossClue && clue.across === true) {
        acrossClue = clue.description;
      }
      if(clue.clue_number == this.props.currentDownClue && clue.across === false){
        downClue = clue.description;
      }
    }


    return (
      <div className="clue-bar-both">
        <div className={acrossClass} key="across">
          <div>
            <span className="clue-bar-number" key="across">
              {this.props.currentAcrossClue}
              <span className="direction">A</span>
              .
            </span>
            <span className="clue-bar-text">{acrossClue}</span>
          </div>
        </div>
        <div className={downClass} key="down">
          <div>
            <span className="clue-bar-number" key="down">
              {this.props.currentDownClue}
              <span className="direction">D</span>
              .
            </span>
            <span className="clue-bar-text">{downClue}</span>
          </div>
        </div>
      </div>
    );
  }


});

module.exports = ClueSpotlight;
