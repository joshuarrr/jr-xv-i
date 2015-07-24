var React = require('react');
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import App from './app.jsx';
import Art from './content/art.jsx';
import Design from './content/design.jsx';
import Home from './content/home.jsx';
import Ig from './content/ig.jsx';
import infinIG from './content/instagram.jsx';
import NotFound from './content/not_found.jsx';
import StyleGuide from './content/style-guide.jsx';
import Thoughts from './content/thoughts.jsx';
import WaypointTest from './content/waypoints.jsx';

var Routes = (
  <Route name="App" handler={App} path="/">
  <DefaultRoute name="home" handler={Home} />
  <Route name="art" handler={Art} />
  <Route name="design" handler={Design} />
  <Route name="guide" handler={StyleGuide} />
  <Route name="ig" handler={Ig} />
  <Route name="instagram" handler={infinIG} />
  <Route name="thoughts" handler={Thoughts} />
  <Route name="way" handler={WaypointTest} />
  <NotFoundRoute handler={NotFound} />
  </Route>
  );

export default Routes;