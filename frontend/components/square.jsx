var React = require('react');


var Square = React.createClass({
  getInitialState: function() {
    return ({clueNumber: this.props.clueNumber, guess: " "});
  },

  // componentDidMount: function() {
  //   document.addEventListener("keyPress", this.handleType());
  // },
  handleType: function() {

  },

  render: function() {
    var square = <div className="grid-square black"></div> ;
    if(this.state.clueNumber !== null) {
      square = <div className="grid-square">
                 <div className="clue-number" onKeyPress={this.handleType}>{this.state.clueNumber}</div>
                 <div className="guess"></div>
               </div>
    }
    return (
      square
    );
  }

});

module.exports = Square;
