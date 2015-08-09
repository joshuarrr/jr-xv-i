var React = require('react');
import { Link, RouteHandler } from 'react-router';
import navLinkList from '../data/nav_links.js';
import store from '../store';

// Blurifier //
var Blurifier = React.createClass({
  componentWillUpdate: function() {
    if (store.isNavExpanded) {
      // Create a duplicate of the page and shove it in the blurred container.
      var content = document.querySelector('.page');
      var duplicate = content.cloneNode(true);
      var dupeContainer = document.querySelector('.blurred-container');
      dupeContainer.appendChild(duplicate);

      var yPos = window.scrollY;
      console.log('yPos = ' + yPos);

      dupeContainer.scrollTop = yPos;
      // console.log('Content duplicated');

      var runOnScroll =  function(evt) {
        dupeContainer.scrollTop = yPos;
      };
    }
  },

  componentDidUpdate: function() {
    // sync up the content and blurred-content scroll positions
    var dupeContainer = document.querySelector('.blurred-container');

    window.addEventListener("scroll", function(event) {
      var top = this.scrollY;
      var verticalScroll = document.querySelector(".page");
      // console.log('Scroll Y: ' + top + "px");
      dupeContainer.scrollTop = top;
    }, false);

    //-- Totally not the React way but it works for now  ----------------------/
    // If the nav isn't showing, get rid of the duplicate
    if (!store.isNavExpanded) {
      var where = document.querySelector('.blurred-container');
      var dupe = document.querySelector('.page')

      // Remove the blurred content
      var removeBlur = function() {
        if (dupe) { where.removeChild(dupe); }
      }

      // Set a timeout to allow for the exit transition // super hacky
      window.setTimeout(removeBlur, 1000);

      // console.log('Duplicate removed.');
    }
    //-------------------------------------------------------------------------/
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
        <Blurifier />
      </span>
    )
  }
});

module.exports = Nav;