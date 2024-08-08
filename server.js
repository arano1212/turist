import http from 'http'
import back from './src/api.js'
import './src/config/database.js'

const server = http.createServer(back)

server.on('listening', () => {
  console.info('server  running in http:localhost:8000')
})

server.listen(8000)
