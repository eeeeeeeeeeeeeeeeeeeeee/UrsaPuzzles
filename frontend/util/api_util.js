var ApiActions = require('../actions/api_actions.js');


var ApiUtil = {
  fetchPuzzles: function() {
    $.ajax({
      url: 'api/puzzles',
      success: function(puzzles) {
        ApiActions.receivePuzzles(puzzles);
      }
    });
  },

  // createGame post request returns puzzle
  //
  // fetchPuzzle: function(id) {
  //   $.ajax({
  //     url: 'api/puzzles',
  //     data: { id: id },
  //     success: function(puzzle) {
  //       ApiActions.receivePuzzle(puzzle);
  //     }
  //   });
};

module.exports = ApiUtil;
