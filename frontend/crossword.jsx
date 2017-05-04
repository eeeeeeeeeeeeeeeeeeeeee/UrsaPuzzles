var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var History = require('react-router').History;

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;

var Home = require('./components/home');
var GameContainer = require('./components/game_container');
var SessionStore = require('./stores/session');
var Session = require('./components/session');
var ApiUtil = require('./util/api_util');

var App = React.createClass({
  mixins: [History],

  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this._sessionChanged);
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
  },

  _sessionChanged: function() {
    if(!SessionStore.hasCurrentUser()) {
      this.history.push('/login');
    }
  },

  render: function(){
    var currentUser = "";

    if(SessionStore.hasCurrentUser() || window.currentUser) {
      currentUser =
        <div className="navbar-details">
          <div className="navbar-details-left">
            <Link to="/">Home</Link>
          </div>
          <div className="navbar-details-right">
            <span>{ window.currentUser || SessionStore.getCurrentUser() }</span>
            <i onClick={ApiUtil.logout} className="fa fa-sign-out" aria-hidden="true"></i>
          </div>
        </div>;
    }

    return (
      <div className="app-container">
        <nav className="navbar navbar-default navbar-fixed-top">
          <Link className="navbar-brand" to="/"><img src={'assets/bear-white.png'} /> URSA Puzzles</Link>
          { currentUser }
        </nav>

        {this.props.children}
      </div>
    );
  }
});

var _ensureLoggedIn = function(nextState, replaceState) {
  if (!window.currentUser && !SessionStore.hasCurrentUser()) {
    replaceState({ nextPathname: nextState.location.pathname }, "/login");
  }
};

var _redirectIfLoggedIn = function(nextState, replaceState) {
  if (window.currentUser) {
    replaceState({ nextPathname: nextState.location.pathname }, "/");
  }
};

var routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} onEnter={ _ensureLoggedIn } />
    <Route path="/login" component={Session} onEnter={ _redirectIfLoggedIn } />
    <Route path="/signup" component={Session} onEnter={ _redirectIfLoggedIn } />
    <Route path="puzzle/:id" component={GameContainer} onEnter={ _ensureLoggedIn }/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));
});

