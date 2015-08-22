var React = require('react');
import { Link, RouteHandler } from 'react-router';
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import ResponsiveContainer from '../components/ResponsiveContainer'
import ResponsiveImage from '../components/ResponsiveImage'
import projectList from '../data/design.js';
import styles from '../styles/design.css';

var DetailedProject = React.createClass({
  getInitialState: function() {
    return { mounted: false };
  },

  componentDidMount: function() {
      this.setState({ mounted: true });
  },

  render: function() {
    var loadingClass = this.state.mounted ? '' : ' loading';
    var isProjecting = store.isProjectExpanded ? 'projecting' : '';
    var index = store.expandedProjectId;
    var p = projectList[index];

    return (
      <div className={'detailed-project ' + isProjecting + ' ' + loadingClass}>
        <div className='project'>
            <ResponsiveContainer>
              <ResponsiveImage
                class={'project-main-image ' + p.class}
                src={p.file}
              />
            </ResponsiveContainer>
        </div>
      </div>
    );
  }
});

var Project = React.createClass({
  handleClick: function() {
      // if there's a project already clicked
      if (store.expandedProjectId >= 0) {
        // and if that project is the same one that's most recently been clicked
        if (this.props.index == store.expandedProjectId) {
          // then toggle its visibility
            store.isProjectExpanded = !store.isProjectExpanded;
        } else {
          // otherwise, it hasn't been clicked yet, so open it
          store.expandedProjectId = this.props.index;
          store.isProjectExpanded = true;
        }
      }
      else {
        // if no project has been clicked
        // set the project id
        store.expandedProjectId = this.props.index;
        // and open it
        store.isProjectExpanded = true;
      }
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
       { this.props.index == store.expandedProjectId && store.isProjectExpanded &&
        <DetailedProject index={this.props.index} key={'detailed-project-' + this.props.index} />
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
          key={'project-' + i}
          class={p.class}
          title={p.title}
          src={p.file}
          id={p.id}
          index={i}
        />
      )
    });

    var isProjecting = store.isProjectExpanded ? 'projecting' : '';
    // console.log('store.isProjectExpanded = ' + store.isProjectExpanded);
    return (
      <div className={'project-thumbs ' + isProjecting}>
          { projects }
      </div>
    );
  }
});

var Design = React.createClass({

  render: function() {
    // console.log('store.expandedProjectId = ' + store.expandedProjectId);
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
        <div className={'page design '}>
          <div className='text-measure'>
            <h1 className='intro'>design</h1>
            <p className='introduction'>
               Blow on them. I've had a rough night, and I hate the fucking Eagles, man. Look, Larry… Have you ever heard of Vietnam? Okay, Jackie, done. I like the way you do business. Your money is being held by a kid named Larry Sellers. He lives in North Hollywood, on Radford, near the In-and-Out Burger. A real fuckin' brat, but I'm sure.
            </p>
            <p>Shut the fuck up, Donny.</p>
          </div>
          <Projects />
        </div>
      </VelocityTransitionGroup>
    );
  }
});

module.exports = Design;