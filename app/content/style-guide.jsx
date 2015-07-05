var React = require('react');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var Colors = require('./style-guide/colors.jsx');
import styles from '../styles/style-guide.css';
import store from '../store';

// console.log(styles);
var DevMode = React.createClass({
  render() {
    return (
      <ReactCSSTransitionGroup transitionName='fade-in'>
        {
        store.isDevMode &&
        <div key="dev" className={styles.devMode}>
          <p>THIS IS DEV MODE.</p>
        </div>
        }
      </ReactCSSTransitionGroup>
    );
  }
});

var StyleGuide = React.createClass({
  handleClick() {
      store.isDevMode = !store.isDevMode;
  },
  render: function () {
    return (
      <ReactCSSTransitionGroup transitionName='fade-in' transitionAppear={true}>
        <div className='style-guide'>
          <DevMode />
          <h1>Style Guide</h1>
          <button className="button" onClick={this.handleClick}>
            Toggle Dev Mode
          </button>
          <Colors />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
});

module.exports = StyleGuide;