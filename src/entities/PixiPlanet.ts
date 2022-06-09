import { createDecipheriv } from 'crypto';
import { Sprite, Texture, Graphics } from 'pixi.js';

export default class PixiPlanet extends Sprite {
    constructor(entityData) {
        super();

        //console.log('CREATED: ' + entity.name, entity)

        // Create a master graphics object
        let graphics = new Graphics();
        // Add a circle
        //graphics.drawCircle(300, 300, 50);

        // Circle
        graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
        graphics.beginFill(0xDE3249, 1);
        graphics.drawCircle(0, 0, 50);
        graphics.endFill();

        // Circle + line style 1
        graphics.lineStyle(2, 0xFEEB77, 1);
        graphics.drawCircle(0, 0, 200);
        graphics.endFill();

        this.addChild(graphics);
    }
}
