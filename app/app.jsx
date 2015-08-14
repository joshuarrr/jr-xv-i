var React = require('react');
var MediaQuery = require('react-responsive');
var Waypoint = require('react-waypoint');
import Header from './components/header.jsx';
import { Link, RouteHandler } from 'react-router';
import store from './store';
require('./styles/app.css');

require('file?name=favicon.png!./favicon.png');

// Pages //
var Main = React.createClass({
  render: function() {
    return (
      <RouteHandler />
    );
  }
});

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
    // console.log('(App render) isNavShowing = ' + store.isNavShowing);
    return (
      <MediaQuery key={'mq'} className='main' component='main' screen={true}>

        {/* Mobile ----------------------------------------------------------*/}
        <MediaQuery component='span' key={'mq-mobile'} maxWidth={767} and maxDeviceWidth={767} >
          <Header class='header mobile' mq='mobile' />
          <Main mq='mobile' />
        </MediaQuery>

        {/* Phone -----------------------------------------------------------*/}
        <MediaQuery component='span' key={'mq-phone'} maxWidth={767} and minDeviceWidth={768}>
          <Header class='header phone' mq='phone' />
          <Main mq='phone' />
        </MediaQuery>

        {/* Tablet ----------------------------------------------------------*/}
        <MediaQuery component='span' key={'mq-tablet'} minWidth={768} maxWidth={1023}>
          <Header class='header tablet' mq='tablet' />
          <Main mq='tablet' />
        </MediaQuery>

        {/* Laptop ----------------------------------------------------------*/}
        <MediaQuery component='span' key={'mq-laptop'} minWidth={1024} maxWidth={1279}>
          <Header class='header laptop' mq='laptop'  />
          <Main mq='laptop' />
        </MediaQuery>

        {/* Desktop ----------------------------------------------------------*/}
        <MediaQuery component='span' key={'mq-desktop'} minWidth={1280} maxWidth={1439}>
          <Header class='header desktop' mq='desktop' />
          <Main mq='desktop' />
        </MediaQuery>

        {/* highres ---------------------------------------------------------*/}
        <MediaQuery component='span' key={'mq-highres'} minWidth={1440}>
          <Header class='header highres' mq='highres' />
          <Main mq='highres' />
        </MediaQuery>
      </MediaQuery>
    );
  }
});

export default App;