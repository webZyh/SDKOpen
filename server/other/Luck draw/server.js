const Koa = require('koa');
const static = require('koa-static');

const server = new Koa();

// function rnd(n,m){
//     return Math.floor(Math.random()*(m-n)+n);
// }

server.use(async(ctx,next)=>{
    // console.log(ctx.request.path);
    if(ctx.request.path == '/draw'){

        let n = Math.random();

        if(n<0.05){ //5%
            ctx.response.body = 1;
        }else if(n<0.2){   //15%
            ctx.response.body = 2;
        }else if(n<0.4){    //20%
            ctx.response.body = 3;
        }else{
            ctx.response.body = 0;
        }
        
    }else{
        await next();
    }
})

server.use(static('./www'));

server.listen(8080);