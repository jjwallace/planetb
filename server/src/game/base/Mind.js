
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
    
    this.solarData = solarData
    console.log('Here is the data: ', solarData)

    this.gameData = {
      gameState: 'pause',
      players: [],
      entities: solarData.entities
    }

    
    this.update = new Update(this);
    this.loop = new Loop(this.update);

  }

}

export default new Mind();
