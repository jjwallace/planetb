//Libraries

//Components
import Mind from "./Mind";
import {
  forces
} from "./utils/forces";
import {
  orbit
} from "./utils/orbit";
import {
  gravity
} from "./utils/gravity";
import {
  pointMove
} from "./utils/pointMove";
import {
  surface
} from "./utils/surface";

export default class Update {

  constructor(Mind) {
    console.log('Update Active')
    this.mind = Mind;
  }

  updateGame() {
    this.entities();
    this.updateKeyboard();
  }

  updateKeyboard() {
    //Below Code is keyboard input for a unit
    let entities = this.mind.gameData.entities;

    if (this.mind.selected != null) {
      let selectedEntity = entities.find(o => o.uuid === Mind.selected);
      //console.log(selectedEntity);

      if ('velocity' in selectedEntity) {
        if ('r' in selectedEntity.velocity) {
          if (Mind.keyboard.ArrowLeft == true) {
            selectedEntity.velocity.r -= 0.0008
          }
          if (Mind.keyboard.ArrowRight == true) {
            selectedEntity.velocity.r += 0.0008
          }
        }
      }

      if (Mind.keyboard.ArrowUp == true) {
        console.log('MOVE!!!!')
        selectedEntity.velocity = pointMove(selectedEntity);
      }
    }
  }

  entities() {
    let entities = this.mind.gameData.entities;
    for (let index = 0; index < entities.length; index++) {
      let entity = entities[index];

      if ('velocity' in entity && 'location' in entity) {
        entity.velocity = gravity(entities, entity)
        //console.log(entity.location)
      }

      if ('velocity' in entity) { //entity.type == 'unit'){
        entity = forces(entity);
      }

      if (entity.type == 'surface') {
        entity = surface(this.mind.gameData.entities, entity);
      }

      if (entity.parent != "" && 'location' in entity && entity.type == 'planet') {
        let parentObject = entities.find(e => e.name === entity.parent)
        entity.location = orbit(parentObject, entity)
      }




    }
  }
}