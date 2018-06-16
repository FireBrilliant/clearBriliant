const Router = require('koa-router')
let qs = require('qs')
const sellerData = require('./seller.json')
const goodsData = require('./goods.json')
const ratingsData = require('./ratings.json')
let sell = new Router()
sell.all('/seller', async (ctx) => {
  ctx.body = sellerData
})
sell.all('/goods', async (ctx) => {
  ctx.body = goodsData
})
sell.all('/ratings', async (ctx) => {
  ctx.body = ratingsData
})
module.exports = sell