var React = require('react');

import { Link, RouteHandler } from 'react-router';
import navLinkList from '../data/nav_links.js';
import store from '../store';

var NavLinks = React.createClass({
  hideNav() {
    if (store.isMobile) {
      store.isNavShowing = false;
    }
  },

  render: function() {
  var self = this;
  // console.log('mobile = ' + store.isMobile);
    var infiniClass = store.isInfinigramming ? " is-gramming" : "";
    var links = navLinkList.map(function (l) {
      return (
        <li className="nav-item" key={l.to}>
          <Link
            className="nav-link"
            onClick={() => self.hideNav()}
            to={l.to}
            tabIndex="3"
          >
            {l.title}
          </Link>
        </li>
      )
    });
    return (
      <ul key='navLinks' className={'nav-links' + infiniClass}>
        { links }
      </ul>
    );
  }
});

// Primary Nav //
var Nav = React.createClass({
  render() {
    var mqclass = this.props.mq;
    return (
      <nav className={'nav ' + mqclass}>
        <NavLinks />
      </nav>
    )
  }
});

module.exports = Nav;