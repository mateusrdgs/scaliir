import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import AppLayout from 'layout/AppLayout';
import Loader from 'elements/Loader';

const routes = (
  <Suspense fallback={<Loader />}>
    <AppLayout>
      <Route path="/" exact component={lazy(() => import('./pages/Home'))} />
      <Route path="/about" component={lazy(() => import('./pages/About'))} />
    </AppLayout>
  </Suspense>
);

export default routes;
