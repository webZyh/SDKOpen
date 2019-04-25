const path = require('path');

module.exports = {
	mode:'development',		//不启用压缩
	entry:'./src/index.js',
	output:{
		filename:'bundle.js',
		path: path.resolve(__dirname,'dist')
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
				 			importLoaders: 2,	//
				 			modules: true,	//
				 		}
				 	},
				 	'sass-loader',
				 	'postcss-loader'
				 ]
		},
		{
			test: /\.(eot|ttf|svg)$/,			
			use:{
				loader:'flie-loader', 
			}	
		},

		]
	}
}