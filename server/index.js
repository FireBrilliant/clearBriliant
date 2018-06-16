const Koa = require('koa')
const path = require('path')
const app = new Koa()
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
let home = new Router()
home.get('/', async ( ctx )=>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})

// 子路由2
let page = new Router()
page.get('/404', async ( ctx )=>{
  ctx.body = '404 page!'
}).get('/helloworld', async ( ctx )=>{
  ctx.body = 'helloworld page!'
})
let router = new Router()
const api = require('./api/index')
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())
console.log(api)
app.listen(9002, () => {
  console.log('[demo] static-use-middleware is starting at port 9002')
})