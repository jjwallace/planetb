class Mind {
  //**** WARNING: APPLICATION GOD CLASS *****   Static Instance / Singleton

  constructor() {
    if (!instance) {
      var instance = this;
    }
    this.time = new Date();    
    
    this.gameData = {
      gameState: 'pause',
      players: [],
      entities: []
    }

  }

}

export default new Mind();
