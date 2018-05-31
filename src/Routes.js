import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routeDescriptors from './lib/routeDescriptors'

const NotFound = () => '404'

function makeRoutes() {
  const routes = routeDescriptors.map(rd => (
    <Route key={rd.path} exact path={rd.path} component={rd.component} />
  ));

  return routes;
}

export const Routes = () => (
  <Switch>
    {makeRoutes()}
    <NotFound />
  </Switch>
);

export default Routes;
