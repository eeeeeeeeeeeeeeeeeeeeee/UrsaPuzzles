var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var History = require('react-router').History;

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Home = require('./components/home');
var GameContainer = require('./components/game_container');
var SessionStore = require('./stores/session');
var Session = require('./components/session');

var App = React.createClass({
  mixins: [History],

  render: function(){
    return (
      <div className="app-container">
        {this.props.children}
      </div>
    );
  }
});

var _ensureLoggedIn = function(nextState, replaceState) {
  if (!SessionStore.isLoggedIn()) {
    replaceState({ nextPathname: nextState.location.pathname }, "/login");
  }
};

var _redirectIfLoggedIn = function(nextState, replaceState) {
  console.log("logged in");
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

