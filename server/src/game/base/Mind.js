//Where we left off, everything broken..
//We can send x and y cords to client however client socket needs to update




//Libraries


//Components
import Update from "./Update";
import Loop from "./Loop";

//Data
import solarData from './data/solar.json'


class Mind {
  //**** WARNING: APPLICATION GOD CLASS *****   Static Instance / Singleton

  constructor() {
    if (!instance) {
      var instance = this;
    }
    this.time = new Date();    
    
    this.solarData = solarData;
    console.log('Here is the data: ', solarData);

    this.gameData = {
      gameState: 'pause',
      players: [],
      entities: solarData.entities
    }
    
    this.selected = null;
    this.keyboard = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false,
    }
    
    this.update = new Update(this);
    //this.update.updateGame();
    this.loop = new Loop(this.update);

  }

}

export default new Mind();
