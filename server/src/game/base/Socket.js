//Libraries
import socketIO from 'socket.io';

//Components
import Mind from "./Mind";

export default class Socket {
  constructor(io) {
    console.log('Listening for socket Connections....')

    const users = [];
    const sockets = {};

    io.on('connection', (socket) => {
      console.log('Connection established: ' + socket.id);

      //Add Player to player list
      Mind.gameData.players.push({
        id: socket.id,
        x: 0,
        y: 0
      });
      console.log('Player List: ', Mind.gameData.players);

      //Transmissions and Client Requests *************************************************
      socket.on('get gameData', () => {
        //console.log('REQUEST DATA')
        socket.emit('gameData', Mind.gameData);
      });

      socket.on('keyboard', (keyboard) => {
        //console.log('receieved keybaord', keyboard);
        Mind.keyboard = keyboard;
      });

      socket.on('select', (selected) => {
        console.log('receieved selected', selected);
        Mind.selected = selected;
      });
      //***********************************************************************************

      //Lost Connections
      socket.on('disconnect', () => {
        Mind.gameData.players = Mind.gameData.players.filter(v => v.id !== socket.id);
        console.log('user disconnected', socket.id, 'User Array: ', Mind.gameData.players);
        socket.broadcast.emit('userDisconnect', socket.id.substring(socket.id.length - 10, 10));
      });
    });
  }
}