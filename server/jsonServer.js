const jsonServer = require('json-server')
const jserver = jsonServer.create()
const router = jsonServer.router('src/db.json')
const middlewares = jsonServer.defaults()
jserver.use(middlewares)
jserver.use(router)

module.exports = jserver
