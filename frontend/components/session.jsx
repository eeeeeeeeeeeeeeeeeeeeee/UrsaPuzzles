var React = require('react');
var SessionStore = require('../stores/session');
var ApiUtil = require('../util/api_util');

var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Link = require('react-router').Link;

var Session = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return ({ username: "", password: "" });
  },

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this._sessionChanged);
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
  },

  _sessionChanged: function() {
    if(SessionStore.hasCurrentUser()) {
      this.history.push('/');
    }
  },

  loginDemoUser: function() {
    ApiUtil.signIn({ username: "Demo User", password: "password" });
  },

  handleSubmit: function(e) {
    console.log('submit');
		e.preventDefault();
    ApiUtil.signUp(this.state);
	},

  update: function(field) {
		return function(e) { this.setState({[field]: e.currentTarget.value}) }.bind(this);
	},

  render: function() {
    var formLabel = "Log In";
    var toggleText = (
      <div>
        New user? <Link className="user-link" to="/signup">Create account here.  </Link>
      Or, sign-in as <span className="user-link" onClick={this.loginDemoUser}>demo user</span>.
      </div>
    );

    if(this.props.route.path === "/signup") {
      formLabel = "Sign Up";
      toggleText = (
        <div>
          Already have an account? <Link className="user-link" to="/login">Sign in here.  </Link>
        </div>
      );
    }

    return (
      <div className="user-login-page">
        <div className="text-center user-login">
          <div className="explanation">
            Ursa Puzzles is an interactive crossword-playing web app built with Ruby on Rails and React.js
          </div>

          <div className="sign-up-form">
            <h1>{ formLabel }</h1>
            <div className="errors-div"></div>

            <form className="form-group has-feedback" onSubmit={this.handleSubmit} >
              <div className="input-group">
                <span className="input-group-addon">
                  <span className="glyphicon glyphicon-user"></span>
                </span>
                <input className="form-control" type="text" placeholder="username" onChange={this.update("username")} />
              </div>

              <br/>

              <div className="input-group">
                <span className="input-group-addon">
                  <span className="glyphicon glyphicon-lock"></span>
                </span>
                <input className="form-control" type="password" placeholder="password" onChange={this.update("password")} />
              </div>

              <br/>
              <br/>

              <div>
                <input className="form-control sign-in-button" type="submit" value={ formLabel } />
              </div>

            </form>
            { toggleText }
          </div>

        </div>
      </div>

    );
  }
});

module.exports = Session;
