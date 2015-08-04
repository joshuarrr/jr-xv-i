var React = require('react');
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import 'velocity-animate/velocity.ui';

var Design = React.createClass({
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
          <div className="design text-measure">
            <h1 className="intro">design</h1>
            <p className="intro">This section is coming soon.</p>
          </div>
        </div>
      </VelocityTransitionGroup>
    );
  }
});

module.exports = Design;