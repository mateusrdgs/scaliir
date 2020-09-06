import ReactDOM from 'react-dom';
import 'normalize.css';

import RootComponent from 'components/RootComponent';
import startStore from './store';
import routes from './routes';
import 'utils/globals';
import './styles/main.styl';

const rootEl = document.getElementById('root');
const store = startStore();

const render = (rootComponent: React.ReactElement): void => {
  ReactDOM.render(rootComponent, rootEl);
};

render(<RootComponent store={store} routes={routes} />);
