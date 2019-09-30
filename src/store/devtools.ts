import { identity } from 'utils/helpers'

const isDevelopment = !process.env.APP.production;
const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
const reduxDevToolsDefined = () => window && devTools;

/* eslint-disable no-underscore-dangle */
const devtools =
  isDevelopment && reduxDevToolsDefined()
    ? devTools
    : () => identity
/* eslint-enable */

process.env

export default devtools()
