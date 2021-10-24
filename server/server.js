const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const port = process.env.PORT || 4001;
const index = require('./routes/index');

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', function (socket) {
  console.log('소켓 접속 완료');

  socket.on('roomjoin', user => {
    console.log(user);
    socket.join(user);
  });

  socket.on('noti', noti => {
    io.to(noti.user).emit('noti', noti);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
