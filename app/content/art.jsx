var React = require('react');
import styles from '../styles/art.css';

var Art = React.createClass({
  render: function() {
    return (
      <div className="page">
        <div className="art text-measure">
          <h1 className="intro">art</h1>
        </div>
      </div>
    );
  }
});

module.exports = Art;