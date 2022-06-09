import { Application } from 'pixi.js';
import PixiPlanet from '../entities/PixiPlanet';

//Libraries
import React from 'react';
import ReactDOM from 'react-dom'
import * as PIXI from 'pixi.js';
import { Viewport } from 'pixi-viewport';

//Components

//Assets & Misc
import Brain from '../base/Brain'
import Entity from '../../../../sent/loneserver/frontend/app/displayobjects/Entity/Entity';

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
            minWidth: window.innerWidth, 
            minHeight: window.innerHeight ,
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
  
    const planet = new PixiPlanet({name: 'planet', x:0, y: 0});
    planet.x = 0
    planet.y = 0
    Brain.viewport.addChild(planet);
    planet.anchor.set(0.5);

    Brain.viewport.moveCenter({x: 0, y:0})



    //entities spawner
    // for (let index = 0; index < Brain.solarData.length; index++) {
    //   let entity = new PixiPlanet(Brain.solarData[index]);
    //   Brain.entities.push(entity)
    //   console.log(entity);
    // }





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
      // just for fun, let's rotate mr rabbit a little
      // delta is 1 if running at 100% performance
      // creates frame-independent transformation
      planet.rotation += 0.01 * delta;
    });
  } 
}





//document.body.appendChild(app.view);


