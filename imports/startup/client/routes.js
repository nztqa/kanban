import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to Meteor!</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>Kanban boards</p>
  </div>
);

const NotFound = () => (
  <div>
    <h2>NotFound</h2>
    <p>404 Not Found</p>
  </div>
);

const renderRoutes = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default renderRoutes;
