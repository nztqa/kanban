import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContainer from '../../ui/containers/AppContainer.js';
import NotFoundPage from '../../ui/pages/NotFoundPage.js';
import BoardPageContainer from '../../ui/containers/BoardPageContainer.js';

const renderRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route path="/b/:id" component={BoardPageContainer} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default renderRoutes;
