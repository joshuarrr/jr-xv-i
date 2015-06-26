var React = require('react');
import { Link, RouteHandler } from 'react-router';

var App = React.createClass({
    getInitialState() {
      return {squished: false};
    },

    render() {
      return <main role="main" id="app">
        <Logo squished={true} />
        <Nav/>
        <RouteHandler />
      </main>;
    }
});

var Nav = React.createClass({
    render() {
      return <nav>
        <Link to="home">home</Link>
        <Link to="about">about</Link>
      </nav>
    }
});

var Logo = React.createClass({
    className() {
        return this.props.squished ? 'clicked' : 'original';
    },

    render() {
      return <header className="site-header">
        <a className={'logo ' + this.className()} id="logo"
           href="#about">
          <h1 className="name">Joshua Richey</h1>
        </a>
      </header>
    }
});

export default App;