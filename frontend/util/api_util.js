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

  createGame: function(info) {
    $.ajax({
      type: 'POST',
      url: 'api/games',
      data: { game: info },
      success: function(game) {
        ApiActions.receiveGame(game);
      }
    });
  },

  fetchUserData: function() {
    $.ajax({
      url: 'api/users',
      success: function(data) {
        ApiActions.receiveUserData(data);
      }
    });
  }


  // fetchPuzzle: function(id) {
  //   $.ajax({
  //     url: 'api/users',
  //     data: { id: id },
  //     success: function(puzzle) {
  //       ApiActions.receivePuzzle(puzzle);
  //     }
  //   });
};

module.exports = ApiUtil;
