const express = require('express');
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, (req, res) => {
    res.sendfile(__dirname + "/dist/index.html")
})
app.listen(80);

const http = require('http')
const socket = require('socket.io')

let server = http.createServer((req, res) => {

}).listen(3000);

const io = socket(server)

io.on('connection', (socket) => {
    io.emit('personCnt', io.engine.clientsCount)
    console.log('connection client 수', io.engine.clientsCount)
    socket.on('chat', (msg) => {
        let data = JSON.parse(msg)
        console.log(data)
        console.log(data.name)
        console.log(data.message)
        io.emit('chat', data)
    })

    socket.on('disconnect', () => {
        io.emit('personCnt', io.engine.clientsCount)
        console.log('disconnect client 수', io.engine.clientsCount)
    })

    socket.on('disconnected', () => {
        io.emit('personCnt', io.engine.clientsCount)
    })

    // socket.on('newenter', () => {
    //     io.emit('enter')
    // })

    socket.on('type', () => {
        socket.broadcast.emit('otherTyping')
    })
})
