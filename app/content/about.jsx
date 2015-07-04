var React = require('react');
import styles from '../styles/about.css';

var About = React.createClass({
  render: function() {
    return (
      <div className="about text-measure intro">
        <h1>joshuar</h1>
        <p>AKA Josh, or Joshua Richey. A designer, front-end developer, and visual craftsman living in Portland, Oregon, and
          working at <a href="http://idealist.org" target="_blank">Idealist</a>.
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
            <a href="http://www.idealist.org/view/user/Jn9FMxcwskMD/"
              target="_blank">
              Idealist
            </a>
          </li>
          <li className="about-link-item">
            <a href="https://instagram.com/joshrr/"
              target="_blank">
              Instagram
            </a>
          </li>
          <li className="about-link-item">
            <a href="https://www.linkedin.com/in/joshuarichey"
              target="_blank">
              LinkedIn
            </a>
          </li>
          <li className="about-link-item">
            <a href="https://github.com/joshuarrr"
              target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    );
  }
});

var AboutPage = React.createClass({
  render: function () {
    return (
      <div className="about-page">
        <About />
        <Links />
      </div>
    );
  }
});

module.exports = AboutPage;