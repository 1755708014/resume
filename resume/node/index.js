var http = require('http')

var server = http.createServer(function (req, res) {
  setTimeout(function () {
    console.log(req)
    res.setHeader('Content-Type', 'text/css;charset=utf-8')
    res.write('<h1>大大大多</h1>')
    res.end()
  }, 2000)
})
server.listen(9999)