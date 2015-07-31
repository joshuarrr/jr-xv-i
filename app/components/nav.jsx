var React = require('react');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
import { Link, RouteHandler } from 'react-router';
import navLinkList from '../data/nav_links.js';
import store from '../store';

var NavLinks = React.createClass({

  render: function() {
    var infiniClass = store.isInifigramming ? " is-infinigramming" : "";
    console.log('NavLinks infini = ' + store.isInifigramming);
    var links = navLinkList.map(function (l) {
      return (
        <li className="nav-item" key={l.to}>
          <Link
            className="nav-link"
            to={l.to} tabIndex="3">
            {l.title}
          </Link>
        </li>
      )
    });

    return (
      <ReactCSSTransitionGroup transitionName='slide-in' transitionAppear={true} >
        {
        store.isNavShowing &&
        <ul key='navLinks' className={'nav-links' + infiniClass}>
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
    // console.log('After toggle, isNavShowing = ' + store.isNavShowing);
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
    return (
      <nav className='nav'>
        <NavLinks />
        <NavToggle />
      </nav>
    )
  }
});

module.exports = Nav;