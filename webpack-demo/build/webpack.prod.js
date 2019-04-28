const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');	//启用css压缩

const prodConfig = {
	mode:'production',		
	devtool:"cheap-module-source-map",
	optimization: {
	    minimizer: [new OptimizeCSSAssetsPlugin({})],
	},
	plugins: [
	    new MiniCssExtractPlugin({
	      filename: '[name].css',
	      chunkFilename: '[name].css',
	    }),
	],
	module:{
		rules:[
			{
				test: /\.css$/,
				use: [
					 	MiniCssExtractPlugin.loader,
					 	{
					 		loader:'css-loader',
					 		options:{
					 			importLoaders: 2,	
					 			modules: true,	
					 		}
					 	},
					 	'postcss-loader'	
					 ]
			},
			{
				test: /\.sass$/,
				use: [
					 	MiniCssExtractPlugin.loader,
					 	{
					 		loader:'css-loader',
					 		options:{
					 			importLoaders: 2,	
					 			modules: true,	
					 		}
					 	},
					 	'sass-loader',
					 	'postcss-loader'	
					 ]
			}
		]
	}
}

module.exports = merge(commonConfig, prodConfig);