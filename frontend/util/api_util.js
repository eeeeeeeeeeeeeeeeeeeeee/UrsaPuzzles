var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {
  fetchPuzzle: function(id) {
    $.ajax({
      url: 'api/puzzles',
      data: { id: id },
      success: function(puzzle) {
        ApiActions.receivePuzzle(puzzle);
      }
    });
  },

  // fetchPuzzle: function(){
  //   var filter = FilterParamsStore.params();
  //   $.get('api/benches', filter, function(benches){
  //     ApiActions.receiveAll(benches);
  //   });
  // },
  // createBench: function(data){
  //   $.post('api/benches', { bench: data }, function(bench) {
  //     ApiActions.receiveAll([bench]);
  //   });
  // },
  // createReview: function(data) {
  //   $.post('api/reviews', { review: data }, function (bench) {
  //     ApiActions.receiveAll([bench]);
  //   });
  // }
};

module.exports = ApiUtil;
