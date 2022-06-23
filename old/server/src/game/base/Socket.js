//Libraries
import socketIO from "socket.io";

//Components
import Mind from "./Mind";
//import Events from './events/Events.js';

export default class Socket {
  constructor(io) {
    console.log("Listening for socket Connections....");

    let users = [];
    let sockets = {};

    io.on("connection", (socket) => {
      console.log("Connection established: " + socket.id);

      //Add Player to player list
      Mind.gameData.players.push({ id: socket.id, x: 0, y: 0 });
      console.log("Player List: ", Mind.gameData.players);

      //Transmissions and Client Requests
      socket.on("get gameData", () => {
        console.log("REQUEST DATA");
        socket.emit("gameData", Mind.gameData);
      });

      //Lost Connections
      socket.on("disconnect", () => {
        Mind.gameData.players = Mind.gameData.players.filter(
          (v) => v.id !== socket.id
        );
        console.log(
          "user disconnected",
          socket.id,
          "User Array: ",
          Mind.gameData.players
        );
        socket.broadcast.emit(
          "userDisconnect",
          socket.id.substring(socket.id.length - 10, 10)
        );
      });
    });
  }
}
