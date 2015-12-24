var React = require('react');
var GameActions = require('../actions/game_actions')
var reactDOM = require('react-dom');
var GameStore = require('../stores/game');
var _ = require('underscore');

function _getAcrossCluesAndIndices() {
  return GameStore.getAcrossCluesAndIndices();
};

function _getDownCluesAndIndices() {
  return GameStore.getDownCluesAndIndices();
};

var Square = React.createClass({
  getInitialState: function() {
    var acrossCluesAndIndices = _getAcrossCluesAndIndices();
    var downCluesAndIndices = _getDownCluesAndIndices();
    return ({clueNumber: this.props.clueNumber, active: false, guess: "", acrossCluesAndIndices: acrossCluesAndIndices, downCluesAndIndices: downCluesAndIndices});
  },

  // componentDidMount: function() {
  //   document.addEventListener("keyPress", this.handleType());
  // },
  handleKeyPress: function(event) {
    this.setState({guess: String.fromCharCode(event.charCode).toUpperCase()});
    var letterInfo = {letter: String.fromCharCode(event.charCode),
                      i: this.props.i,
                      j: this.props.j,
                      idx: this.props.counter};
    GameActions.receiveTypedLetter(letterInfo);
  },

  handleKeyDown: function(event) {
    var key = event.which;
    // var board = GameStore.getStartingBoard();
    // var thisSquare = this.props.counter;
    // var newSquare;
    //
    // if(key === 37 || key === 39 && this.props.across) {
    //
    //   while(board[thisSquare + 1] === "black") {
    //
    //   }
    // }

    if(key === 37 || key === 39) {
      if(this.props.across) {
        GameActions.receiveStep(this.props.counter);
      } else {
        GameActions.receiveMove(true);
      }
    } else if (key === 38 || key === 40) {
      if(this.props.across) {
        GameActions.receiveMove(false);
      } else {
        GameActions.receiveStep(this.props.counter);
      }
    }
  },

  componentDidMount: function() {
    if(this.props.counter === 0) {
      document.querySelector("#ut-0").focus();
    }
    this.gameListener = GameStore.addListener(this._gameChanged);
  },

  componentWillUnmount: function() {
    this.gameListener.remove();
  },

  _gameChanged: function() {
    var acrossCluesAndIndices = _getAcrossCluesAndIndices();
    var downCluesAndIndices = _getDownCluesAndIndices();
    this.setState({acrossCluesAndIndices: acrossCluesAndIndices,
                   downCluesAndIndices: downCluesAndIndices});
  },

  componentWillReceiveProps: function(nextProps) {
    // var tester = function() {
    //   if(this.state.active) {
    //     reactDOM.findDOMNode(this).focus();
    //   }
    // }.bind(this);

    this.setState({active: nextProps.active, currentAcrossClue: nextProps.currentAcrossClue, currentDownClue: nextProps.currentDownClue});
  },

  handleDoubleClick: function() {
    this.props.switchDirection();
  },

  handleClick: function() {
    var squareString = "#ut-" + this.props.counter;
    // debugger
    // document.querySelector(squareString).focus();

    next = this.props.counter;
    if(this.props.across) next -= 1;
    GameActions.receiveCurrentSquare(next);
  },

  render: function() {
    var wordIndices = [];

    if(!_.isEmpty(this.state.acrossCluesAndIndices) && this.props.across && this.props.currentAcrossClue !== -1) {
      wordIndices = this.state.acrossCluesAndIndices[this.props.currentAcrossClue];
    } else if (!_.isEmpty(this.state.downCluesAndIndices) && this.props.currentAcrossClue !== -1){
      wordIndices = this.state.downCluesAndIndices[this.props.currentDownClue];
    }


    var square = <div className="grid-square black"></div> ;


    if(this.state.clueNumber !== null) {
      var className = "grid-square";


      if(this.state.active) {
        className = "grid-square highlight";
      } else if(wordIndices.indexOf(this.props.counter) !== -1) {
        className = "grid-square neighbor";
      }

      square = <div className={className} onDoubleClick={this.handleDoubleClick} onClick={this.handleClick}>
                 <div className="clue-number">{this.state.clueNumber}</div>
                 <input className="user-type" id={"ut-" + this.props.counter}
                        type="text" styles="text-transform:uppercase"
                        onKeyDown={this.handleKeyDown}
                        onKeyPress={this.handleKeyPress}
                        value={this.props.value}></input>
               </div>
    }

    return (
      square
    );
  }

});

module.exports = Square;
