//Libraries


//Components
import Mind from "./base/Mind";
import Events from './events/Events.js';

//Assets & Misc


export default class Main {
        
  constructor(io){
    
    const socketPort = 4002;
    io.listen(socketPort, () => {
        console.log(`Socket Server listening on port ${port}`)
    });

    // This is what the socket.io syntax is like, we will work this later
    io.on('connection', socket => {
      console.log('New client connected', socket.id);

      //Add Player to player list
      Mind.gameData.players.push({id: socket.id, x:0, y:0});
      console.log('Player List: ', Mind.gameData.players);

      //const events = new Events(socket, gameData);

      // just like on the client side, we have a socket.on method that takes a callback function
      socket.on('change name', (name) => {
        
        const targetIndex = Mind.gameData.players.findIndex(v => v.id === socket.id);
        if(targetIndex == null){
          console.error('PLAYER NOT FOUND ON NAME CHANGE REQUEST');
        }else{
          console.log(Mind.gameData.players[targetIndex],targetIndex)
          Mind.gameData.players[targetIndex].name = name;
          console.log('Player Set Name: ', name, socket.id);
          console.log('Player List: ', Mind.gameData.players);
        }
        
      })

      // disconnect is fired when a client leaves the server
      socket.on('disconnect', () => {
        Mind.gameData.players = Mind.gameData.players.filter(v => v.id !== socket.id); 
        console.log('user disconnected', socket.id, 'User Array: ', gameData.players);
      })
    })

    io.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
      alert(`connect_error due to ${err.message}`);
    });
      
  }
}