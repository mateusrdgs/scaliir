const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const merge = require('webpack-merge');

const common = require('./webpack.common');

const cwd = process.cwd();

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(cwd, 'build'),
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [new webpack.NamedModulesPlugin(), new ReactRefreshWebpackPlugin()],
});
