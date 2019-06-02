module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  root: false,
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    allowImportExportEverywhere: true,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/no-unresolved': 0,
    'arrow-body-style': 0,
    'global-require': 0,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'import/no-extraneous-dependencies': 0
  },
};
