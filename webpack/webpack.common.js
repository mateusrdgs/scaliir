const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const rupture = require('rupture');
const postStylus = require('poststylus');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const environment = require('../config/environment');

const cwd = process.cwd();
const NODE_ENV = process.env.NODE_ENV;
const isDevelopment = NODE_ENV === 'development';
const APP = merge(environment.development, environment[NODE_ENV]);
const styleLoader = isDevelopment ? 'style-loader' : { loader: MiniCssExtractPlugin.loader };
const cssDefaultLoaders = [styleLoader, 'css-loader'];

module.exports = {
  entry: './src/main.tsx',
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(cwd, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/,
        use: [...cssDefaultLoaders],
      },
      {
        test: /\.styl$/,
        use: [...cssDefaultLoaders, 'stylus-loader'],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(cwd, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: NODE_ENV,
      APP: APP,
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.styl$/,
      options: {
        stylus: {
          import: [path.resolve('src', 'styles', 'config', 'variables.styl')],
          preferPathResolver: 'webpack',
          use: [rupture(), postStylus(['autoprefixer'])],
        },
      },
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: './template/index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(cwd, 'src', 'assets'),
        to: path.resolve(cwd, 'build', 'assets'),
      },
    ]),
  ],
};
