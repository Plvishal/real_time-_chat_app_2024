import http from 'http';
import { Server } from 'socket.io';
import app from './app.js';

const server = http.createServer(app);
const io = new Server(server);

//Socket.io connection
io.on('connection', (socket) => {
  console.log('New Client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server running on the http://localhost:${process.env.PORT}`);
});
