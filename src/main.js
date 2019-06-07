import ReactDOM from 'react-dom'
import 'normalize.css'

import RootComponent from 'components/RootComponent'
import startStore from './store'
import routes from './routes'
import './styles/main.styl'

const rootEl = document.getElementById('root')
const store = startStore()
const rootComponentProps = {
  routes,
  store,
}

const render = Component => ({ ...props }) => {
  ReactDOM.render(<Component {...props} />, rootEl)
}

render(RootComponent)({ ...rootComponentProps })

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./routes', () => {
    const nextPropsRoutes = require('./routes').default
    const nextProps = {
      ...rootComponentProps,
      routes: nextPropsRoutes,
    }
    render(RootComponent)({ ...nextProps })
  })
}
