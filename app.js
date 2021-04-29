const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.get('/', (req, res) => {
    res.send('hello world')
});
io.on('connection', (socket) => {
    console.log('connected');
    socket.on('disconnect', () => {
        console.log('disconnect')
    })
})
http.listen(3000, ()=> {
    console.log('监听~')
})