//Libraries


//Components
import Mind from "./Mind";
import { forces } from "./utils/forces";
import { orbit } from "./utils/orbit";

export default class Update {
    
    constructor(Mind){
        console.log('Update Active')

        this.mind = Mind;
    }

    updateGame(){
        this.entities();
        this.updateKeyboard();
    }

    updateKeyboard(){
        //Below Code is keyboard input for a unit
        let entities = this.mind.gameData.entities;
        
        if(this.mind.selected != null){
            let selectedEntity = entities.find(o => o.uuid === Mind.selected);
            console.log(selectedEntity);

            if ('acc' in selectedEntity){
                if ('r' in selectedEntity.acc){
                    if(Mind.keyboard.ArrowLeft == true){
                        selectedEntity.acc.r -= 2
                    }
                    if(Mind.keyboard.ArrowRight == true){
                        selectedEntity.acc.r += 2
                    }
                }
            }

            if(Mind.keyboard.ArrowUp == true){
                
            }
        }
    }

    entities(){
        let entities = this.mind.gameData.entities;
        for (let index = 0; index < entities.length; index++) {
            let entity = entities[index];

            //entity = forces(entity)

            if(entity.parent != "" && 'location' in entity){

                let parentObject = entities.find(e => e.name === entity.parent)
                //console.log('PARENT: ' , parentObject.location.x)

                let loc = orbit(parentObject, entity)
                

                entity.location = loc;
                //console.log(loc);
            }

            //Lets check if any entites have acceleration force
            if ('location' in entity && 'acc' in entity){
                if ('x' in entity.location){
                    entity.location.x += entity.acc.x;
                }
                if ('y' in entity.location){
                    entity.location.y += entity.acc.y;
                }
                if ('c' in entity.location){
                    entity.location.c += entity.acc.c;
                }
            }
        }
    }
}