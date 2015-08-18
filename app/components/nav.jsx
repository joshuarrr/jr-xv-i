var React = require('react');
import { Link, RouteHandler } from 'react-router';
import navLinkList from '../data/nav_links.js';
import store from '../store';

// Nav Links //
var NavLinks = React.createClass({
  handleClick() {
    store.isNavExpanded = false;
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


// Primary Nav //
var Nav = React.createClass({
  render() {
    var isGramming = store.isInfinigramming ? " is-gramming" : "";
    var mqclass = this.props.mq;
    var isExpanded = store.isNavExpanded ? ' is-expanded' : '';

    return (
      <span className={'nav-wrapper' + isExpanded}>
        <nav className={'nav ' + mqclass + isGramming + isExpanded}>
          <NavLinks />
        </nav>
      </span>
    )
  }
});

module.exports = Nav;