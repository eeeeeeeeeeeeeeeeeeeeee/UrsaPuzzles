var React = require('react');
var SessionStore = require('../stores/session');
var ApiUtil = require('../util/api_util');


var Session = React.createClass({

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

module.exports = Session;
