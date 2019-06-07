const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, '../', 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, '../', 'src'), 'node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
}
