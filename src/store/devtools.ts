import noop from 'utils/noop'

const isDevelopment = process.env.NODE_ENV === 'development'

/* eslint-disable no-underscore-dangle */
const devtools =
  isDevelopment
    && window
    && (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__
    : noop
/* eslint-enable */

export default devtools()
