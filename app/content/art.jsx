var React = require('react');
import styles from '../styles/art.css';
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');

var Art = React.createClass({
  render: function() {
    return (
      <div className="page">
        <ReactCSSTransitionGroup transitionName='fade-in' transitionAppear={true}>
          <div className="art text-measure">
            <h1 className="intro">art</h1>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

module.exports = Art;