import React from 'react';
import MainLayout from 'layouts/MainLayout';
import { Posts, Post } from 'containers/posts';
import About from 'components/About';
import { Route, Router, Redirect, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { postsPath, postPath } from 'helpers/routes';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <MainLayout>
      <Switch>
        <Route path={postPath()} component={Post}/>
        <Route path={postsPath()} component={Posts}/>
        <Route path='/about' component={About}/>
        <Redirect from='/' to={postsPath()}/>
      </Switch>
    </MainLayout>
  </Router>
);

export default App;
