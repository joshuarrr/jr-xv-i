var React = require('react');
import styles from '../styles/art.css';
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import 'velocity-animate/velocity.ui';

var Art = React.createClass({
  render: function() {
    return (
      <VelocityTransitionGroup
        appear="transition.fadeIn"
        enter="transition.fadeIn"
        leave="transition.fadeOut"
        defaults={{
          duration: 2000,
          delay: 0
        }}
      >
        <div className="page">
          <div className="art text-measure">
            <h1 className="intro">art</h1>
          </div>
        </div>
      </VelocityTransitionGroup>
    );
  }
});

module.exports = Art;