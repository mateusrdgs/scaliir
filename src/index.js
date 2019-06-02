import ReactDOM from 'react-dom';
import 'normalize.css';

import RootComponent from 'components/RootComponent';
import routes from './routes';

const rootEl = document.getElementById('root');
const rootComponentProps = {
  routes,
};


const render = Component => ({ ...props }) => {
  ReactDOM.render(<Component {...props} />, rootEl);
};

render(RootComponent)({ ...rootComponentProps });

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./routes', () => {
    const nextPropsRoutes = require('./routes').default;
    const nextProps = {
      ...rootComponentProps,
      routes: nextPropsRoutes,
    };
    render(RootComponent)({ ...nextProps });
  });
}
