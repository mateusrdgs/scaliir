import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'normalize.css';

import RootComponent from 'components/RootComponent';
import startStore from './store';
import routes from './routes';
import './styles/main.styl';

const rootEl = document.getElementById('root');
const store = startStore();

const render = rootComponent => {
  ReactDOM.render(<AppContainer>{rootComponent}</AppContainer>, rootEl);
};

if (module.hot) {
  module.hot.accept('./components/RootComponent', () => {
    const nextRoutes = require('./routes').default;
    render(<RootComponent store={store} routes={nextRoutes} />);
  });
  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes').default;
    render(<RootComponent store={store} routes={nextRoutes} />);
  });
}

render(<RootComponent store={store} routes={routes} />);
