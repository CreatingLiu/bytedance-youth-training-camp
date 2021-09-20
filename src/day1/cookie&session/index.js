const http = require('http')
const router = require('../restful/framework/router')

const secret = "this is a secret"

http.createServer((req, res) => {
    res.setHeader('Set-Cookie', 'abc=123;')
    res.end('hello')
})
.listen(3000)



router.get(
    "/getUser-token"
)