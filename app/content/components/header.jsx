var React = require('react');

function Scrolling(options, change) {
  this.options = options;
  this.change = change;

  this.dHeight = 0;
  this.wHeight = 0;
  this.current = 0;
  this.previous = 0;
  this.diff = 0;
}

Scrolling.prototype = {

  constructor: Scrolling,

  atBottom: function() {
    return (this.current + this.wHeight) >= this.dHeight;
  },

  down: function() {
    return this.diff < 0;
  },

  handle: function() {
    var hidden = false;
    var scrolling = this.update();

    if (scrolling.down()) {
      if (this.options.showAtBottom) {
        var bottom = scrolling.atBottom();
        hidden = !bottom;
      } else {
        hidden = true;
      }
    }

    this.change(hidden);
  },

  update: function() {
    this.dHeight = document.body.offsetHeight;
    this.wHeight = window.innerHeight;

    this.previous = this.current;
    this.current = window.pageYOffset;
    this.diff = this.previous - this.current;

    return this;
  }
}

var Header = React.createClass({
  propTypes: {
    hiddenClass: React.PropTypes.string,
    showAtBottom: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      cssClass: 'auto-hide-sticky-header',
      cssClassHidden: 'auto-hide-sticky-header-hidden',
      showAtBottom: true
    };
  },

  getInitialState: function() {
    return {
      hidden: false
    }
  },

  componentWillMount: function() {
    function onChange(hidden) {
      this.setState({ hidden: hidden });
    }

    this.scrolling = new Scrolling(this.props.options, onChange.bind(this));
      this.onScroll = this.scrolling.handle.bind(this.scrolling);
  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.onScroll);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.onScroll);
  },

  getCssClasses: function() {
    var classes = this.props.class.split(/\s/g);
    classes.push(this.props.cssClass);

    if (this.state.hidden) {
      classes.push(this.props.cssClassHidden);
    }

    return classes.join(' ');
  },

  render: function() {
    var classes = this.getCssClasses();
    return (<header className={classes}>{this.props.children}</header>);
  }
});


export default Header;