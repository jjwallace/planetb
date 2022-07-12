import Brain from './Brain'
import PixiPlanet from '../entities/PixiPlanet';

import {
    forces
  } from "../../server/src/game/base/utils/forces";
  import {
    orbit
  } from "../../server/src/game/base/utils/orbit";
  import {
    gravity
  } from "../../server/src/game/base/utils/gravity";
  import {
    pointMove
  } from "../../server/src/game/base/utils/pointMove";
  import {
    surface
  } from "../../server/src/game/base/utils/surface";
  

export default class Update {
    
    constructor(){
        console.log('Spawner Present')
    }

    updateEntitiesRender(){
        
        // Entities spawner
        let entities = Brain.entities;

        Brain.connect.getData();
        
        if(entities.length > 0 && entities != null){
            for (let index = 0; index < entities.length; index++) {
                let entity = entities[index];

                var entityByUID = Brain.gameData.entities.find(e => e.uuid === entity.data.uuid)
                
                if ('x' in entityByUID.location){
                    entity.x = entityByUID.location.x;
                    entity.y = entityByUID.location.y;
                }

                if ('r' in entityByUID.location){
                    //entity.angle = entityByUID.location.r;
                }

                if ('s' in entityByUID.location){
                    // entity.angle = entityByUID.location.s;
                    // console.log(entityByUID.location.s)
                }
            }
        }
    }

    UpdateUtils(){  
        
        if(Brain.gameData !== null){
            let e = Brain.gameData.entities;
            for (let index = 0; index < e.length; index++) {
                let entity = e[index];

                if('velocity' in entity && 'location' in entity){
                    entity.velocity = gravity(e, entity)
                    //console.log(entity.location)
                }

                if('velocity' in entity){//entity.type == 'unit'){
                    entity = forces(entity);
                }

                if(entity.type == 'surface'){
                    entity = surface(Brain.gameData.entities, entity);
                }

            }
        }
    }
}