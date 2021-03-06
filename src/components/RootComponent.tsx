import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import FallbackLoader from 'components/FallbackLoader';

interface Props {
  children: React.ReactNode[];
  store: Store;
}

const RootComponent = ({ store, children }: Props): React.ReactElement => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<FallbackLoader />}>{children}</Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default RootComponent;
