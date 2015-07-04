var React = require('react');

var About = React.createClass({
  render: function () {
    return (
        <div className="about text-measure intro">
          <h1>joshuar</h1>
          <p>AKA Josh, or Joshua Richey. A designer and visual craftsman living in Portland, Oregon, and
            working at <a href="http://idealist.org" target="_blank">Idealist</a>.
          </p>
        </div>
    );
  }
});

module.exports = About;