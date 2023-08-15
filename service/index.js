const cors = require('@koa/cors')
const Koa = require('koa')
const KoaBody = require('koa-body')
const KoaJson = require('koa-json')
const Router = require('koa-router')
const KoaStatic = require('koa-static')
const path = require('path')

const defaultPath = path.resolve('dist')

console.log(defaultPath)

const webroot = KoaStatic(defaultPath)

const serverMidware = (app) => {
  app.use(webroot)
}

const app = new Koa();
const router = new Router()

router.get('/', async ctx => {
  // redirect to /index.html
  ctx.redirect('/index.html')
})

serverMidware(app) // web 服务

app.use(KoaBody.koaBody()).use(cors())
app.use(KoaJson({ pretty: false, param: 'pretty' }))
app.use(router.routes()).use(router.allowedMethods())


app.listen(6278);

console.log('server start at 6278')


