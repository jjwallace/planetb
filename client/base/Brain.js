//Libraries
import { Container, Point } from 'pixi.js';
import * as PIXI from 'pixi.js';
import * as PixiPlugin from 'gsap/PixiPlugin';
import * as Keyboard from 'pixi.js-keyboard';

//Components
import Connect from "./Connect";
import Spawner from './Spawner';
import Update from './Update';
import Navigator from './Navigator';
import { LEFT } from 'phaser';


//objects
//import solarData from './data/solar.json'

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
    this.socket = null;
    this.viewport = null;
    this.entities = [];
    this.gameData = null;

    this.spawner = new Spawner();
    this.update = new Update();
    this.connect = new Connect(this);
    this.navigator = new Navigator(this);
    this.background = null;

    this.selected = null;
    this.keyboard = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false,
    }

    Keyboard.events.on('pressed', null, (keyCode, event) => { 
      if(keyCode.includes("Arrow")){
        //let key = keyCode.replace("Arrow")
        this.keyboard[keyCode] = true;
        this.connect.sendKeyboard(this);
      }   
      console.log('pressed', keyCode); 
    })
    Keyboard.events.on('released', null, (keyCode, event) => { 
      if(keyCode.includes("Arrow")){
        //let key = keyCode.replace("Arrow")
        this.keyboard[keyCode] = false;
        this.connect.sendKeyboard(this);
      }   
      console.log('released', keyCode); 
    });
  }

  tick(){
    this.update.entities();
    this.update.serverEntities();
    this.navigator.targetLockUpdate();
    Keyboard.update();
  }

  entityUpdateZoom() {
    console.log('ZOOM UPDATE', this.viewport.scale)

    // this.background.width = this.viewport.scale * 1000;
    // this.background.height = this.viewport.scale * 1000;

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
