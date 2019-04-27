const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry:{		//工具库和业务逻辑代码分开打包
		'main':'./src/index.js',
		//'lodash':'./src/lodash.js',
	},
	output:{
		filename:'[name].js',
		chunkFilename: '[name].chunk.js',
		path: path.resolve(__dirname,'../dist'),	//__dirname:当前路径
		//publicPath:'/'	//给引用的js文件加上一个前缀
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: 'src/index.html'	//以该文件为模板
		}),
		new CleanWebpackPlugin(),	//每次打包时清空之前打包的文件目录
		new webpack.ProvidePlugin({
			$:'jquery',		//一个模块中有$,自动帮其引入jquery
			_:'lodash',
		})

	],
	optimization:{
		splitChunks:{		//SplitChunksPlugin实现代码分割
			chunks:'all',
			minSize: 30000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups:{	
				vendors:{
					test: /[\\/]node_modules[\\/]/,
					priority: -10,	
					name: 'vendors'
				},
				default:{
					priority: -20,	
					reuseExistingChunk: true, 
					name: 'common'
				},
			}
		}
	},
	module:{	//配置其他模块的打包
		rules:[
			{
				test: /\.jpg$/,			//  /\.(jpg|png|gif)$/
				use:{
					loader:'url-loader', //'flie-loader'
					options:{
						//[name]:placeholder占位符
						name:'[name]_[hash].[ext]',		//打包后显示的名字
						outputPath: 'images/',		//打包后文件存放的目录
						limit: 2048,		//限制2018字节（2kb）
					}
				}	//使用file-loader打包.jpg文件
				// npm install file-loader -D 安装
			},
			{
				test: /\.(eot|ttf|svg)$/,			
				use:{
					loader:'file-loader', 
				}	
			},
			{ 
			    test: /\.js$/, 
			    exclude: /node_modules/, 
			    // loader: "babel-loader",
			    use:[
			    	{
			    		loader:"babel-loader"
			    	},
			    	{
			    		loader:"imports-loader?this=>window"
			    	}
			    ]
		    },
		]
	}
}