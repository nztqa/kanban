import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import AppContainer from '../../ui/containers/AppContainer.js';

const NotFound = () => (
  <div>
    <h2>NotFound</h2>
    <p>404 Not Found</p>
  </div>
);

const renderRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default renderRoutes;
