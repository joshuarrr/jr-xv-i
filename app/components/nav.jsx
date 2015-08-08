var React = require('react');
import { Link, RouteHandler } from 'react-router';
import navLinkList from '../data/nav_links.js';
import store from '../store';

var NavLinks = React.createClass({
  handleClick() {
    store.isNavExpanded = false;
    // console.log('hideNav = ' + store.isNavShowing);
  },

  render: function() {
  var self = this;
  // console.log('mobile = ' + store.isMobile);
    var links = navLinkList.map(function (l) {
      return (
        <li className="nav-item" key={l.to}>
          <Link
            className="nav-link"
            onClick={self.handleClick}
            to={l.to}
            tabIndex="3"
          >
            {l.title}
          </Link>
        </li>
      )
    });
    return (
      <ul key='navLinks' className='nav-links'>
        { links }
      </ul>
    );
  }
});

var Blurrer = React.createClass({
  componentWillUpdate: function() {
    if (store.isNavExpanded) {
      var content = document.querySelector('.page');
      content.className += ' blurred-content';
      var duplicate = content.cloneNode(true);

      var where = document.querySelector('.blurred-container');
      var dupe = where.appendChild(duplicate);
      // console.log('Content duplicated');
    }

     else {
      var where = document.querySelector('.blurred-container');
      var dupe = document.querySelector('.blurred-content')
      if (dupe) { where.removeChild(dupe); }
      // console.log('Duplicate removed.');
    }
  },

  render: function() {
    var navState = store.isNavExpanded ? ' is-expanded' : '';
    return (
      <div className={'blurred-container' + navState}>
        { store.isNavExpanded && this.dupe}
      </div>
    );
  }
});


// Primary Nav //
var Nav = React.createClass({
  render() {
    var isGramming = store.isInfinigramming ? " is-gramming" : "";
    var mqclass = this.props.mq;
    var isExpanded = store.isNavExpanded ? ' is-expanded' : '';
    return (
      <nav className={'nav ' + mqclass + isGramming + isExpanded}>
        <NavLinks />
        <Blurrer />
      </nav>
    )
  }
});

module.exports = Nav;