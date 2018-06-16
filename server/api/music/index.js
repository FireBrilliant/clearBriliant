const Router = require('koa-router')
let qs = require('qs')
const axios = require('axios')
axios.defaults.headers = {'Content-Type': 'application/x-www-form-urlencoded'}
let music = new Router()
music.all('/getDiscList', async (ctx) => {
  let url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  let {data} = await axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: ctx.query
  })
  ctx.body = data
})
  .all('/getCdInfo', async (ctx) => {
    var url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
    let {data} = await axios.get(url, {
      headers: {
        referer: 'https://c.y.qq.com/',
        host: 'c.y.qq.com'
      },
      params: ctx.query
    })
    let ret = data
    if (typeof ret === 'string') {
      var reg = /^\w+\(({.+})\)$/
      var matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    ctx.body = ret
  })
  .all('/lyric', async (ctx) => {
    let url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
    let {data} = await axios.get(url, {
      headers: {
        referer: 'https://c.y.qq.com/',
        host: 'c.y.qq.com'
      },
      params: ctx.query
    })
    var ret = data
    if (typeof ret === 'string') {
      var reg = /^\w+\(({.+})\)$/
      var matches = data.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    ctx.body = ret
  })
  .post('/getPurlUrl', async (ctx) => {
    const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
    let {data} = await axios.post(url, ctx.request.body, {
      headers: {
        referer: 'https://y.qq.com/',
        origin: 'https://y.qq.com',
        'Content-type': 'application/x-www-form-urlencoded'
      }
    })
    // console.log(data.url_mid.data)
    data = JSON.stringify(data)
    ctx.body = data
  })
module.exports = music