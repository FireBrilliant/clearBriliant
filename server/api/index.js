const Router = require('koa-router');
let qs = require('qs');
let api = new Router();
// const sell = require('./sell')
// const music = require('./music')
// api.use('/sell', sell.routes(), api.allowedMethods())
// api.use('/music', music.routes(), api.allowedMethods())\
api.get('/first', async (ctx) => {
  ctx.body = {
    data: 'zhang',
    code: 200
  }
});
api.post('/second',async(ctx)=>{
  let postData = ctx.request.body;
  // ctx.body = postData
  ctx.body = {
    data:'煌',
    code:0
  }
});
module.exports = api;
