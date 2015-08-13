var React = require('react');
import { Link, RouteHandler } from 'react-router';
import navLinkList from '../data/nav_links.js';
import store from '../store';

// Blurred Background //
var BlurredBackground = React.createClass({

  handleKeyup: function(e) {
    if (e.keyCode == 27) {
        store.isNavExpanded = false;
    }
  },

  componentDidMount: function() {
    window.addEventListener('keyup', this.handleKeyup);

    var dupeContainer = document.querySelector('.blurred-container');
      // Create a duplicate of the page and shove it in the blurred container.
      var content = document.querySelector('.page');
      var duplicate = content.cloneNode(true);
      var dupeContainer = document.querySelector('.blurred-container');
      // Add the duplicate content
      dupeContainer.appendChild(duplicate);

      // position it according to current scroll (since it's fixed)
      var yPos = window.scrollY;
      dupeContainer.scrollTop = yPos;
  },

  componentWillUnmount: function() {
    window.removeEventListener('keyup', this.handleKeyup);
  },

  render: function() {
    var navState = store.isNavExpanded ? ' is-expanded' : '';
    return (
      <div className={'blurred-container' + navState}>
        { store.isNavExpanded && this.dupe }
      </div>
    );
  }
});


// Nav Links //
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
        <BlurredBackground />
      </span>
    )
  }
});

module.exports = Nav;