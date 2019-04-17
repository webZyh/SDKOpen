const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');

const server = express();
server.listen(3000, () => {
    console.log('服务器启动');
});

//处理cookie、session
server.use(cookieParser(''));
(function () {
    let keys = [];
    for (let i = 0; i < 100000; i++) {
        keys[i] = 'keys_' + Math.random();
    }
    server.use(cookieSession({
        name: 'user_id',
        keys: keys,
        maxAge: 20 * 60 * 1000
    }))
})();
//处理数据get/post/files
server.use(bodyParser.urlencoded({
    extended: false,
    limit: 1000
}))

server.use(multer({
    dest: './static/upload'
}).any());

//配置模板引擎
server.set('views', './template');
server.set('view engine', 'html');
server.engine('html', consolidate.ejs);

//路由
server.use('/api/', require('./route/api/index.js')());


//处理静态页面(需要放到最后一步)
server.use(static('./static'));

