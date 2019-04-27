const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
	mode:'development',		//开发环境，不启用压缩
	devtool:"cheap-module-eval-source-map",	//配置sourceMap	
	devServer:{
		contentBase: './dist',		//在哪个目录启动服务器
		open: true,   //启动webpackDevServer时，自动打开浏览器
		port: 8080,		//指定端口号
		hot: true,	
		//设置HMR热模块，修改样式时不刷新页面，样式动态改变
		//需要引入webpack的HotModuleReplacementPlugin插件
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
	optimization:{
		usedExports: true
	},
	module:{
		rules:[
			{
				test: /\.css$/,
				use: //['style-loader','css-loader'] //需要两个loader
				//loader的执行顺序是从下往上，从右往左的
					 [
					 	'style-loader',
					 	{
					 		loader:'css-loader',
					 		options:{
					 			importLoaders: 2,	//会多次使用下面的sass-loader,postcss-loader
					 			modules: true,	//可以使用某个特定css文件中的样式
					 		}
					 	},
					 	'postcss-loader'	//需要新增一个配置文件 postcss.config.js
					 ]
			},
			{
				test: /\.sass$/,
				use: //['style-loader','css-loader'] //需要两个loader
				//loader的执行顺序是从下往上，从右往左的
					 [
					 	'style-loader',
					 	{
					 		loader:'css-loader',
					 		options:{
					 			importLoaders: 2,	//会多次使用下面的sass-loader,postcss-loader
					 			modules: true,	//可以使用某个特定css文件中的样式
					 		}
					 	},
					 	'sass-loader',
					 	'postcss-loader'	
					 ]
			}
		]
	}
}

module.exports = merge(commonConfig, devConfig);