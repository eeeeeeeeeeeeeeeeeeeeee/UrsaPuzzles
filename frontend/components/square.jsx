var React = require('react');
var GameActions = require('../actions/game_actions')


var Square = React.createClass({
  getInitialState: function() {
    return ({clueNumber: this.props.clueNumber, guess: " "});
  },

  // componentDidMount: function() {
  //   document.addEventListener("keyPress", this.handleType());
  // },
  handleKeyPress: function(event) {
    this.setState({guess: String.fromCharCode(event.charCode)});
    var letterInfo = {letter: String.fromCharCode(event.charCode),
                      i: this.props.i,
                      j: this.props.j,
                      idx: this.props.counter};
    GameActions.receiveTypedLetter(letterInfo);
  },

  render: function() {
    var square = <div className="grid-square black"></div> ;
    if(this.state.clueNumber !== null) {
      square = <div className="grid-square">
                 <div className="clue-number">{this.state.clueNumber}</div>
                 <input className="user-type" type="text" styles="text-transform:uppercase" onKeyPress={this.handleKeyPress}></input>
               </div>
    }
    return (
      square
    );
  }

});

module.exports = Square;
