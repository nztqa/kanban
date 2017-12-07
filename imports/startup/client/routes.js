import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import AppContainer from '../../ui/containers/AppContainer.js';
import NotFoundPage from '../../ui/pages/NotFoundPage.js';

const renderRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default renderRoutes;
