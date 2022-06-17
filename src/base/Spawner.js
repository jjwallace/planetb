import Brain from './Brain'

import PixiPlanet from '../entities/PixiPlanet';


export default class Spawner {
    
    constructor(){
        console.log('Spawner Present')
    }

    spawnAll(){
        // Entities spawner
        for (let index = 0; index < Brain.gameData.entities.length; index++) {

            let entity = new PixiPlanet(Brain.gameData.entities[index]);
            entity.x = Brain.gameData.entities[index].location.x;
            entity.y = Brain.gameData.entities[index].location.y;
            Brain.entities.push(entity);
            Brain.viewport.addChild(entity);
    
            console.log('Entity Created', entity);
        }
    }
}