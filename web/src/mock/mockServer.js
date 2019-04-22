/*
* 使用mockjs提供mock数据接口
* */
import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/developDoc',{code:0, data: data.docData});


//export default  不需要向外暴露任何数据，只需要在main.js中执行一遍
