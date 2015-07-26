var React = require('react');
import { Link, RouteHandler } from 'react-router';
import store from './store';
import Header from './content/components/header.jsx';
var Waypoint = require('react-waypoint');

require('./styles/app.css');

// Main App //
var App = React.createClass({
  componentDidMount() {
    store.register(() => this.forceUpdate());
  },

  hideHeader: function() {
    console.log('Hide the header');
    store.isNavShowing = false;
  },

  showHeader: function() {
    if (store.isInifigramming) {
      console.log('(4) Dont show the header.');
    } else {
      console.log('(4) Show the header.');
      store.isNavShowing = true;
      store.register(() => this.forceUpdate());
      // console.log('isNavShowing = ' + store.isNavShowing);
    }
  },

  render() {
    if (store.isInifigramming) {
      console.log('(1) App: We\'re instagramming');
    } else {
      console.log('(1) App: We\'re NOT instagramming');
    }
    return (
      <main role='main' id='app'>
        <Waypoint
          onEnter={this.showHeader}
          onLeave={this.hideHeader}
          threshold={0}
          class={'page-top'}
        />
        <Header class="sticky-header"/>
        <RouteHandler />
        <Waypoint
          onEnter={this.showHeader}
          threshold={0}
          class={'page-top'}
        />
      </main>
    );
  }
});

export default App;