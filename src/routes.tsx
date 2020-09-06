import { lazy } from 'react';
import { Route } from 'react-router-dom';

import pageNames from 'constants/pagenames';

const { home, about } = pageNames;

const routes: React.ReactNode[] = [
  <Route path={home.route} exact key={home.name} component={lazy(() => import('./pages/Home'))} />,
  <Route path={about.route} key={about.name} component={lazy(() => import('./pages/About'))} />,
];

export default routes;
