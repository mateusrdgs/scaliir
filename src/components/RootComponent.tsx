import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import AppLayout from 'layout/AppLayout';
import FallbackLoader from 'components/FallbackLoader';

const RootComponent = ({ routes, store }: { routes: any; store: Store }): React.ReactElement => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<FallbackLoader />}>
          <AppLayout>{routes}</AppLayout>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default RootComponent;
