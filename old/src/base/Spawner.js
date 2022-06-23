import Brain from "../base/Brain";

import PixiPlanet from "../entities/PixiPlanet";
import StarField from "../entities/StarField";

export default class Spawner {
  constructor() {
    console.log("Spawner Present");
  }

  spawnStarField() {
    let starField = new StarField({ x: 0, y: 0 });
  }

  spawnAll() {
    //this.spawnStarField(); //Way to heavy

    // Entities spawner
    for (let index = 0; index < Brain.gameData.entities.length; index++) {
      let entity = new PixiPlanet(Brain.gameData.entities[index]);
      entity.data = Brain.gameData.entities[index];
      entity.x = Brain.gameData.entities[index].location.x;
      entity.y = Brain.gameData.entities[index].location.y;
      Brain.entities.push(entity);
      //Brain.viewport.addChild(entity);  //This is now done on the entity object itself

      console.log("Entity Created", entity);
    }
  }
}
