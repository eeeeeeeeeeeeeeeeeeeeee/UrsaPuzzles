var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var root = document.getElementById('content');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Search/>, document.getElementById('root'));
});


// var App = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <header><h1>Bench BnB</h1></header>
//         {this.props.children}
//       </div>
//     );
//   }
// });

// var routes = (
//   <Route path="/" component={App}>
//     <IndexRoute component={Search}/>
//     <Route path="benches/new" component={BenchForm}/>
//     <Route path="benches/:benchId" component={BenchShow}>
//       <Route path="review" components={ReviewForm}/>
//     </Route>
//   </Route>
// );
// ReactDOM.render(<Router>{routes}</Router>, root);
