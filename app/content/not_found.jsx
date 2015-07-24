var React = require('react');

var NotFound = React.createClass({
  render: function() {
    return (
      <div className='page'>
        <div className="not-found text-measure intro">
          <h1>lost</h1>
          <p>Sorry, there’s nothing here to be found.</p>
        </div>
      </div>
    );
  }
});

export default NotFound;