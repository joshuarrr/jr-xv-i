import React from 'react'

const connection = navigator.connection
const slow = connection && /(^([23]g?)$)/.test(connection.type)
const devicePixelRatio = (!slow && window.devicePixelRatio) || 1


export default class ResponsiveImage extends React.Component {
  getSizeInterval(size) {
    return Math.ceil(size / this.props.sizeInterval) * this.props.sizeInterval
  }

  render() {
  var cl = this.props.class;
    const baseURL = 'http://res.cloudinary.com/joshuar/image/upload'
    const container = this.props.container
    const width = Math.round(this.getSizeInterval(container.width) * devicePixelRatio)
    const height = Math.round(this.getSizeInterval(container.height) * devicePixelRatio)

    const src = `${baseURL}/w_${width}/${this.props.src}`

    // var imageRatio = '6/9';
    // var ratio = eval(imageRatio);

    // var w = '' + container.width;
    // var h = '' + container.width * ratio;

    return (
      <img src={src} className={this.props.class} />
    );
  }
}

ResponsiveImage.defaultProps = {
  sizeInterval: 50,
}