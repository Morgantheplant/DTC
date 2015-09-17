var React = require('react');
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var Header = require('./Header');
var CenterContent = require('./CenterContent');
var Footer = require('./Footer');

var Contact = React.createClass({
  render: function() {
    return (
      <div>
       <h1>Contact</h1>
      </div>
    )
  }
})

module.exports = Contact;