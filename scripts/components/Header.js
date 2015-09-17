var React = require('react');
var ReactRouter = require('react-router')
var Link = ReactRouter.Link

var Header = React.createClass({
    render: function(){
	  	return (
			<nav className="navbar navbar navbar-default navbar-fixed-top" role="navigation">
				  <div className="container">

				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      
				      <div className="navbar-brand navbar-brand-centered">
				        <Link to="/"><img className="title-logo" src="./images/dtc.png" /></Link>
				      </div>
				    </div>

				    <div className="collapse navbar-collapse" id="navbar-brand-centered">
				      <ul className="nav navbar-nav">
				        <li><Link to="nightsout">NIGHTS OUT</Link></li>
				        <li><Link to="syn">STUFF YOU NEED</Link></li>
				      </ul>
				      <ul className="nav navbar-nav navbar-right">
				        <li><Link to="social">SOCIAL</Link></li>
				        <li><Link to="contact">CONTACT</Link></li>		        
				      </ul>
				    </div>
				  </div>
			</nav>
		);
    }
});



module.exports = Header;