var React = require('react');
import styles from '../styles/art.css';
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');

var Design = React.createClass({
  render: function() {
    return (
      <div className="page">
        <ReactCSSTransitionGroup transitionName='fade-in' transitionAppear={true}>
          <div className="art text-measure">
            <h1 className="intro">design</h1>
            <p className="intro">This section is coming soon.</p>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

module.exports = Design;