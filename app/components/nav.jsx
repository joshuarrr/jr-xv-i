var React = require('react');
import { Link, RouteHandler } from 'react-router';
import navLinkList from '../data/nav_links.js';
import store from '../store';
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import 'velocity-animate/velocity.ui';

// Blurred Background //
var BlurredBackground = React.createClass({
  getInitialState: function() {
    return {
      scrollPos: window.scrollY
    };
  },

  handleKeyup: function(e) {
    if (e.keyCode == 27) {
        store.isNavExpanded = false;
    }
  },

  handleScroll: function(e) {
    this.setState({scrollPos: window.scrollY});

    // Sync scroll position
    if (store.isNavExpanded) {
      var dupe = React.findDOMNode(this.refs.dupe);
      dupe.scrollTop = this.state.scrollPos;
    }
  },

  componentDidMount: function() {
    // Listen for escape key
    window.addEventListener('keyup', this.handleKeyup);

    // Listen for scroll
    window.addEventListener('scroll', this.handleScroll);

    // Create a duplicate of the mounted dom node
    var nodeToDuplicate = document.querySelector('.page');
    var duplicate = nodeToDuplicate.cloneNode(true);

    // Add the duplicate
    var duplicateContainer = document.querySelector('.blurred-container');
    duplicateContainer.appendChild(duplicate)

    // Position it according to current scroll (since it's fixed)
    duplicateContainer.scrollTop = this.state.scrollPos;
  },

  componentWillUnmount: function() {
    window.removeEventListener('keyup', this.handleKeyup);
    window.removeEventListener('scroll', this.handleScroll);
  },

  render: function() {
    var isExpanded = store.isNavExpanded ? ' is-expanded' : '';

    return (
      <VelocityTransitionGroup
        className="duplicate-animation-wrapper"
        appear="transition.fadeIn"
        enter="transition.fadeIn"
        leave="transition.fadeOut"
        defaults={{
          duration: 2000,
          delay: 0
        }}
      >
      {
        store.isNavExpanded &&
        <div className={'blurred-container' + isExpanded} ref='dupe' />
      }
      </VelocityTransitionGroup>
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
        <BlurredBackground className="duplicatePage" />
      </span>
    )
  }
});

module.exports = Nav;