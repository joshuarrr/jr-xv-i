var React = require('react');
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import App from './app.jsx';
import Home from './content/home.jsx';
import About from './content/about.jsx';
import StyleGuide from './content/style-guide.jsx';
// import contact from './content/contact';

var Routes = (
    <Route name="App" handler={App} path="/">
        <DefaultRoute name="home" handler={Home} />
        <Route name="guide" handler={StyleGuide} />
    </Route>
);

export default Routes;