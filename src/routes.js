import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import AppLayout from './layout/AppLayout';
import Loader from './elements/Loader';

const routes = (
  <Suspense fallback={<Loader />}>
    <AppLayout>
      <Route path="/" component={lazy(() => import('./pages/Home'))} />
    </AppLayout>
  </Suspense>
);

export default routes;
