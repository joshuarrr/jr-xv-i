var React = require('react');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');

var StyleGuide = React.createClass({
  render: function () {
    return (
      <ReactCSSTransitionGroup transitionName='fade-in' transitionAppear={true}>
        <div className='style-guide'>
          <h1>Style Guide</h1>
          <h3>Fade in at Initial Mount</h3>
          <p>Boilerplate.</p>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
});

module.exports = StyleGuide;