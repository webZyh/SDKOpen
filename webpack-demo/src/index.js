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

const arr = [1,2,3,4,5,6]

const arr2 = arr.map((item)=>{
	return item*3;
})

console.log(arr);
console.log(arr2);