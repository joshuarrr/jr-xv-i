var React = require('react');
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import 'velocity-animate/velocity.ui';
import styles from '../styles/design.css';
import projectList from '../data/design.js';

import ResponsiveContainer from '../components/ResponsiveContainer'
import ResponsiveImage from '../components/ResponsiveImage'
import { Link, RouteHandler } from 'react-router';

var Project = React.createClass({
  handleClick() {
    store.isProjectExpanded = !store.isProjectExpanded;
    console.log('store.isProjectExpanded = ' + store.isProjectExpanded);
  },

  render: function() {
    var self = this;

    return (
      <div className='project' key={this.props.key}>
        <h2 className='project-title'>{this.props.title}</h2>
        <Link
          to={'/design#' + this.props.id}
          className='img-link'
          onClick={self.handleClick}
        >
          <ResponsiveContainer>
              <ResponsiveImage
                class={'project-thumbnail ' + this.props.class}
                src={this.props.src}
              />
          </ResponsiveContainer>
        </Link>
      </div>
    );
  }
});

var Projects = React.createClass({
  render: function() {
    var projects = projectList.map(function (p, i) {
      return (
        <Project
          key={'project-' + i}
          class={p.class}
          title={p.title}
          src={p.file}
          id={p.id}
        />
      )
    });

    var isProjecting = store.isProjectExpanded ? 'projecting' : '';
    return (
      <div className={'project-thumbs ' + isProjecting}>
        { projects }
      </div>
    );
  }
});

var DetailedProjects = React.createClass({
  render: function() {
    var self = this;
    var projects = projectList.map(function (p, i) {
      return (
        <div className='project' key={'detailed-project' + i}>
          <h2>{p.title}</h2>
          <span
            className='project-description'
            dangerouslySetInnerHTML={{__html: p.description}}
          />
          <ResponsiveContainer>
              <ResponsiveImage class={'project-main-image ' + p.class} src={p.file} />
          </ResponsiveContainer>
        </div>
      )
    });

    return (
      <div className='projects-details'>
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
        <div className='page'>
          <div className='design text-measure'>
            <h1 className='intro'>design</h1>
            <p className='introduction'>
               Blow on them. I've had a rough night, and I hate the fucking Eagles, man. Look, Larry… Have you ever heard of Vietnam? Okay, Jackie, done. I like the way you do business. Your money is being held by a kid named Larry Sellers. He lives in North Hollywood, on Radford, near the In-and-Out Burger. A real fuckin' brat, but I'm sure.
            </p>
            <p>Shut the fuck up, Donny.</p>
          </div>
           <Projects />
          {
            store.isProjectExpanded &&
            <DetailedProjects />
          }
        </div>
      </VelocityTransitionGroup>
    );
  }
});

module.exports = Design;