// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
//const { default: routes } = require('./routes')
const { default: RouterHelper } = require('./routerHelper')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id',
}))
RouterHelper(server,router)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
