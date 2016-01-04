var React = require('react');
var PuzzleStore = require('../stores/puzzle');
var ApiUtil = require('../util/api_util');
var PuzzleList = require('./puzzle_list');
var Link = require('react-router').Link;


var Home = React.createClass({
  componentDidMount: function() {
    ApiUtil.fetchUserData();
  },

  render: function() {

    return (
      <div className="home-group">
        <div className="color-band">
          <div className="welcome-note">
            Select a day of the week to begin playing!
            <div className="welcome-note-sub">
              note: puzzle difficulty increases with each day
            </div>
          </div>
          <PuzzleList className="puzzle-list"/>
        </div>
      </div>
    );
  }
});

module.exports = Home;
