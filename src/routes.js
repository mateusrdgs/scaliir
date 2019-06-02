import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import AppLayout from 'layout/AppLayout';
import FallbackLoader from 'elements/FallbackLoader';

const routes = (
  <Suspense fallback={<FallbackLoader />}>
    <AppLayout>
      <Route path="/" exact component={lazy(() => import('./pages/Home'))} />
      <Route path="/about" component={lazy(() => import('./pages/About'))} />
    </AppLayout>
  </Suspense>
);

export default routes;
