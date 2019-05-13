const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      new TerserWebpackPlugin({
        exclude: [/\.min\.js$/gi],
        parallel: true,
        terserOptions: {
          compress: {
            warnings: false,
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
          },
          ie8: false,
          output: {
            comments: false
          },
          safari10: false,
        },
      })
    ]
  }
});
