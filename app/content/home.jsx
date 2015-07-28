var React = require('react');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');
import { Link, RouteHandler, Routes } from 'react-router';
// import { SocialLinksList } from '../data/social_links.jsx';
import styles from '../styles/about.css';

var Bio = React.createClass({
  render: function() {
    return (
      <div className='about text-measure intro'>
        <h1>joshuar</h1>
        <p>AKA Josh, or Joshua Richey. A designer, front-end developer, artist,
          and visual craftsman living in Portland, Oregon, and working
          at <a href='http://idealist.org' target='_blank'>Idealist</a>.
          Beyond <Link to='design' tabIndex='4'>design</Link>, he likes
          to <Link to='art' tabIndex='4'>draw</Link>,
          take <Link to='instagram' tabIndex='6'>pictures</Link>, and write about
          his <Link to='thoughts' tabIndex='7'>thoughts</Link>.
        </p>
      </div>
    );
  }
});

var socialLinksList = [
  {
    title: 'idealist',
    url: 'http://www.idealist.org/view/user/Jn9FMxcwskMD/',
    class: 'icon-idealist'
  }, {
    title: 'instagram',
    url: 'https://instagram.com/joshrr',
    class: 'icon-instagram'
  }, {
    title: 'linkedin',
    url: 'https://www.linkedin.com/in/joshuarichey',
    class: 'icon-linkedin'
  }, {
    title: 'twitter',
    url: 'https://twitter.com/jawshoowahr',
    class: 'icon-twitter'
  }, {
    title: 'github',
    url: 'https://github.com/joshuarrr',
    class: 'icon-github'
  }
];

var SocialLinks = React.createClass({
  render: function() {
    var links = socialLinksList.map(function (l, i) {
      return (
        <li key={'link-' + i} className='about-link-item'>
          <a
            className={'about-link ' + l.class }
            href={l.url}
            rel='external'
            target='_blank'
          >
            <span className='about-link-text'>
              {l.title}
            </span>
          </a>
        </li>
      )
    });

    return (
      <div className='about-links'>
        <ul className='about-links-list'>
          { links }
        </ul>
      </div>
    );
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <div className='page homeabout-page'>
        <ReactCSSTransitionGroup transitionName='fade-in' transitionAppear={true}>
          <Bio key='bio' />
          <SocialLinks key='socialLinks' />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

module.exports = Home;