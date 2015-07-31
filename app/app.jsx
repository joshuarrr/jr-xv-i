var React = require('react');
import { Link, RouteHandler } from 'react-router';
import store from './store';
import Header from './components/header.jsx';
var Waypoint = require('react-waypoint');
var MediaQuery = require('react-responsive');
require('./styles/app.css');

// Main App //
var App = React.createClass({
  hideHeader: function() {
    // console.log('Hide the header');
    store.isNavShowing = false;
    store.register(() => this.forceUpdate());
  },

  showHeader: function() {
    if (store.isInifigramming) {
      // console.log('Inifigramming. Dont show the header.');
    } else {
      // console.log('Not infinigramming. Show the header');
      store.isNavShowing = true;
      store.register(() => this.forceUpdate());
    }
  },

  render() {
    return (
      <main role='main' id='app'>
        <Waypoint
          onEnter={this.showHeader}
          onLeave={this.hideHeader}
          threshold={0}
          class={'page-top'}
        />
        <MediaQuery component='span' maxWidth={568}>
          <Header class={'header phone'} />
        </MediaQuery>
        <MediaQuery component='span' minWidth={569} maxWidth={1023}>
          <Header class={'header tablet'} />
        </MediaQuery>
        <MediaQuery component='span' minWidth={1024}>
          <Header class={'header laptop'} />
        </MediaQuery>
        <RouteHandler />
        <Waypoint
          onEnter={this.showHeader}
          threshold={0}
          class={'page-bottom'}
        />
      </main>
    );
  }
});

export default App;