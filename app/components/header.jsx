var React = require('react');
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import 'velocity-animate';
import Nav from './nav.jsx';
import Logo from './logo.jsx';
import store from '../store';

var NavToggle = React.createClass({
  toggleNav() {
    store.isNavExpanded = !store.isNavExpanded;
    // console.log('After toggle, isNavShowing = ' + store.isNavShowing);
  },

  render: function() {
    var isExpanded = store.isNavExpanded ? " is-expanded" : "";
    return (
      <button className={'nav-toggle' + isExpanded} onClick={this.toggleNav}>
        <span className='inner'>toggle menu</span>
      </button>
    );
  }
});

var Header = React.createClass({
  render: function() {
    // console.log('header render, isNavShowing = ' + store.isNavShowing);
    return (
      <header className={ this.props.class}>
        {/* Animate the Logo */}
        <VelocityTransitionGroup
          className='logo-wrap'
          appear={{scale: [1, .9], opacity: [1, 0]}}
          enter="transition.fadeIn"
          enterOptions={{delay: 300}}
          defaults={{duration: 1000}}
        >
          <Logo />
        </VelocityTransitionGroup>
        <NavToggle />
        <Nav mq={this.props.mq} />
      </header>
    );
  }
});

export default Header;