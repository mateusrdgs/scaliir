const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const postStylus = require('poststylus')
const rupture = require('rupture')

const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/main.tsx'],
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      test: /\.styl$/,
      options: {
        stylus: {
          import: [path.resolve('src', 'styles', 'config', 'variables.styl')],
          preferPathResolver: 'webpack',
          use: [rupture(), postStylus(['rucksack-css', 'lost'])],
        },
      },
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../', 'build'),
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
  },
  devtool: 'cheap-module-eval-source-map',
})
