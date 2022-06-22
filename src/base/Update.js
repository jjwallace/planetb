import Brain from './Brain'
import PixiPlanet from '../entities/PixiPlanet';

export default class Update {
    
    constructor(){
        console.log('Spawner Present')
    }

    entities(){
        
        // Entities spawner
        let entities = Brain.entities;

        Brain.connect.getData();
        
        if(entities.length > 0 && entities != null){
            for (let index = 0; index < entities.length; index++) {
                let entity = entities[index];

                var entityByUID = Brain.gameData.entities.find(e => e.uuid === entity.data.uuid)

                entity.x = entityByUID.location.x;
                entity.y = entityByUID.location.y;
                entity.angle = entityByUID.location.r;

            }
        }
    }
}