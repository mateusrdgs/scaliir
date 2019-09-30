const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const merge = require('webpack-merge')

const environment = require('../config/environment')
const NODE_ENV = process.env.NODE_ENV

const APP = merge(environment.default, environment[NODE_ENV])

module.exports = {
  entry: './src/main.tsx',
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, '../', 'build'),
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, '../', 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: NODE_ENV,
      APP: APP,
    }),
    new HtmlWebpackPlugin({
      template: './template/index.html',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../', 'src', 'assets'),
        to: path.resolve(__dirname, '../', 'build', 'assets'),
      },
    ]),
  ],
}
