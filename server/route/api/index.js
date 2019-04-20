const express = require('express');
const mysql = require('mysql')

//连接数据库
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'dbname'
});
//console.log(db);
module.exports = function () {
    let router = express.Router();

    //首页数据路由
    router.use('/home',require('./home')());

    //注册
    router.post('/register', (req, res) => {
        console.log(req.body);
        let {username, password} = req.body;
        console.log(username, password);
        //检查用户名是否已注册
        db.query(`SELECT * FROM user_table where username='${username}'`, (err, data) => {
            if (err) {
                res.status(500).send('database error').end();
            } else {
                if (data.length == 0) {
                    //不存在此用户，将此注册用户插入数据库中
                    db.query(`INSERT INTO user_table (user_id,username,password) VALUES (0, '${username}' ,'${password}') `, (err, data) => {
                        if (err) {
                            res.status(500).send('database error').end();
                        } else {
                            if (data) {
                                res.json({
                                    code: 0,
                                    msg: '注册成功'
                                })
                            }
                        }
                    })
                } else {
                    res.json({
                        code: 1,
                        msg: '用户已存在'
                    })
                }
            }
        })
    });
    //登录
    router.post('/login', (req, res) => {
        let {username, password} = req.body;
        db.query(`SELECT * FROM user_table where username='${username}'`, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send('database error').end();
            } else {
                //用户名不存在
                if(data.length == 0){
                    res.json({
                        code: 2,
                        msg : '用户不存在!'
                    })
                }else if (data[0].password != password) {     //密码不正确
                    res.json({
                        code: 1,
                        msg: '密码错误',
                    })
                } else {
                    //设置cookie
                    res.cookie("user_id", data[0].user_id, {
                        path: '/',
                        maxAge: 1000 * 60 * 60,     //一个小时过期
                        signed:true     //cookie加签名
                    })

                    res.cookie("username",data[0].username,{
                        //此cookie存储目的是提供检查登录状态的接口
                        path: '/',
                        maxAge: 1000 * 60 * 60,
                        signed: false   //加签名后，检查登录接口获取不到值
                    });
                    //设置session
                    // req.session['user_id'] = data[0].user_id;
                    res.json({
                        code: 0,
                        msg: '登录成功',
                        data: {
                            username: data[0].username
                        }
                    })
                }
            }
        })
    });
    //检查登录状态
    router.get('/checkLogin', (req, res) => {
        if (req.cookies.username) {
            res.json({
                code: 0,
                msg: '',
                data: req.cookies.username|| ''
            })
        } else {
            res.json({
                code: 1,
                msg: '未登录',
                data: ''
            })
        }
    });
    //退出
    router.post('/logout', (req, res) => {
        res.cookie('user_id', '', {
            path: '/',
            maxAge: -1
        });

        res.cookie('username', '', {
            path: '/',
            maxAge: -1
        });
        res.json({
            code: 0,
            msg: '',
            data: ''
        })
    });
    return router;
}