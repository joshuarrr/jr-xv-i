var React = require('react');
import { Link, RouteHandler } from 'react-router';
import store from './store';
import Nav from './content/nav.jsx';
import Logo from './content/components/logo.jsx';
import Header from './content/components/header.jsx';

require('./styles/app.css');

// Main App //
var App = React.createClass({
  componentDidMount() {
    store.register(() => this.forceUpdate());
  },

  render() {
    var options = { showAtBottom: true };
    return (
      <main role='main' id='app'>
        <Header class="sticky-header" options={options}>
          <Logo squished={store.isSquished} />
          <Nav/>
        </Header>
          <RouteHandler />
      </main>
    );
  }
});

export default App;