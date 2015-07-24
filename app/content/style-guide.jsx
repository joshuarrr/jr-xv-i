var React = require('react');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var Colors = require('./style-guide/colors.jsx');
var Typography = require('./style-guide/typography.jsx');
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
  getInitialState: function() {
      return { on: false };
  },
  handleClick() {
      store.isDevMode = !store.isDevMode;
      this.setState({on: !this.state.on});
  },
  render: function () {
    var devClasses = this.state.on ? "is-active" : "";
    devClasses += " dev-mode-toggle-icon icon-gear";

    return (
      <ReactCSSTransitionGroup transitionName='fade-in' transitionAppear={true}>
        <div className='page style-guide'>
          <DevMode />
          <h1>Style Guide</h1>
          <button className="button dev-mode-toggle" onClick={this.handleClick}>
              <span className={devClasses} />
              <span className="dev-mode-toggle-text">Toggle Dev Mode</span>
          </button>
          <Colors />
          <Typography />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
});

module.exports = StyleGuide;