var React = require('react');
var GameActions = require('../actions/game_actions')
var reactDOM = require('react-dom');


var Square = React.createClass({
  getInitialState: function() {
    return ({clueNumber: this.props.clueNumber, active: false, guess: ""});
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
    var square = <div className="grid-square black"></div> ;

    if(this.state.clueNumber !== null) {
      var className = "grid-square";
      if(this.state.active) {
        className = "grid-square highlight"
      }

      square = <div className={className} onClick={this.handleClick}>
                 <div className="clue-number">{this.state.clueNumber}</div>
                 <input className="user-type" id={"ut-" + this.props.counter} type="text" styles="text-transform:uppercase" onKeyPress={this.handleKeyPress} value={this.state.guess}></input>
               </div>
    }

    return (
      square
    );
  }

});

module.exports = Square;
