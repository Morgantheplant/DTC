var React = require('react');
var ReactRouter = require('react-router')
var Link = ReactRouter.Link

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="container">
        <div className="footer-buttons">
          <div className="col-sm-4">About</div>
          <div className="col-sm-4">Contact</div>
          <div className="col-sm-4">
            <p>Social</p>
            <p className="footer-social-icons">
              <i className="fa fa-facebook-square"></i>
              <i className="fa fa-twitter-square"></i>
              <i className="fa fa-instagram"></i></p>
          </div>
        </div>
      </footer>
    )
  }
})

module.exports = Footer;