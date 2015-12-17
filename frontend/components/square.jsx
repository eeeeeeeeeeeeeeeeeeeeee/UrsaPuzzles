var React = require('react');


var Square = React.createClass({
  getInitialState: function() {
    return ({clueNumber: this.props.clueNumber, guess: " "});
  },

  render: function() {
    var square = <div className="grid-square black"></div> ;
    if(this.state.clueNumber !== null) {
      square = <div className="grid-square">
                 <div className="clue-number">{this.state.clueNumber}</div>
                 <div className="guess"></div>
               </div>
    }
    return (
      <div>
        {square}
      </div>
    );
  }

});

module.exports = Square;
