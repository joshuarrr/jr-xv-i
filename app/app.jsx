var React = require('react');
var MediaQuery = require('react-responsive');
var Waypoint = require('react-waypoint');
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import 'velocity-animate/velocity.ui';
import Header from './components/header.jsx';
import { Link, RouteHandler } from 'react-router';
import store from './store';
require('./styles/app.css');

// Main App //
var App = React.createClass({
  componentDidMount: function() {
    store.register(() => this.forceUpdate());
  },

  componentWillUpdate: function() {
    var showWaypoints = true;
  },

  hideHeader: function() {
    store.isNavShowing = false;
    store.register(() => this.forceUpdate());
    // console.log('(hideHeader) isNavShowing = ' + store.isNavShowing);
  },

  showHeader: function() {
    if (store.isInifigramming) {
      // console.log('(showHeader) Inifigramming. isNavShowing = ' + store.isNavShowing);
    } else {
      store.isNavShowing = true;
      store.register(() => this.forceUpdate());
      // console.log('(showHeader) Not infinigramming. isNavShowing = ' + store.isNavShowing);
    }
  },

  switchPos: function() {
    console.log('change to fixed nav');
  },

  render() {
    console.log('(App render) isNavShowing = ' + store.isNavShowing);
    return (
      <main role='main' id='app'>
        <MediaQuery component='span' key={'m-phone'} maxWidth={568}>
          <Waypoint
            onLeave={this.switchPos}
            threshold={0}
            className={'page-top'}
          />
          <Header class={'header'} isMobile={ true } />
          <VelocityTransitionGroup
            enter="transition.fadeIn"
            enterOptions={{delay: 100}}
            leave="transition.fadeOut"
            defaults={{duration: 2000}}
          >
            <RouteHandler />
          </VelocityTransitionGroup>
        </MediaQuery>
        <MediaQuery component='span' key={'m-tablet'} minWidth={569} maxWidth={1023}>
          <Header class={'header tablet'} isMobile={ true } />
          <RouteHandler />
        </MediaQuery>
        <MediaQuery component='span' key={'m-laptop'} minWidth={1024} maxWidth={1439}>
          <Waypoint
            onLeave={this.hideHeader}
            threshold={0}
            class={'page-top'}
          />
          <Header class={'header laptop'} isMobile={ false } />
          <RouteHandler />
          <Waypoint
            onEnter={this.showHeader}
            threshold={0}
            class={'page-bottom'}
          />
        </MediaQuery>
        <MediaQuery component='span' key={'m-highres'} minWidth={1440}>
          <Header class={'header highres'} isMobile={ false } />
          <RouteHandler />
        </MediaQuery>
      </main>
    );
  }
});

export default App;