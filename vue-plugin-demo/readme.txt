这个Demo的目的：写一个vue的plugin，使用webpack打包后，发布到npm官网上，供他人下载使用

相关技术栈
html/css/js
vue
eslint
webpack
npm

Demo相关步骤：
1、新建一个文件夹，命名为vue-plugin-demo，进入项目文件夹，使用npm init创建一个package.json
2、使用eslint规范项目代码：
	> 安装eslint			npm install eslint --save-dev
	> npx eslint --init		生成.eslintrc.js文件
	> 使用vscode编写代码
3、新建.vue文件，编写plugin的样式
4、新建index.js,写plugin的主要功能，对外提供的属性和方法
5、安装相应的loader，使用webpack打包
	> js相关loader：
		babel-loader 		//Babel处理ES6语法
		@babel/core 
		@babel/preset-env
		@babel/polyfill		//解析ES6中的promise，map等语法

	> sass相关loader:	//本项目没有.sass文件，sass语法写在了vue代码里，所有要把相应的loader放到匹配.vue文件中
		style-loader
		css-loader
		sass-loader node-sass
		postcss-loader autoprefixer		//添加浏览器前缀

	> vue相关loader:	
		vue-loader vue-template-compiler
		VueLoaderPlugin
			const { VueLoaderPlugin } = require('vue-loader');
			new VueLoaderPlugin(),

6、webpack相关的plugin配置
	> html-webpack-plugin 动态创建模板
		在src下新建index.html
	> clean-webpack-plugin 每次打包时清空之前的打包的文件

！弄了一天，该写的都写了，该加的都加了，效果还是出不来！！！	