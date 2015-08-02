var React = require('react');
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
  componentWillMount: function() {
    this.setMobile(this.props.isMobile);
    // console.log('props = ' + this.props.isMobile);
  },

  setMobile(val) {
    store.isMobile = this.props.isMobile;
    // console.log('seMobile = ' + store.isMobile);
  },

  render: function() {
    console.log('header render, isNavShowing = ' + store.isNavShowing);
    // console.log('store = ' + store.isMobile);
    var classes = store.isNavShowing ? ' open' : ' closed';
    return (
      <span>
        <header className={ this.props.class + classes}>
          <Nav />
          <Logo />
        </header>
        <NavToggle />
      </span>
    );
  }
});

export default Header;