var React = require('react');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
import store from '../store';
import { Link, RouteHandler } from 'react-router';

var NavLinks = React.createClass({
  render: function() {
    return (
      <ReactCSSTransitionGroup transitionName='slide-in'>
        {
        store.isNavShowing &&
        <ul key="nav" className='site-nav-links'>
          <li className="site-nav-item">
            <Link className="site-nav-link" to='guide' tabIndex="3">style guide</Link>
          </li>
          <li className="site-nav-item">
            <Link className="site-nav-link" to='home' tabIndex="2">about</Link>
          </li>
        </ul>
      }
      </ReactCSSTransitionGroup>
    );
  }
});

// Primary Nav //
var Nav = React.createClass({
  toggleNav() {
      store.isNavShowing = !store.isNavShowing;
  },
  render() {
    var style = {
      color: '#fff',
      width: '24px',
      height: '24px'
    };
    return (
      <nav className='site-nav'>
        <NavLinks />
        <a className='nav-toggle' style={style} onClick={this.toggleNav} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-289 381 32 32" enable-background="new -289 381 32 32">
            <path className="menu-icon" d="M-261 386.9c.5 0 1 .5 1 1s-.5 1-1 1h-24c-.5 0-1-.5-1-1s.5-1 1-1h24m0-2h-24c-1.6 0-3 1.4-3 3s1.4 3 3 3h24c1.6 0 3-1.4 3-3s-1.4-3-3-3zM-261 396c.5 0 1 .5 1 1s-.5 1-1 1h-24c-.5 0-1-.5-1-1s.5-1 1-1h24m0-2h-24c-1.6 0-3 1.4-3 3s1.4 3 3 3h24c1.6 0 3-1.4 3-3s-1.4-3-3-3zM-261 405.1c.5 0 1 .5 1 1s-.5 1-1 1h-24c-.5 0-1-.5-1-1s.5-1 1-1h24m0-2h-24c-1.6 0-3 1.4-3 3s1.4 3 3 3h24c1.6 0 3-1.4 3-3s-1.4-3-3-3z"/>
          </svg>
        </a>
      </nav>
    )
  }
});

module.exports = Nav;