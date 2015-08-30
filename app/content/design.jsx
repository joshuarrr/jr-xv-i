var React = require('react');
import { Link, RouteHandler } from 'react-router';
import VelocityTransitionGroup from 'VelocityTransitionGroup';
var Velocity = require('velocity-animate/velocity');
require('velocity-animate/velocity.ui');
import ResponsiveContainer from '../components/ResponsiveContainer'
import ResponsiveImage from '../components/ResponsiveImage'
import projectList from '../data/design.js';
import styles from '../styles/design.css';
var StickyDiv = require('react-stickydiv');

var ProjectDetails = React.createClass({
  getInitialState: function() {
    return { mounted: false };
  },

  componentDidMount: function() {
    this.setState({ mounted: true });
  },

  render: function() {
    var loadingClass = this.state.mounted ? '' : ' loading';
    var index = store.expandedProjectId;
    var p = projectList[index];

    return (
      <VelocityTransitionGroup
        appear='transition.slideDownBigIn'
        enter='transition.slideDownBigIn'
        enterOptions={{ delay: 300, duration: 500 }}
        leave='transition.slideUpBigOut'
        leaveOptions={{ delay: 0, duration: 400 }}
        wrapper={ true }
      >
        {
          this.props.expanded &&
          <div
            className={ 'project-description text-measure' + loadingClass }
            dangerouslySetInnerHTML={{__html: this.props.description}}
          />
        }
      </VelocityTransitionGroup>
    );
  }
});

var Project = React.createClass({
  getInitialState: function() {
    return { expanded: false };
  },

  handleClick: function() {
    this.setState({ expanded: !this.state.expanded });
  },

  render: function() {
    var self = this;
    var projectClass = this.state.expanded ? ' expanded' : '';

    console.log('this.state.expanded = ' + this.state.expanded);

    return (
      <div className='project-wrap'>
        <div className={'project' + projectClass} ref='project'>
          <h2 className='project-title'>{ this.props.title }</h2>
          <Link
            to={ '/design#' + this.props.id }
            className='img-link'
            onClick={ self.handleClick }
          >
            <ResponsiveContainer>
              <ResponsiveImage
                class={ 'img-wrap ' + this.props.class + projectClass + ' img-' + this.props.index}
                src={ this.props.src }
              />
            </ResponsiveContainer>
          </Link>
        </div>
        <ProjectDetails
          index={ this.props.index }
          key={ 'detailed-project-' + this.props.index }
          description={this.props.description}
          expanded={this.state.expanded}
        />
      </div>
    );
  }
});

var Projects = React.createClass({
  render: function() {
    var projects = projectList.map(function (p, i) {
      return (
        <Project
          key={ 'project-' + i }
          class={ p.class }
          description={ p.description }
          title={ p.title }
          src={ p.file }
          id={ p.id }
          index={ i }
        />
      )
    });

    return (
      <div className='projects'>
        { projects }
      </div>
    );
  }
});

var Design = React.createClass({

  render: function() {
    return (
      <VelocityTransitionGroup
        appear='transition.fadeIn'
        enter='transition.fadeIn'
        leave='transition.fadeOut'
        defaults={{
          duration: 2000,
          delay: 0
        }}
      >
        <div className={'page design '} key='design'>
          <div className='text-measure' key='intro'>
            <h1 className='intro'>design</h1>
            <p className='introduction'>
              I see design as problem solving. How can we best communicate complex ideas using simple tools of color, shape, text? How can we use imagination and creativity to make those ideas more compelling?
            </p>
            <p>
              At the ripe age of 9 years old, I bought my first copy of Dark Side of the Moon. I'd never heard of Pink Floyd, I just liked the cover: a ray of light going into a prism, which divides the light into a rainbow of frequencies. I studied that cover for a long time, and eventually went on to study light and optics because of it. I became a designer because images like these captivate me.
            </p>
            <p>Good design has heavily influenced who I am today. Below are some of my favorite attempts from the past ten or so trips around the fat old sun.</p>
          </div>
          <Projects key='projects' />
        </div>
      </VelocityTransitionGroup>
    );
  }
});

module.exports = Design;