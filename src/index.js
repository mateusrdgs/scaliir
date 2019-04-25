import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import AppLayout from './layout/AppLayout';

const rootEl = document.getElementById('root');

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  )
};

render(AppLayout);

if (module.hot) {
  module.hot.accept('./layout/AppLayout.js', () => {
    const NextAppLayout = require('./layout/AppLayout').default;
    render(NextAppLayout);
  });
}