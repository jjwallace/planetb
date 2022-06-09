import { Container, Point } from 'pixi.js';
import * as PIXI from 'pixi.js';
import * as PixiPlugin from 'gsap/PixiPlugin';

//objects
//import solarData from './assets/data/solar.json'

//import Renderer from './Renderer';

class Brain {
  //Static Instance / Singleton
  //**** WARNING: APPLICATION GOD CLASS *****

  constructor() {
    if (!instance) {
      var instance = this;
    }
    this.time = new Date();    
    
    this.app = null;
    this.viewport = null;
    this.entities = [];
    //this.solarData = JSON.parse(solarData);
    

  }

  entityUpdateZoom() {
    // const minZoom = 3;
    // const maxZoom = 7;
    // let zoom = this.viewport.scale;
    // let zoomRounded = maxZoom - zoom.x * maxZoom;
    // if (zoomRounded < minZoom) {
    //   zoomRounded = minZoom;
    // }
    // // console.warn('zoomed R: ', zoomRounded);
    // for (let i = 0; i < this.indexFilter.length; i++) {
    //   let v = this.indexFilter[i];
    //   // this.entities[v].medal.alpha = (1 / zoomRounded + 3);
    //   this.entities[v].medal.scale.set(zoomRounded / 2.5);
    // }
  }

}

export default new Brain();
