module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
  },
};
