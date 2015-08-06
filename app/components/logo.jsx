var React = require('react');
import { Link, RouteHandler } from 'react-router';

var Logo = React.createClass({
  handleClick() {
    store.isNavShowing = false;
  },

 render() {
    var logoClass = this.props.class ? ' nav' : '';
    return (
      <Link
        className={'logo ' + logoClass}
        to='home'
        tabIndex='-1'
        onClick={this.handleClick}
      >
        <h1 className='name'>Joshua Richey</h1>
      </Link>
    );
  }
});

export default Logo;