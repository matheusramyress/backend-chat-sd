const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname,'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.json());

app.use('/',(req, res)=>{
    res.render('index.ejs');
});
let messages = [];

io.on('connection',socket => {

    console.log(`Socket conectado:${socket.id}`);

    socket.emit('previousMessages',messages);

    socket.on('sendMessage', data => {
        messages.push(data);//manda para o banco
        socket.broadcast.emit('receivedMessage',data);
    });


});

server.listen(3009, ()=>{
    console.log('Conectado na porta 3005');
});