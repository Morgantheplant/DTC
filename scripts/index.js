var React = require('react');
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var IndexRoute = ReactRouter.IndexRoute
var Link = ReactRouter.Link
var App = require('./components/App')
var Home = require('./components/Home');
var NightsOut = require('./components/NightsOut');
var Social = require('./components/Social');
var Contact = require('./components/Contact');
var SYN = require('./components/SYN');

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
React.render((
  <Router>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="nightsout" component={ NightsOut } />
      <Route path="syn" component={ SYN } />
      <Route path="social" component={ Social } />
      <Route path="contact" component={ Contact } />
    </Route>
  </Router>
), document.getElementById('root'))