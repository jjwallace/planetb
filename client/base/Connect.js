import socketIOClient from "socket.io-client";
//import Brain from "./Brain"

export default class Connect {

  constructor(Brain) {

    this.brain = Brain;

    const config = {
      endpoint: window.location.hostname + ":3000"
    }

    this._createdTime = new Date();
    console.log("Connect Component Created");

    this.socket = socketIOClient(config.endpoint);
    console.log('Socket Endpoint: ', config.endpoint)

    //Request game data from server
    this.socket.emit("get gameData")

    //Receieve game data from server, SPAWN ITEMS
    this.socket.on("gameData", data => {
      if (Brain.gameData == null) {
        Brain.gameData = data;
        Brain.spawner.spawnAll();
      } else {
        Brain.gameData = data;
        Brain.update.serverEntities();
      }
    });
  }

  sendSelected() {
    this.socket.emit("select", this.brain.selected)
  }

  getData() {
    this.socket.emit("get gameData")
  }

  sendKeyboard(Brain) {
    this.socket.emit("keyboard", Brain.keyboard);
  }

  createdTime() {
    return this._createdTime.toISOString();
  }
}