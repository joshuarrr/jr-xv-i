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
  getInitialState: function() {
      return {
          on: false
      };
  },

  toggleNav() {
      store.isNavShowing = !store.isNavShowing;
      this.setState({on: !this.state.on});
  },
  render() {
    var className = this.state.on ? "is-active" : "";
    className += " nav-toggle";

    return (
      <nav className='site-nav'>
        <NavLinks />
        <button className={className} onClick={this.toggleNav}>
          <span className='inner'>toggle menu</span>
        </button>
      </nav>
    )
  }
});

module.exports = Nav;