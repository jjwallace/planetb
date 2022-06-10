import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import socketIO from 'socket.io';
import httpServer from 'http-server';
import cors from 'cors';

import Main from './game/Main';

console.log('Server Running')

dotenv.config();
const app = express();
const socketServer = http.createServer(app);



const io = socketIO(socketServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });
 
app.use(cors()); 

//Here is our game **Entry Point**
const main = new Main(io);

app.use(express.urlencoded({ extended: false }))

//SERVER LIST FOR SOCKETS

const serverPort = 4001;

// request handlers
app.get('/test', (req, res) => {
    console.log('Someone tested me...')
    res.send('The server is running...');
});

app.listen(serverPort, () => {
    console.log(`Server listening on port ${serverPort}`)
});



