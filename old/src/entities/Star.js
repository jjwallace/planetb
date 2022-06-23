import { Sprite, Texture, Graphics } from 'pixi.js';
import Brain from '../base/Brain';

export default class Star extends Sprite {
    constructor(location) {
        super();

        this.x = location.x
        this.y = location.y
       
        // Create a master graphics object
        let graphics = new Graphics();
        // Add a circle
        //graphics.drawCircle(300, 300, 50);

     

        // Surface
        graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
        graphics.beginFill(0xffffff, 1);
        graphics.drawCircle(0, 0, 20);
        graphics.endFill();

        console.log('Created Star at ', location)

        this.addChild(graphics);

        Brain.viewport.addChild(this);
    }
}
