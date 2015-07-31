var React = require('react');

import Nav from './nav.jsx';
import Logo from './logo.jsx';
import store from '../store';

var Header = React.createClass({

  render: function() {
    return (
      <header className={ this.props.class }>
        <Logo squished={ store.isSquished } />
        <Nav infinigramming="this.props.infinigramming" />
      </header>
    );
  }
});

export default Header;