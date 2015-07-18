var React = require('react');
import { Link, RouteHandler } from 'react-router';

var Logo = React.createClass({
    className() {
        return this.props.squished ? 'original' : 'clicked';
        console.log(this.props.squished);
    },
    handleClick() {
        store.isSquished = !store.isSquished;
    },
    render() {
      return (
        <Link
          className={'logo ' + this.className()}
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

export default Logo;