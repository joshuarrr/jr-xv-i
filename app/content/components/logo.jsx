var React = require('react');
import { Link, RouteHandler } from 'react-router';
import store from '../../store';
var cx = require('classnames');


var Logo = React.createClass({
  getInitialState: function() {
    return {
      isLoaded: false
    };
  },

  componentDidMount: function(){
    this.setState({
      isLoaded: true
    });
  },

  handleClick() {
      store.isSquished = !store.isSquished;
  },

 render() {
  var classes  = cx(
    'logo',
    {'loaded': this.state.isLoaded}
  );

  console.log('classes = ' + classes);
    return (
      <Link
        className={classes}
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