import ReactDOM from 'react-dom';
import 'normalize.css';

import AppLayout from './layout/AppLayout';

const rootEl = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    rootEl,
  );
};

render(AppLayout);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./layout/AppLayout.js', () => {
    // eslint-disable-next-line global-require
    const NextAppLayout = require('./layout/AppLayout').default;
    render(NextAppLayout);
  });
}
