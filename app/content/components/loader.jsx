import React from 'react';

export default class LoadingBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, left: 0 };
  }
  componentDidMount() {
    this.interval = setInterval(this.animate.bind(this), this.props.speed);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  animate() {
    if(this.props.active !== true) return false;
    let state = this.state;
    if(state.left === 0 && state.width < 100) {
      state.width+=4;
    } else if(state.width <= 100 && state.left < 100) {
      state.left+=4;
      state.width-=4;
    } else if(state.left === 100 && state.width === 0) {
      state.left = 0;
    }
    this.setState(state);
  }
  render() {
    const style = {
      display: (this.props.active) ? 'block' : 'none',
      position: 'fixed',
      top: '0px',
      left: `${this.state.left}%`,
      right: '0px',
      width: `${this.state.width}%`,
      height: this.props.height,
      backgroundColor: this.props.color,
      backgroundImage: 'linear-gradient(to right, #ffffff, #cc0033, #cc0033)',
      zIndex: 800
    };
    return <div className='loading-bar' style={style} />;
  }
}

LoadingBar.defaultProps = {
  active: false,
  speed: 20,
  color: "#60d778",
  height: "2px"
};

LoadingBar.propTypes = {
  active: React.PropTypes.bool,
  speed: React.PropTypes.number,
  color: React.PropTypes.string,
  height: React.PropTypes.string
};

module.exports = LoadingBar;