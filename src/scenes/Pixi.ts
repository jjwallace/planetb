//Libraries
import React from 'react';
import ReactDOM from 'react-dom'
import * as PIXI from 'pixi.js';
import { Application } from 'pixi.js';
import { Viewport } from 'pixi-viewport';

//Components
import Brain from '../base/Brain'
import Ticker from '../base/Ticker'
import orbit from '../base/utils/orbit'

//Assets & Misc
import PixiPlanet from '../entities/PixiPlanet';

export default class Pixi {
  constructor() {
    console.log('HELLO WORLD, I am running Pixi');

    Brain.app = new Application({
      backgroundColor: 0x333,
      width: window.innerWidth,
      height: window.innerHeight,
      antialias: true
  
    });

    document.body.appendChild(Brain.app.view)

    if (Brain.viewport == null) {
      //CREATE VIEWPORT
      Brain.viewport = new Viewport({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        worldWidth: 10000,
        worldHeight: 10000
        //interaction: app.renderer.interaction // the interaction module is important for wheel() to work properly when renderer.view is placed or scaled
        //REFER TO PIXI VIEWPORT PLUGIN DOCS ON GIT
      });
    
      // Brain.uiContainer = new PIXI.Container();
      // Brain.viewport.addChild(Brain.uiContainer);
    
      // Brain.UI = new Viewport({
      //   screenWidth: window.innerWidth,
      //   screenHeight: window.innerHeight
      // });
    
    
      //INIT VIEWPORT
      Brain.viewport
        .drag()
        .pinch()
        .wheel()
        .decelerate()
        .clampZoom(
          { 
            minWidth: window.innerWidth / 4, 
            minHeight: window.innerHeight / 4,
            maxWidth: window.innerWidth * 20, 
            maxHeight: window.innerHeight * 20 ,
          }
        );
    
      //UPDATE ENTITY ZOOM
      Brain.viewport.on('zoomed-end', () => Brain.entityUpdateZoom());
      Brain.viewport.on('snap-zoomed-end', () => Brain.entityUpdateZoom());
      Brain.viewport.on('zoomed-end', () => Brain.entityUpdateZoom());
    
      //DOCUMENTS: https://davidfig.github.io/pixi-viewport/

      Brain.app.stage.addChild(Brain.viewport)
    }
 
    // console.log("Solar Data", Brain.solarData.entities[0])
    // const planet = new PixiPlanet(Brain.solarData.entities[0]);
    // planet.x = 0
    // planet.y = 0
    // Brain.viewport.addChild(planet);
    // planet.anchor.set(0.5);

    



    // // Entities spawner
    // for (let index = 0; index < Brain.solarData.entities.length; index++) {

    //   let entity = new PixiPlanet(Brain.solarData.entities[index]);
    //   entity.x = Brain.solarData.entities[index].location.x;
    //   entity.y = Brain.solarData.entities[index].location.y;
    //   Brain.entities.push(entity);
    //   Brain.viewport.addChild(entity);

    //   console.log('Entity Created', entity);
    // }

    Brain.viewport.moveCenter({x: 0, y:0})



    // Brain.viewport.snapZoom(
    //   {
    //     center: {x: 0,y: 0},
    //     time: 3000,
    //     interupt: true,
    //     width: 400,
    //     ease: "easeInOutCubic"
    //   }
    // )

    // Listen for animate update
    Brain.app.ticker.add((delta) => {
      Brain.tick();
    });
    
  } 
}





//document.body.appendChild(app.view);


