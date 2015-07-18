var React = require('react');

var NotFound = React.createClass({
  render: function() {
    return (
      <div className="not-found text-measure intro">
        <h1>There is nothing to be found here.</h1>
        <p>Sorry.</p>
      </div>
    );
  }
});

export default NotFound;