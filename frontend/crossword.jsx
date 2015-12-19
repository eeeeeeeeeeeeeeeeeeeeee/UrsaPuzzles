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


window.apiUtil = ApiUtil;
window.apiActions = ApiActions;
window.puzzleStore = PuzzleStore;
window.gameStore = GameStore;
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
    <Route path="home" component={Home}/>
    <Route path="puzzle/player" component={GameContainer}/>
  </Route>
);



ReactDOM.render(<Router>{routes}</Router>, root);
