var React = require('react');
import { Link, RouteHandler } from 'react-router';
import store from '../../store';

var Logo = React.createClass({
  // Add a 'loaded' class to the logo after it's been painted so that the
  // j can fade in gracefully instead of abbruptly appearing
  addClass: function() {
    //store this
    var _this = this;
    //wait for a paint
    window.requestAnimationFrame(function() {
      var node = _this.getDOMNode();
      if (node !== undefined) {
        //add the class
        node.addCls = node.className += ' loaded';
        return _this.props.loaded ? 'no' : 'yes';
      }
    });
  },
  componentDidMount() {
    this.addClass();
  },
  // I don't think this is probably good, but the loaded class gets
  // removed whenever it's clicked unless the class is added on update also.
  // I Tried to add load class based on the store to no avail. (EOC?)
  componentDidUpdate() {
    this.addClass();
  },
  className() {
      return this.props.squished ? 'original' : 'clicked';
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