var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var root = document.getElementById('content');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Home = require('./components/home');

var ApiUtil = require('./util/api_util');
var ApiActions = require('./actions/api_actions');
var GameContainer = require('./components/game_container');
var PuzzleStore = require('./stores/puzzle');
var GameStore = require('./stores/game');
var CurrentSquareStore = require('./stores/current_square');
var UserStore = require('./stores/user');


window.apiUtil = ApiUtil;
window.apiActions = ApiActions;
window.PuzzleStore = PuzzleStore;
window.GameStore = GameStore;
window.UserStore = UserStore;
window.currentSquareStore = CurrentSquareStore;
window.gameContainer = GameContainer;



var App = React.createClass({

  render: function(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="puzzle/:id" component={GameContainer}/>
  </Route>
);

ReactDOM.render(<Router>{routes}</Router>, root);
