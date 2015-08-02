var React = require('react');
var MediaQuery = require('react-responsive');
var Waypoint = require('react-waypoint');
import Header from './components/header.jsx';
import { Link, RouteHandler } from 'react-router';
import store from './store';
require('./styles/app.css');

// Main App //
var App = React.createClass({
  componentDidMount: function() {
    var showWaypoints = true;
  },

  hideHeader: function() {
    console.log('Hide the header');
    store.isNavShowing = false;
    store.register(() => this.forceUpdate());
  },

  showHeader: function() {
    if (store.isInifigramming) {
      console.log('Inifigramming. Dont show the header.');
    } else {
      console.log('Not infinigramming. Show the header');
      store.isNavShowing = true;
      store.register(() => this.forceUpdate());
    }
  },

  render() {
    var showWaypoints = false;
    return (
      <main role='main' id='app'>
        {
          showWaypoints &&
          <Waypoint
            onEnter={this.showHeader}
            onLeave={this.hideHeader}
            threshold={0}
            class={'page-top'}
          />
        }
        <MediaQuery component='span' key={'m-phone'} maxWidth={568}>
          <Header class={'header'} />
        </MediaQuery>
        <MediaQuery component='span' key={'m-tablet'} minWidth={569} maxWidth={1023}>
          <Header class={'header tablet'} />
        </MediaQuery>
        <MediaQuery component='span' key={'m-laptop'} minWidth={1024} maxWidth={1439}>
          <Header class={'header laptop'} />
        </MediaQuery>
        <MediaQuery component='span' key={'m-highres'} minWidth={1440}>
          <Header class={'header highres'} />
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