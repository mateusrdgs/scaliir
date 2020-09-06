const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common');

const cwd = process.cwd();

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(cwd, 'build'),
    historyApiFallback: true,
  },
  devtool: 'cheap-module-eval-source-map',
});
