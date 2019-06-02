const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

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
            'postcss-loader',
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
    alias: {
      'components': path.resolve(__dirname, '../src/components'),
      'ducks': path.resolve(__dirname, '../src/ducks'),
      'elements': path.resolve(__dirname, '../src/elements'),
      'layout': path.resolve(__dirname, '../src/layout'),
      'pages': path.resolve(__dirname, '../src/pages'),
      'store': path.resolve(__dirname, '../src/store'),
      'utils': path.resolve(__dirname, '../src/utils'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './template/index.html',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.styl$/,
      options: {
        stylus: {
          use: [require('rupture')()],
          import: [path.resolve(__dirname, '../', 'src/styles/main.styl')],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[contenthash].css' : '[name].css',
    }),
  ],
};
