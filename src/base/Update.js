import Brain from './Brain'
import PixiPlanet from '../entities/PixiPlanet';

export default class Update {
    
    constructor(){
        console.log('Spawner Present')
    }

    entities(){
        // Entities spawner
        let entities = Brain.gameData.entities;
        for (let index = 0; index < entities.length; index++) {
            let entity = entities[index];
            entity.x = myArray.find(entitiy => gameData.entities.uid === entity.data.uid).location.x;
            entity.y = myArray.find(entitiy => gameData.entities.uid === entity.data.uid).location.y;
        }
    }
}