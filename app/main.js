var React = require('react');

var route = function () {

  if (!location.hash || location.hash.length === 1) {
    require.ensure([], function (require) {
      var Home = require('./home/home.jsx');
      React.render(Home(), document.getElementById('app'));
    });
  } else {
    require.ensure([], function (require) {
      var Admin = require('./about/about.jsx');
      React.render(Admin(), document.getElementById('app'));
    });
  }
};

window.onhashchange = route;

route();

if (module.hot) {
  module.hot.accept(function () {
    route();
  });
}
