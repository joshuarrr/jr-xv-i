var React = require('react');
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import 'velocity-animate';
import Nav from './nav.jsx';
import Logo from './logo.jsx';
import store from '../store';

var NavToggle = React.createClass({
  toggleNav() {
    store.isNavShowing = !store.isNavShowing;
    console.log('After toggle, isNavShowing = ' + store.isNavShowing);
  },

  render: function() {
    var navClasses = store.isNavShowing ? " is-active" : "";
    return (
      <button className={'nav-toggle' + navClasses} onClick={this.toggleNav}>
        <span className='inner'>toggle menu</span>
      </button>
    );
  }
});

var Header = React.createClass({
  render: function() {
    console.log('header render, isNavShowing = ' + store.isNavShowing);
    return (
        <header className={ this.props.class}>
          {/* Animate the Nav */}
          <VelocityTransitionGroup
            appear={true}
            enter="transition.bounceDownIn"
            leave="transition.bounceUpOut"
            duration={500}
            defaults={{
                stagger: false,
                delay: 100
            }}
          >
          {
            store.isNavShowing &&
            <Nav mq={this.props.mq} />
          }
          </VelocityTransitionGroup>

          {/* Animate the Logo */}
          <VelocityTransitionGroup
            appear="transition.fadeIn"
            enter="transition.fadeIn"
            enterOptions={{delay: 100}}
            defaults={{duration: 1000}}
          >
            <Logo />
          </VelocityTransitionGroup>
          <NavToggle />
        </header>
    );
  }
});

export default Header;