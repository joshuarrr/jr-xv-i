var React = require('react');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
import { Link, RouteHandler } from 'react-router';
import styles from '../styles/about.css';


var Bio = React.createClass({
  render: function() {
    return (
      <div className="about text-measure intro">
        <h1>joshuar</h1>
        <p>AKA Josh, or Joshua Richey. A designer, front-end developer, artist,
          and visual craftsman living in Portland, Oregon, and working
          at <a href="http://idealist.org" target="_blank">Idealist</a>.
          Beyond <Link to='design' tabIndex="4">design</Link>, he likes
          to <Link to='art' tabIndex="4">draw</Link>,
          take <Link to='instagram' tabIndex="6">pictures</Link>, and write about
          his <Link to='thoughts' tabIndex="7">thoughts</Link>.
        </p>
      </div>
    );
  }
});

var Links = React.createClass({
  render: function() {
    return (
      <div className="about-links">
        <ul className="about-links-list">
          <li className="about-link-item">
            <a className="about-link icon-idealist" href="http://www.idealist.org/view/user/Jn9FMxcwskMD/"
              target="_blank">
              <span className="about-link-text">Idealist</span>
            </a>
          </li>
          <li className="about-link-item">
            <a className="about-link icon-instagram" href="https://instagram.com/joshrr/"
              target="_blank">
              <span className="about-link-text">Instagram</span>
            </a>
          </li>
          <li className="about-link-item">
            <a className="about-link icon-linkedin" href="https://www.linkedin.com/in/joshuarichey"
              target="_blank">
              <span className="about-link-text">LinkedIn</span>
            </a>
          </li>
          <li className="about-link-item">
            <a className="about-link icon-twitter" href="https://twitter.com/jawshoowahr"
              target="_blank">
              <span className="about-link-text">twitter</span>
            </a>
          </li>
          <li className="about-link-item">
            <a className="about-link icon-github" href="https://github.com/joshuarrr"
              target="_blank">
              <span className="about-link-text">GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
});

var Home = React.createClass({
  render: function () {
    return (
      <div className="page homeabout-page">
        <ReactCSSTransitionGroup transitionName='fade-in' transitionAppear={true}>
          <Bio />
          <Links />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

module.exports = Home;