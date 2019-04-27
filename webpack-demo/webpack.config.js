const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode:'development',		//开发环境，不启用压缩
	devtool:"cheap-module-eval-source-map",	//配置sourceMap	
	//production  devtool:"cheap-module-source-map",
	entry:'./src/index.js',
	output:{
		filename:'[name].js',
		path: path.resolve(__dirname,'dist'),	//__dirname:当前路径
		//publicPath:'/'	//给引用的js文件加上一个前缀
	},
	devServer:{
		contentBase: './dist',		//在哪个目录启动服务器
		open: true,   //启动webpackDevServer时，自动打开浏览器
		port: 8080,		//指定端口号
		hot: true,	
		//设置HMR热模块，修改样式时不刷新页面，样式动态改变
		//需要引入webpack的HotModuleReplacementPlugin插件
		//
		hotOnly: true 	//hot: true,有问题，也不刷新浏览器
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: 'src/index.html'	//以该文件为模板
		}),
		new CleanWebpackPlugin(),	//每次打包时清空之前打包的文件目录
		new webpack.HotModuleReplacementPlugin()
	],
	optimization:{
		usedExports: true
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
			    loader: "babel-loader",		//解析es6语法
			    /*
			    options:{		//这个option里的内容可以放到根目录下的.babelrc配置文件中
			  		"presets": [
				  		["@babel/preset-env",{
				  			useBuiltIns: "usage",
				  			targets:{
				  				chrome:'67'
				  			}
				  		}]
			  		],	//此方法会污染全局环境 
			  		// 安装@babel/plugin-transform-runtime 以闭包的形式注入，不会污染全局环境
			  		// 	"plugins": [
					 //    [
					 //      "@babel/plugin-transform-runtime",
					 //      {
					 //        "corejs": 2,	//需要安装一个包@babel/runtime-corejs2
					 //        "helpers": true,
					 //        "regenerator": true,
					 //        "useESModules": false
					 //      }
					 //    ]
					 // ] 
			    } */
		    },
		]
	}
}