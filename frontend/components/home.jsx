var React = require('react');
var PuzzleStore = require('../stores/puzzle');
var ApiUtil = require('../util/api_util');
var PuzzleList = require('./puzzle_list');
var Link = require('react-router').Link


var Home = React.createClass({

  render: function() {

    return (
      <div>
        <PuzzleList className="puzzle-list"/>
      </div>
    );
  }
});

module.exports = Home;
