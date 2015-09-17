var React = require('react');
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var CenterContent = require('./CenterContent');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <CenterContent />
           { /* refactor this out later */ }
          <div className="container-fluid">

            <section className="row content"> 
              <div className="col-sm-5 content-assets asset1"></div>
              <div className="col-sm-7 content-text"><h2>This is a heading</h2> Bacon ipsum dolor amet doner pastrami salami frankfurter. Meatball fatback brisket chuck, cupim boudin tail bresaola. Meatloaf bacon tri-tip sirloin. Frankfurter chuck shank ribeye, tail sausage shoulder hamburger corned beef capicola filet mignon pastrami meatloaf spare ribs venison.</div>
            </section>
            
            <section className="row content"> 
              <div className="col-sm-7 content-text"><h2>This is a heading</h2> Bacon ipsum dolor amet doner pastrami salami frankfurter. Meatball fatback brisket chuck, cupim boudin tail bresaola. Meatloaf bacon tri-tip sirloin. Frankfurter chuck shank ribeye, tail sausage shoulder hamburger corned beef capicola filet mignon pastrami meatloaf spare ribs venison. </div>
              <div className="col-sm-5 content-assets asset2"></div>
            </section>
            
            <section className="row content"> 
                <div className="col-sm-5 content-assets asset3"></div>
                <div className="col-sm-7 content-text"> <h2>This is a heading</h2> Bacon ipsum dolor amet doner pastrami salami frankfurter. Meatball fatback brisket chuck, cupim boudin tail bresaola. Meatloaf bacon tri-tip sirloin. Frankfurter chuck shank ribeye, tail sausage shoulder hamburger corned beef capicola filet mignon pastrami meatloaf spare ribs venison.</div>
            </section>
             { /* refactor this out later */ }
          </div>
      </div>
    )
  }
})

module.exports = Home;