require("./scss/main.scss");

var React = require('react');
var Home = require('./home/Home.jsx');
var About = require('./about/about.jsx');

var route = function () {

  if (!location.hash || location.hash.length === 1) {
    React.render(React.createElement(Home), document.getElementById('app'));
  } else {
    React.render(React.createElement(About), document.getElementById('app'));
  }
};

window.onhashchange = route;

route();

