import { Sprite, Texture, Graphics } from 'pixi.js';
import Brain from '../base/Brain'

export default class SurfaceEntity extends Sprite {
    constructor(entityData) {
        super();

        this.data = entityData;

        




        this.addChild(graphics);

        //Settings
        this.interactive = true;
        this.click = function(ev) { 
            //console.log(this.data.name); 
            Brain.navigator.navFollow(this);
        }
        this.mouseover = function(ev) { 
            console.log("over"); 
        }

        //Find the parent with the UUID and then add this to child of that display object
        Brain.entities.addChild(this);
    }
}