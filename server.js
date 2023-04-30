const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app); 
const io= require('socket.io')(http);

const PORT = 3000 || process.env.PORT;

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg);
    });
});

app.listen(PORT,()=>{
    console.log(`server running on port : ${PORT}`);
})
