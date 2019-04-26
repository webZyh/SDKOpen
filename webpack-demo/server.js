const express = require('express')
const webpack =require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.js')

//在node中使用webpack
const complier = webpack(config)

const server = express()

server.use(webpackDevMiddleware(complier,{
	//publicPath: config.output.publicPath		//可以不写
}))

server.listen(3000,()=>{
	console.log('server is running')
})