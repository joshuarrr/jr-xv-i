var React = require('react');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
import store from '../store';
import { Link, RouteHandler } from 'react-router';

var siteLinks = [
  {
    to: 'guide',
    title: 'style guide'
  }, {
    to: 'art',
    title: 'art'
  }, {
    to: 'ig',
    title: 'ig'
  }, {
    to: 'home',
    title: 'about'
  }
];

var NavLinks = React.createClass({
  render: function() {
    var links = siteLinks.map(function (link) {
      return (
        <li className="site-nav-item" key={link.to}>
          <Link className="site-nav-link" to={link.to} tabIndex="3">{link.title}</Link>
        </li>
      )
    });

    return (
      <ReactCSSTransitionGroup transitionName='slide-in'>
        {
        store.isNavShowing &&
        <ul className='site-nav-links'>
          { links }
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