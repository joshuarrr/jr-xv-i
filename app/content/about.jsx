var React = require('react');

var About = React.createClass({
  render: function () {
    return (
        <div className="about">
          <h1>About me</h1>
          <p>I hate parades.</p>
        </div>
    );
  }
});

module.exports = About;