const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const postStylus = require('poststylus')
const rupture = require('rupture')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../', 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: isProduction
          ? [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              'css-loader',
            ]
          : ['style-loader', 'css-loader'],
      },
      {
        test: /\.styl$/,
        use: isProduction
          ? [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              'css-loader',
              'stylus-loader',
            ]
          : ['style-loader', 'css-loader', 'stylus-loader'],
      },
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './template/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[contenthash].css' : '[name].css',
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.styl$/,
      options: {
        stylus: {
          use: [rupture(), postStylus(['autoprefixer', 'rucksack-css', 'lost'])],
        },
      },
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
}
