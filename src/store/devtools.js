import { identity } from 'utils/helpers';

const isDevelopment = !process.env.APP.production;
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;
const reduxDevToolsDefined = () => window && devTools;

const devtools = isDevelopment && reduxDevToolsDefined() ? devTools() : identity;

export default devtools;
