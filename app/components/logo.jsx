var React = require('react');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
import { Link, RouteHandler } from 'react-router';

var Logo = React.createClass({
  handleClick() {
      store.isSquished = !store.isSquished;
  },

 render() {
    return (
      <ReactCSSTransitionGroup transitionName='logo-fade-in' transitionAppear={true}>
        <Link
          className='logo'
          to='home'
          tabIndex='-1'
          onClick={this.handleClick}
        >
          <h1 className='name'>Joshua Richey</h1>
        </Link>
      </ReactCSSTransitionGroup>

    );
  }
});

export default Logo;