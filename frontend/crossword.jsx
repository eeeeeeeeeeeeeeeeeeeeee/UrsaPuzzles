var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var root = document.getElementById('content');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

// document.addEventListener("DOMContentLoaded", function () {
//   ReactDOM.render(<Search/>, document.getElementById('root'));
// });


var App = React.createClass({
  render: function(){
    return (
      <div>
        <header><h1>Crossword!!!</h1></header>
        <h2>Crossword!</h2>
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    // <IndexRoute component={Home}/>
    // <Route path="game/:gameId" component={GameContainer}/>

    // <Route path="benches/:benchId" component={BenchShow}>
    //   <Route path="review" components={ReviewForm}/>
    // </Route>
  </Route>
);
ReactDOM.render(<Router>{routes}</Router>, root);
