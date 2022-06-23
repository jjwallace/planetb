import Brain from '../base/Brain'

import PixiPlanet from '../entities/PixiPlanet';
import Unit from '../entities/Unit';


import SurfaceEntity from '../entities/SurfaceEntity';


import StarField from '../entities/StarField';


export default class Spawner {
    
    constructor(){
        console.log('Spawner Present')

        
    }

    spawnStarField(){
        let starField = new StarField({x:0, y:0});
    }

    spawnAll(){

        //this.spawnStarField(); //Way to heavy


        // Entities spawner
        for (let index = 0; index < Brain.gameData.entities.length; index++) {
            let entityData = Brain.gameData.entities;
            let entity = null

            if(entityData[index].type == 'planet'){
                entity = new PixiPlanet(entityData[index]);
            }else if(entityData[index].type == 'unit'){
                entity = new Unit(entityData[index]);
            }

            entity.data = entityData[index];
            entity.x = entityData[index].location.x;
            entity.y = entityData[index].location.y;




            Brain.entities.push(entity);
            console.log('Entity Created', entity);
        }
    }
}