import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import AppLayout from 'layout/AppLayout'
import FallbackLoader from 'elements/FallbackLoader'

const RootComponent = ({ routes, store }): React.ReactElement => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<FallbackLoader />}>
          <AppLayout>{routes}</AppLayout>
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
}

export default RootComponent
