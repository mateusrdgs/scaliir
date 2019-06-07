const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const postStylus = require('poststylus')
const rupture = require('rupture')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.styl$/,
      options: {
        stylus: {
          use: [rupture(), postStylus(['rucksack-css', 'lost'])],
        },
      },
    }),
  ],
  devServer: {
    contentBase: 'build',
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
})
