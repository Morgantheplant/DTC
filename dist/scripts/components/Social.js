var React = require('react');
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var Header = require('./Header');
var CenterContent = require('./CenterContent');
var Footer = require('./Footer');

var Social = React.createClass({
  render: function() {
    return (
      <div>
       <h1>Social</h1>
      </div>
    )
  }
})

module.exports = Social;