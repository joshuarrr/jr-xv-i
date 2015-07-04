var React = require('react');
import store from '../store';
import { Link, RouteHandler } from 'react-router';

// Primary Nav //
var Nav = React.createClass({
    render() {
    var style = {
      color: '#444',
      width: '36px',
      height: '36px'
    };
      return (
        <nav className='site-nav'>
          <ul>
            <li><Link to='home'>home</Link></li>
            <li><Link to='about'>about</Link></li>
            <li><Link to='guide'>style guide</Link></li>
          </ul>
          <div className='nav-toggle' style={style}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-289 381 32 32" enable-background="new -289 381 32 32">
              <path className="menu-icon" d="M-261 386.9c.5 0 1 .5 1 1s-.5 1-1 1h-24c-.5 0-1-.5-1-1s.5-1 1-1h24m0-2h-24c-1.6 0-3 1.4-3 3s1.4 3 3 3h24c1.6 0 3-1.4 3-3s-1.4-3-3-3zM-261 396c.5 0 1 .5 1 1s-.5 1-1 1h-24c-.5 0-1-.5-1-1s.5-1 1-1h24m0-2h-24c-1.6 0-3 1.4-3 3s1.4 3 3 3h24c1.6 0 3-1.4 3-3s-1.4-3-3-3zM-261 405.1c.5 0 1 .5 1 1s-.5 1-1 1h-24c-.5 0-1-.5-1-1s.5-1 1-1h24m0-2h-24c-1.6 0-3 1.4-3 3s1.4 3 3 3h24c1.6 0 3-1.4 3-3s-1.4-3-3-3z"/>
            </svg>
          </div>
        </nav>
      );
    }
});

module.exports = Nav;