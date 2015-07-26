var React = require('react');

import Nav from './nav.jsx';
import Logo from './logo.jsx';
import store from '../../store';

var Header = React.createClass({
  render: function() {
    return (
      <header className="header">
        <Logo squished={store.isSquished} />
        <Nav/>
      </header>
    );
  }
});

export default Header;