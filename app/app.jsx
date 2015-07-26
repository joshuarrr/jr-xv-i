var React = require('react');
var Waypoint = require('react-waypoint');
import { Link, RouteHandler } from 'react-router';
import store from './store';
import Nav from './content/nav.jsx';
import Logo from './content/components/logo.jsx';

require('./styles/app.css');

// Main App //
var App = React.createClass({
  componentDidMount() {
    store.register(() => this.forceUpdate());
  },
  doSomething() {

  },
  render() {
    return (
      <main role='main' id='app'>
        <header className="sticky-header">
          <Logo squished={store.isSquished} loaded={store.isLoaded} />
          <Nav/>
        </header>
            <RouteHandler />
      </main>
    );
  }
});

export default App;