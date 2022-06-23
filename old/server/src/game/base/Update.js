//Libraries

//Components
import { orbit } from "./utils/orbit";

export default class Update {
  constructor(Mind) {
    console.log("Update Active");

    this.mind = Mind;
  }

  updateGame() {
    this.entities();
  }

  entities() {
    let entities = this.mind.gameData.entities;
    for (let index = 0; index < entities.length; index++) {
      let entity = entities[index];

      if (entity.parent != "") {
        let parentObject = entities.find((e) => e.name === entity.parent);
        //console.log('PARENT: ' , parentObject.location.x)

        let loc = orbit(parentObject, entity);

        entity.location = loc;
        //console.log(loc);
      }
    }
  }
}
