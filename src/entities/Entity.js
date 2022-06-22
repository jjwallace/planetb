import { Sprite, Texture, AnimatedSprite, Graphics } from 'pixi.js';
import Brain from '../base/Brain';

export default class Entity extends Sprite {
    constructor() {
        super();

        // Create a master graphics object
        let graphics = new Graphics(); // Add a circle
        graphics.lineStyle(2, 0xFEEB77, 1);
        graphics.drawCircle(0, 0, 200  * 5);
        this.addChild(graphics);

        
    }
}
