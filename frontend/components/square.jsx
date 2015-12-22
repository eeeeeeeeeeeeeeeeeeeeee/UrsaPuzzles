var React = require('react');
var GameActions = require('../actions/game_actions')
var reactDOM = require('react-dom');
var GameStore = require('../stores/game');


var Square = React.createClass({
  getInitialState: function() {
    return ({clueNumber: this.props.clueNumber, active: false, guess: "", acrossCluesAndIndices: GameStore.getAcrossCluesAndIndices(), downCluesAndIndices: GameStore.getDownCluesAndIndices()});
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
    var across;

    if(key === 37 || key === 39) {
      GameActions.receiveMove(true);
    } else if (key === 38 || key === 40) {
      GameActions.receiveMove(false);
    }
  },

  componentWillReceiveProps: function(nextProps) {
    var tester = function() {
      if(this.state.active) {
        reactDOM.findDOMNode(this).focus();
      }
    }.bind(this);

    this.setState({active: nextProps.active}, tester);
  },

  handleClick: function() {
    this.props.switchDirection();
  },

  render: function() {
    var wordIndices = [];
    if(this.props.across && this.props.currentAcrossClue !== -1) {
      wordIndices = this.state.acrossCluesAndIndices[this.props.currentAcrossClue];
    } else if (this.props.currentAcrossClue !== -1){
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

      square = <div className={className} onDoubleClick={this.handleClick}>
                 <div className="clue-number">{this.state.clueNumber}</div>
                 <input className="user-type" id={"ut-" + this.props.counter} type="text" styles="text-transform:uppercase" onKeyDown={this.handleKeyDown} onKeyPress={this.handleKeyPress} value={this.state.guess}></input>
               </div>
    }

    return (
      square
    );
  }

});

module.exports = Square;
