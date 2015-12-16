var React = require('react');


var Square = React.createClass({
  getInitialState: function() {
    return ({clue_number: this.props.clue_number, guess: " "});
  },

  render: function() {
    var square = <div class="grid-square black"></div> ;
    if(clue_number !== null) {
      square = <div class="grid-square">
                 <div class="clue-number">{this.state.clue_number}</div>
                 <div class="guess"></div>
               </div>
    }
    return (
      <td>
        {square}
      </td>
    );
  }

})
