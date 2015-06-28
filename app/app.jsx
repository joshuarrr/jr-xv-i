var React = require('react');
import { Link, RouteHandler } from 'react-router';

// Main //
var App = React.createClass({
    getInitialState() {
      return {squished: false};
    },
    render() {
      return (
        <main role='main' id='app'>
          <header className='site-header'>
            <Logo squished={true} />
            <Nav/>
          </header>
          <RouteHandler />
        </main>
      );
    }
});

// Primary Nav //
var Nav = React.createClass({
    render() {
      return (
        <nav>
          <Link to='home'>home</Link>
          <Link to='about'>about</Link>
          <Link to='guide'>style guide</Link>
        </nav>
      );
    }
});

var Logo = React.createClass({
    className() {
        return this.props.squished ? 'original' : 'clicked';
    },
    handleClick() {
        this.setState( { squished : !this.state.condition } );
    },
    render() {
      return (
        <a className={'logo ' + this.className()}
          id='logo'
          href='#about'
          onClick={this.handleClick}>
          <h1 className='name'>Joshua Richey</h1>
        </a>
      );
    }
});

export default App;