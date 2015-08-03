var React = require('react');
import { Link, RouteHandler, Routes } from 'react-router';
import socialLinkList from '../data/social_links.js';
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
          take <Link to='instagram' tabIndex='6'>pictures</Link>, and sometimes
          write about his <Link to='words' tabIndex='7'>thoughts</Link>.
        </p>
      </div>
    );
  }
});

var SocialLinks = React.createClass({
  render: function() {
    var links = socialLinkList.map(function (l, i) {
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
        <Bio key='bio' />
        <SocialLinks key='socialLinks' />
      </div>
    );
  }
});

module.exports = Home;