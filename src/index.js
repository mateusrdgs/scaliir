import ReactDOM from 'react-dom';
import 'normalize.css';

import routes from './routes';
import RootComponent from './components/RootComponent';

const rootEl = document.getElementById('root');
const rootComponentProps = {
  routes,
};

const render = Component => ({ ...props }) => {
  ReactDOM.render(
    <Component {...props} />,
    rootEl,
  );
};

render(RootComponent)({ ...rootComponentProps });

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./routes', () => {
    // eslint-disable-next-line global-require
    const nextPropsRoutes = require('./routes').default;
    const nextProps = {
      ...rootComponentProps,
      routes: nextPropsRoutes,
    };
    render(RootComponent)({ ...nextProps });
  });
}
