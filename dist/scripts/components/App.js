var React = require('react');
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var Header = require('./Header');
var CenterContent = require('./CenterContent');
var Footer = require('./Footer');

/*     <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
*/

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
})

module.exports = App;