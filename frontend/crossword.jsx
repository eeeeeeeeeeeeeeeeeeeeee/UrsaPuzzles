var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var History = require('react-router').History;

var root = document.getElementById('content');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Home = require('./components/home');
var GameContainer = require('./components/game_container');
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

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="puzzle/:id" component={GameContainer}/>
  </Route>
);

ReactDOM.render(<Router>{routes}</Router>, root);
