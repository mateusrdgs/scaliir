import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

const RootComponent = ({ routes, store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{routes}</BrowserRouter>
    </Provider>
  )
}

export default RootComponent
