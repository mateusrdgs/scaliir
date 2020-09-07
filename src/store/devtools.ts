const isDevelopment = !process.env.APP.production;
const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
const reduxDevToolsDefined = (): Function => window && devTools;

/* eslint-disable no-underscore-dangle */
const devtools = isDevelopment && reduxDevToolsDefined() ? devTools : (): Function => <T>(v): T => v;
/* eslint-enable */

process.env;

export default devtools();
