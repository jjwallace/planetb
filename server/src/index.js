
//Libraries
import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import httpServer from 'http-server';
import cors from 'cors';

//Components
import Socket from './game/base/Socket';
import Mind from "./game/base/Mind";

//Assets & Misc

//Lets setup
dotenv.config();
const app = express();
const server = http.createServer(app);
let io = new Server(server, { cors: { origin: '*' } });
let port = process.env.PORT || 3000;

new Socket(io);

server.listen(port, () => {
  console.log('[INFO] Listening on *:' + port);
});

app.get('/test', (req, res) => {
    console.log('Someone tested me...')
    res.send('The server is running...');
});