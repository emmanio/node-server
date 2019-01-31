const server = require('./server')

const Port = 3000

server.listen(Port, function () {
  console.log('Server is listening on port', Port)
})