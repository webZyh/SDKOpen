console.log(this === window)

//import './style.css'

/*console.log(_.join(['dd','aa'],'-'));
$('body').css('background','pink')*/
//异步 访问不到lodash内部的方法
/*async function getComponent(){
	const { _ } = await import('lodash');

	let element = document.createElement('div');
	element.innerHTML = _.join(['dd','aa'],'-')

	return element;
}

document.addEventListener('click',()=>{
	getComponent().then((element)=>{
		return document.body.appendChild(element);
	})
})*/
/*function getComponent(){
	return import('lodash').then((_)=>{
		let element = document.createElement('div');
		element.innerHTML = _.join(['dd','aa'],'-')
		return element;
	})
}

document.addEventListener('click',()=>{
	getComponent().then((element)=>{
		return document.body.appendChild(element);
	})
})*/

/*import _ from 'lodash'

console.log(_.join(['a','b','c'],'_'));*/


/*import {add} from './math.js'

add(1,2);*/


/*

import './style.css'	//需要引入css文件，才会被打包

console.log('hello world!')

var btn = document.createElement('button')
btn.innerHTML = '新增';
document.body.appendChild(btn);

btn.onclick = function(){
	var div = document.createElement('div');
	div.innerHTML = 'item';
	document.body.appendChild(div);
}*/
// import "@babel/polyfill"

/*
ES6代码

 const arr = [1,2,3,4,5,6]

const arr2 = arr.map((item)=>{
	return item*3;
})

console.log(arr);
console.log(arr2);*/