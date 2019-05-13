const merge = require('webpack-merge');
const common = require('./webpack.common');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimizer: [new OptimizeCSSAssetsPlugin()],
	},
});
