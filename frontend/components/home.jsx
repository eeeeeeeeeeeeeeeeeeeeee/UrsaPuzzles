var React = require('react');
var PuzzleStore = require('../stores/puzzle');
var ApiUtil = require('../util/api_util');
var PuzzleList = require('./puzzle_list');
var Link = require('react-router').Link


var Home = React.createClass({
  componentDidMount: function() {
    ApiUtil.fetchUserData();
  },

  render: function() {

    return (
      <div className="home-group">
        <div className="color-band">
          <PuzzleList className="puzzle-list"/>
        </div>
      </div>
    );
  }
});

module.exports = Home;
