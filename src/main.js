import { AppContainer } from 'react-hot-loader'
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
  ReactDOM.render(
    <AppContainer>
      <Component {...props} />
    </AppContainer>,
    rootEl
  )
}

module.hot.accept('./components/RootComponent', () => {
  const nextPropsRoutes = require('./routes').default
  const nextProps = {
    ...rootComponentProps,
    routes: nextPropsRoutes,
  }
  render(RootComponent)({ ...nextProps })
})
module.hot.accept('./routes', () => {
  const nextPropsRoutes = require('./routes').default
  const nextProps = {
    ...rootComponentProps,
    routes: nextPropsRoutes,
  }
  render(RootComponent)({ ...nextProps })
})

render(RootComponent)({ ...rootComponentProps })
