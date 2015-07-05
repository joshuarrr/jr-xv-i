var React = require('react');
import { Link, RouteHandler } from 'react-router';
import store from './store';
import Nav from './content/nav.jsx';
require('./styles/app.css');

var cx = require('classnames');

var Logo = React.createClass({
    className() {
        return this.props.squished ? 'original' : 'clicked';
    },
    handleClick() {
        store.isSquished = !store.isSquished;
    },
    render() {
      return (
        <Link
          className="logo"
          id='logo'
          to='home'
          tabIndex="-1"
          onClick={this.handleClick}
        >
          <h1 className='name'>Joshua Richey</h1>
        </Link>
      );
    }
});

// Main App //
var App = React.createClass({
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