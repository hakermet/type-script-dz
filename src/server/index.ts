import express, { Request, Response } from 'express';
import * as http from 'http';
import { Server } from 'socket.io';
import path from 'path';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, '../../dist')));

app.all('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on("user connected", (username) => {
    console.log(`${username} connected to chat`);
    io.emit("chat message", `${username} joined the chat`);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
}); 