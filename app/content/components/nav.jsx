var React = require('react');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
import store from '../../store';
import { Link, RouteHandler } from 'react-router';

var siteLinks = [
  {
    to: 'thoughts',
    title: 'thoughts'
  }, {
    to: 'instagram',
    title: 'pictures'
  }, {
    to: 'design',
    title: 'design'
  }, {
    to: 'art',
    title: 'art'
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
      <ReactCSSTransitionGroup transitionName='slide-in' transitionAppear={true} >
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

var NavToggle = React.createClass({
  toggleNav() {
    store.isNavShowing = !store.isNavShowing;
  },

  render: function() {
    var navClasses = store.isNavShowing ? "is-active" : "";
    navClasses += ' nav-toggle';
    return (
      <button className={navClasses} onClick={this.toggleNav}>
        <span className='inner'>toggle menu</span>
      </button>
    );
  }
});

// Primary Nav //
var Nav = React.createClass({

  render() {
  // console.log('nav.js isNavShowing = ' + store.isNavShowing);
    return (
      <nav className='site-nav'>
        <NavLinks />
        <NavToggle />
      </nav>
    )
  }
});

module.exports = Nav;