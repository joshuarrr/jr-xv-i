var React = require('react');
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import App from './app.jsx';
import Home from './content/home.jsx';
import Art from './content/art.jsx';
import Ig from './content/ig.jsx';
import StyleGuide from './content/style-guide.jsx';
import NotFound from './content/not_found.jsx';

var Routes = (
  <Route name="App" handler={App} path="/">
  <DefaultRoute name="home" handler={Home} />
  <Route name="guide" handler={StyleGuide} />
  <Route name="art" handler={Art} />
  <Route name="ig" handler={Ig} />

  <NotFoundRoute handler={NotFound} />
  </Route>
  );

export default Routes;