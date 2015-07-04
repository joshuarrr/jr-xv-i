var React = require('react');
import { Link, RouteHandler } from 'react-router';
import store from './store';
import Nav from './content/nav.jsx';
require('./styles/app.css');

var cx = require('classnames');


var Cover = React.createClass({
  render: function() {
    var className = cx({
      // always set 'cover'
      "cover": true,
      // set 'visible' if we got a truthy prop named `active`
      "visible": this.props.visible
    });
    return (
      <div className={className}></div>
    );
  }
});

var Logo = React.createClass({
    className() {
        return this.props.squished ? 'original' : 'clicked';
    },
    handleClick() {
        store.isSquished = !store.isSquished;
    },
    render() {
      return (
        <a className={'logo ' + this.className()}
          id='logo'
          href='#about'
          tabIndex='-1'
          onClick={this.handleClick}>
          <h1 className='name'>Joshua Richey</h1>
        </a>
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
          <Logo squished={store.isSquished} />
          <Nav/>
        </header>
        <div className="page">
          <RouteHandler />
        </div>
      </main>
    );
  }
});

export default App;