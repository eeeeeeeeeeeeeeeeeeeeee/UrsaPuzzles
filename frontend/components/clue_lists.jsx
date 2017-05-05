var React = require('react');
var GameStore = require('../stores/game');
var ApiUtil = require('../util/api_util');
var GameActions = require('../actions/game_actions');



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

  shouldComponentUpdate: function (nextProps) {
    return (this.props.currentDownClue !== nextProps.currentDownClue ||
              this.props.currentAcrossClue !== nextProps.currentAcrossClue ||
                this.props.across !== nextProps.across ||
                  this.props.currentAcrossClue === -1 ||
                    this.props.currentDownClue === -1);
  },

  componentDidUpdate: function(currentProps, futureProps) {
    var acrossEl = $('ol.across .highlight').eq(0);
    var firstAcross = $('ol.across li').eq(0);
    var downEl = $('ol.down .highlight').eq(0);
    var firstDown = $('ol.down li').eq(0);

    if (acrossEl.length > 0) {
      $('ol.across').animate({
        scrollTop: acrossEl.offset().top - firstAcross.offset().top + 6
      }, 250);
    }
    if (downEl.length > 0) {
      $('ol.down').animate({
        scrollTop: downEl.offset().top - firstDown.offset().top + 6
      }, 250);
    }
  },

  _separateAcrossDown: function() {
    var across = [];
    var down = [];
    var clues = this.state.clues;

    for(var i = 0; i < clues.length; i++) {
      if(clues[i].across === true) {
        across.push(clues[i]);
      } else {
        down.push(clues[i]);
      }
    }

    if(across[0]["clue_number"] !== 1) {
      across.reverse();
    }

    if(down[0]["clue_number"] !== 1) {
      down.reverse();
    }

    return {across: across, down: down};
  },

  handleAcrossClick: function(e) {
    var marker = e.dispatchMarker;
    var clueNum = marker.slice(marker.indexOf("-") + 1);
    var clues = GameStore.getAcrossCluesAndIndices();

    if(this.props.across) {
      GameActions.receiveCurrentSquare(clues[clueNum][0] - 1);
    } else {
      GameActions.receiveMove(true);
      GameActions.receiveCurrentSquare(clues[clueNum][0] - 1);
    }
  },

  handleDownClick: function(e) {
    var marker = e.dispatchMarker;
    var clueNum = marker.slice(marker.indexOf("-") + 1);
    var clues = GameStore.getDownCluesAndIndices();

    if(!this.props.across) {
      GameActions.receiveCurrentSquare(clues[clueNum][0] - 15);
    } else {
      GameActions.receiveMove(false);
      GameActions.receiveCurrentSquare(clues[clueNum][0] - 15);
    }
  },

  render: function() {
    var acrossClueListItem = "";
    var downClueListItem = "";

    if(this.state.clues.length > 0) {
      var that = this;
      var clues = this._separateAcrossDown();
      var className = "clue-list-item";

      acrossClueListItem = clues.across.map (function(clue) {
        if(that.props.currentAcrossClue == clue.clue_number && that.props.across) {
          className = "clue-list-item highlight active";
        } else if (that.props.currentAcrossClue == clue.clue_number) {
          className = "clue-list-item highlight";
        } else {
          className = "clue-list-item";
        }

        var key = "A-" + clue.clue_number;

        return ( <li className={className}
                    key={key}
                    value={clue.clue_number}
                    onClick={that.handleAcrossClick}>{clue.description}</li> )
      });

      downClueListItem = clues.down.map (function(clue) {
        if(that.props.currentDownClue == clue.clue_number && !that.props.across) {
          className = "clue-list-item highlight active";
        } else if (that.props.currentDownClue == clue.clue_number) {
          className = "clue-list-item highlight";
        } else {
          className = "clue-list-item";
        }

        var key = "D-" + clue.clue_number;

        return ( <li className={className}
                    key={key}
                    value={clue.clue_number}
                    onClick={that.handleDownClick}>{clue.description}</li> )
      });
    }

    return (
      <div className="across-and-down-lists">
        <div className="across-clues-and-header">
          <div className="clue-list-direction-header across">Across</div>
          <ol className="crossword-clue-list across">
            {acrossClueListItem}
          </ol>
        </div>

        <div className="down-clues-and-header">
          <div className="clue-list-direction-header down">Down</div>
          <ol className="crossword-clue-list down">
            {downClueListItem}
          </ol>
        </div>

      </div>
    )
  }
});

module.exports = ClueLists;
