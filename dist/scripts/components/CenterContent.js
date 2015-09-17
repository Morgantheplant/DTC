var React = require('react');
var ReactRouter = require('react-router')
var Link = ReactRouter.Link

var CenterContent = React.createClass({
  render: function() {
    return (
      <section>
       <div className="jumbotron main-hero-quote-area">
         <div className="container">
          <p>"A city is only as big<br /> as you <br/> want to make"</p>
        </div>
       </div>
       <div className="container main-landing-page-buttons">
         <div className="row">
           <div className="col-sm-4 description-elements"><p><i className="fa fa-cutlery"></i></p><p>Food</p></div>
           <div className="col-sm-4 description-elements"><p><i className="fa fa-glass"></i></p><p>Drink</p></div>
           <div className="col-sm-4 description-elements"><p><i className="fa fa-map-o"></i></p><p>Fun Stuff</p></div>
         </div>
       </div>
      </section>
    )
  }
})

module.exports = CenterContent;