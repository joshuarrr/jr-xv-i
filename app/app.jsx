var React = require('react');
import { Link, RouteHandler } from 'react-router';
import store from './store';
import Nav from './content/nav.jsx';
import Logo from './content/components/logo.jsx';
require('./styles/app.css');

// Main App //
var App = React.createClass({
    getInitialState() {
      return {squished: false};
    },
  componentDidMount() {
    store.register(() => this.forceUpdate());
  },
  render() {
    return (
      <main role='main' id='app'>
        <header className='site-header'>
          <Nav/>
          <Logo squished={store.isSquished} />
        </header>
        <div className="page">
          <RouteHandler />
        </div>
      </main>
    );
  }
});

export default App;