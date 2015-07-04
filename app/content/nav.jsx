var React = require('react');
import store from '../store';
import { Link, RouteHandler } from 'react-router';

// Using classnames utility to more easily create conditional class names;
// see https://github.com/JedWatson/classnames
var cx = require('classnames');

var NavLinks = React.createClass({
  render: function() {
    var classNames = cx({
      "site-nav-links": true,
      "active": this.props.active
    });
    return (
      <ul className={classNames}>
        <li className="site-nav-item"><Link className="site-nav-link" to='guide' tabIndex="3">style guide</Link></li>
        <li className="site-nav-item"><Link className="site-nav-link" to='about' tabIndex="2">about</Link></li>
        <li className="site-nav-item"><Link className="site-nav-link" to='home' tabIndex="1">home</Link></li>
      </ul>
    );
  }
});

// Primary Nav //
var Nav = React.createClass({
  getInitialState: function() {
    return { question: 'a' };
  },

  toggleNav: function() {
    // this.setState({clicked: this.state.clicked && true }); //
    this.setState({question: this.state.question === 'a' ? 'b' : 'a' });
  },

  render() {
    // This is how you do basic inline styles.
    // Radium is probably the way to go, but no css syntax yet -jrr
    var style = {
      color: '#fff',
      width: '24px',
      height: '24px'
    };

    var classNames = cx({
      "site-nav": true,
      "active": this.props.active
    });

    return (
      <nav className={classNames}>
        <NavLinks active={this.state.question === 'b'} />
        <a className='nav-toggle' style={style} onMouseEnter={this.toggleNav} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-289 381 32 32" enable-background="new -289 381 32 32">
            <path className="menu-icon" d="M-261 386.9c.5 0 1 .5 1 1s-.5 1-1 1h-24c-.5 0-1-.5-1-1s.5-1 1-1h24m0-2h-24c-1.6 0-3 1.4-3 3s1.4 3 3 3h24c1.6 0 3-1.4 3-3s-1.4-3-3-3zM-261 396c.5 0 1 .5 1 1s-.5 1-1 1h-24c-.5 0-1-.5-1-1s.5-1 1-1h24m0-2h-24c-1.6 0-3 1.4-3 3s1.4 3 3 3h24c1.6 0 3-1.4 3-3s-1.4-3-3-3zM-261 405.1c.5 0 1 .5 1 1s-.5 1-1 1h-24c-.5 0-1-.5-1-1s.5-1 1-1h24m0-2h-24c-1.6 0-3 1.4-3 3s1.4 3 3 3h24c1.6 0 3-1.4 3-3s-1.4-3-3-3z"/>
          </svg>
        </a>
      </nav>
    )
  }
});

module.exports = Nav;