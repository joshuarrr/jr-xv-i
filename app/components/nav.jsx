var React = require('react');
import { Link, RouteHandler } from 'react-router';
import navLinkList from '../data/nav_links.js';
import store from '../store';
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import 'velocity-animate/velocity.ui';

// Blurred Background //
var BlurredBackground = React.createClass({
  getInitialState: function() {
    return {scrollPos: window.scrollY};
  },

  handleKeyup: function(e) {
    if (e.keyCode == 27) {
        store.isNavExpanded = false;
    }
  },

  handleScroll: function(e) {
    this.setState({scrollPos: window.scrollY});

    // Sync scroll position
      var dupe = React.findDOMNode(this.refs.dupe);
      dupe.scrollTop = this.state.scrollPos;
  },

  componentDidMount: function() {
    // Listen for escape key
    window.addEventListener('keyup', this.handleKeyup);

    // Listen for scroll
    window.addEventListener('scroll', this.handleScroll);

    // Position the dupe according to current scroll (since it's fixed)
    var dupe = React.findDOMNode(this.refs.dupe);
    console.log('dupe = ' + dupe);
    dupe.scrollTop = this.state.scrollPos;
  },

  componentWillUnmount: function() {
    window.removeEventListener('keyup', this.handleKeyup);
    window.removeEventListener('scroll', this.handleScroll);
  },

  render: function() {
    var navState = store.isNavExpanded ? ' is-expanded' : '';
    return (

        <RouteHandler ref='dupe' dupe='true' />
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
        {
          isExpanded &&
                <VelocityTransitionGroup
        className={'blurred-container'}

        enter={{opacity: [1, 0]}}
        leave={{opacity: [0, 1]}}
        defaults={{
          duration: 5000,
          delay: 0
        }}
      >
          <BlurredBackground />
      </VelocityTransitionGroup>

        }
      </span>
    )
  }
});

module.exports = Nav;