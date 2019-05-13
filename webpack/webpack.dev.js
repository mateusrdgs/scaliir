const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true
  },
  devtool: 'inline-source-map',
});
