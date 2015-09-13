var React = require('react');
import { Link, RouteHandler } from 'react-router';
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import 'velocity-animate/velocity.ui';
import ResponsiveContainer from '../components/ResponsiveContainer'
import ResponsiveImage from '../components/ResponsiveImage'
import artList from '../data/art.js';
import styles from '../styles/art.css';


var Piece = React.createClass({
  getInitialState: function() {
    return {
      expanded: false,
      updated: false,
      imageHeight: ''
    };
  },

  componentDidUpdate: function() {
    this.getDOMNode().addEventListener('transitionend', this.updateImg, false);
  },

  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  },

  updateImg() {

    // render the duplicate the image
    this.setState({
      updated: true
    });

    var img = React.findDOMNode(this.refs.imgContainer);

    // Set a min height on the imagewrapper
    this.setState({
      imageHeight: img.offsetHeight
    });
  },

  render: function() {
    var self = this;
    var projectClass = this.state.expanded ? ' expanded' : '';

    return (
      <div className='project-wrap'>
        <div className={'project' + projectClass} ref='project'>
          <Link
            to={ '/art#' + this.props.id }
            className='img-link'
            onClick={ self.handleClick }
            ref='imgLink'
            style={{ minHeight: this.state.imageHeight }}
          >
            <ResponsiveContainer
              class={ 'rc rc-' + this.props.index + ' ' }
              key={'rc-' + this.props.index}
              ref='imgContainer'
            >
              <ResponsiveImage
                class={ 'img-wrap ' + this.props.class + ' ' + projectClass + ' img-' + this.props.index}
                src={ this.props.src }
                ref='imgContainer'
              />
            </ResponsiveContainer>
            {
              this.state.updated &&
              <ResponsiveContainer
                class={ 'expanded done-expanding rc rc-' + this.props.index + ' ' }
                key={'big-rc-' + this.props.index}
                ref='bigImgContainer'
              >
                <ResponsiveImage
                  class={ 'img-wrap ' + this.props.class + ' ' + projectClass + ' img-' + this.props.index}
                  src={ this.props.src }
                />
              </ResponsiveContainer>
            }
          </Link>
        </div>
      </div>
    );
  }
});


var Group = React.createClass({
  render: function() {

    var thisGroup = this.props.index;

    if (artList[thisGroup].pieces) {
      var hasPieces = artList[thisGroup].pieces;

      var pieces = hasPieces.map(function (p, i) {
        return (
          <Piece
            key={ 'piece-' + i }
            class={ p.class }
            title={ p.title }
            description={ p.description }
            src={ p.file }
            id={ p.id }
            index={ i }
          />
        )
      });
    }

    return (
      <div className='group'>
        <h2 className='art-group-title project-title'>
          { this.props.group }
        </h2>
        { pieces }
      </div>
    );
  }
});

var Groups = React.createClass({
  render: function() {
    var groups = artList.map(function (p, i) {
      return (
        <Group
          index={ i }
          group={ p.group }
          pieces={ p.pieces }
          key={ 'group-' + i }
        />
      )
    });

    return (
      <div className='groups-wrap'>
        { groups }
      </div>
    );
  }
});


var Art = React.createClass({
  render: function() {
    return (
      <VelocityTransitionGroup
        appear="transition.fadeIn"
        enter="transition.fadeIn"
        leave="transition.fadeOut"
        defaults={{
          duration: 2000,
          delay: 0
        }}
      >
        <div className="page art" key='art-page'>
          <div className="text-measure" key='intro'>
            <h1 className="intro">art</h1>
          </div>
          <Groups key='groups' />
        </div>
      </VelocityTransitionGroup>
    );
  }
});

module.exports = Art;