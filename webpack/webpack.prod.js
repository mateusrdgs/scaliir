const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const postStylus = require('poststylus')
const rupture = require('rupture')

const common = require('./webpack.common')

const generateStatsFile = process.env.ANALYZE_BUNDLE === 'true'

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'stylus-loader',
        ],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'bundle.[name].[contenthash].css',
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.styl$/,
      options: {
        stylus: {
          import: [path.resolve('src', 'styles', 'config', 'variables.styl')],
          preferPathResolver: 'webpack',
          use: [rupture(), postStylus(['autoprefixer', 'rucksack-css', 'lost'])],
        },
      },
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, '../', 'src', 'assets', 'images', 'react.png'),
      prefix: 'assets/favicons/',
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
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      }),
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
            comments: false,
          },
          safari10: false,
        },
      }),
    ],
  },
})
