//Libraries


//Components
import orbit from "./utils/orbit";

export default class Update {
    
    constructor(Mind){
        console.log('Update Active')

        this.mind = Mind;
    }

    updateGame(){
        this.entities();
    }

    entities(){
        // Entities spawner

        const calcOrbit = orbit('http');

        console.log('Update Mind object: ' , calcOrbit)

        let entities = this.mind.gameData.entities;
        for (let index = 0; index < entities.length; index++) {
            let entity = entities[index];
            if(entity.parent != null || entitiy.parent != undefined){
                entity.loc = orbit(entity.parent, entity)
                console.log(entity.loc);
            }
        }
    }
}