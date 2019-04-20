const express = require("express");
const mysql = require("mysql");
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'dbname'
});

module.exports = function(){
    let router = express.Router();

    router.get('/banner',(req,res)=>{
        db.query(`SELECT * FROM banner_table`,(err, data)=>{
            if (err){
                res.status(500).send('database error').end();
            }else{
                if (data.length!=0){
                    res.json({
                        code: 0,
                        msg: '',
                        data: data
                    })
                }
            }
        })
    })
    return router;
}