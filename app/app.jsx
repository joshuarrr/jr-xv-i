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
    var isExpanded = store.isNavExpanded ? ' is-expanded' : '';
    return (
      <MediaQuery key={'mq'} className={'main' + isExpanded } component='main' screen={true}>

        {/* Mobile ----------------------------------------------------------*/}
        <MediaQuery component='span' key={'mq-mobile'} maxWidth={767} and maxDeviceWidth={767} >
          <Header class='header mobile' mq='mobile' />
          <Main mq='mobile' />
        </MediaQuery>

        {/* Desktop ---------------------------------------------------------*/}
        <MediaQuery component='span' key={'mq-desktop'} minDeviceWidth={769}>
          <Header class='header desktop' mq='desktop' />
          <Main mq='desktop' />
        </MediaQuery>
      </MediaQuery>
    );
  }
});

export default App;