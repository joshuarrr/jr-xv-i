var React = require('react');

import Nav from './nav.jsx';
import Logo from './logo.jsx';
import store from '../store';

var Header = React.createClass({

  render: function() {
    console.log('Header infinigramming = ' + this.props.infinigramming);
    return (
      <header className={ this.props.class }>
        <Logo squished={ store.isSquished } />
        <Nav infinigram={ this.props.infinigramming } />
      </header>
    );
  }
});

export default Header;