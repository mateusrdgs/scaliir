const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'index.[hash].js',
		path: path.resolve(__dirname, '../', 'dist'),
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
		alias: {
			'react-dom': '@hot-loader/react-dom',
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './template/index.html',
		}),
		new webpack.ProvidePlugin({
			React: 'react',
		}),
	],
};
