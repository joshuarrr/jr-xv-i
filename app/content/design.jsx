var React = require('react');
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import 'velocity-animate/velocity.ui';
import styles from '../styles/design.css';
import projectList from '../data/design.js';

import ResponsiveContainer from '../components/ResponsiveContainer'
import ResponsiveImage from '../components/ResponsiveImage'

var Projects = React.createClass({
  render: function() {
    var projects = projectList.map(function (p, i) {
      console.log('p.file = ' + p.file);
      return (
        <div className="project" key={'project' + i}>
          <h2>{p.title}</h2>
          <span
            className="project-description"
            dangerouslySetInnerHTML={{__html: p.description}}
          />
          <ResponsiveContainer>
            <ResponsiveImage class="project-thumbnail" src={p.file} />
          </ResponsiveContainer>
        </div>
      )
    });

    return (
      <div className="thumbs">
        { projects }
      </div>
    );
  }
});


var Design = React.createClass({
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
        <div className="page">
          <div className="design text-measure">
            <h1 className="intro">design</h1>
            <hr />
            <p className="introduction">
               Blow on them. I've had a rough night, and I hate the fucking Eagles, man. Look, Larry… Have you ever heard of Vietnam? Okay, Jackie, done. I like the way you do business. Your money is being held by a kid named Larry Sellers. He lives in North Hollywood, on Radford, near the In-and-Out Burger. A real fuckin' brat, but I'm sure.
            </p>
            <p>Shut the fuck up, Donny.</p>
            <hr />
            <Projects />
          </div>
        </div>
      </VelocityTransitionGroup>
    );
  }
});

module.exports = Design;