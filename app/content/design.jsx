var React = require('react');
import { Link, RouteHandler } from 'react-router';
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import ResponsiveContainer from '../components/ResponsiveContainer'
import ResponsiveImage from '../components/ResponsiveImage'
import projectList from '../data/design.js';
import styles from '../styles/design.css';
var StickyDiv = require('react-stickydiv');

var DetailedProject = React.createClass({
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
      <div className={ 'detailed-project ' + loadingClass }>
        <div className='project'>
            <ResponsiveContainer>
              <ResponsiveImage
                class={ 'project-main-image ' + p.class }
                src={ p.file }
              />
            </ResponsiveContainer>
        </div>
      </div>
    );
  }
});

var Project = React.createClass({
  getInitialState: function() {
    return { clicked: false };
  },

  handleClick: function() {
    this.setState({ clicked: !this.state.clicked });
  },

  componentDidMount() {
    var height = this.refs.project.getDOMNode('img').getBoundingClientRect();
    console.log('height = ' + height);
  },

  render: function() {
    var self = this;
    var projectClass = this.state.clicked ? ' big' : '';

    return (
      <div className={'project' + projectClass} ref='project'>
        <h2 className='project-title'>{ this.props.title }</h2>
        <Link
          to={ '/design#' + this.props.id }
          className='imgLink'
          onClick={ self.handleClick }
        >
          <ResponsiveContainer wasClicked={this.state.clicked}>
            <ResponsiveImage
              class={ 'img-wrap ' + this.props.class + projectClass + ' img-' + this.props.index}
              src={ this.props.src }
            />
          </ResponsiveContainer>
        </Link>
        {
          this.props.index == store.expandedProjectId &&
          <DetailedProject
            index={ this.props.index }
            key={ 'detailed-project-' + this.props.index }
          />
        }
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
              Blow on them. I've had a rough night, and I hate the fucking Eagles, man. Look, Larry… Have you ever heard of Vietnam? Okay, Jackie, done. I like the way you do business. Your money is being held by a kid named Larry Sellers. He lives in North Hollywood, on Radford, near the In-and-Out Burger. A real fuckin' brat, but I'm sure.
            </p>
            <p>Shut the fuck up, Donny.</p>
          </div>
          <Projects key='projects' />
        </div>
      </VelocityTransitionGroup>
    );
  }
});

module.exports = Design;