import { Sprite, Texture, Graphics } from 'pixi.js';

export default class PixiPlanet extends Sprite {
    constructor(entityData) {
        super();

        this.data = entityData;

        console.log('CREATED: ' + entityData.name, entityData)

        // Create a master graphics object
        let graphics = new Graphics();
        // Add a circle
        //graphics.drawCircle(300, 300, 50);

        if(entityData.features.atmosphere != undefined){
            // Atmosphere
            graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
            graphics.beginFill(entityData.features.atmosphere.color, 1);
            graphics.drawCircle(0, 0, entityData.features.atmosphere.size);
            graphics.endFill();
        }

        let diameter = entityData.features.size;

        // Surface
        graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
        graphics.beginFill(entityData.features.color, 1);
        graphics.drawCircle(0, 0, diameter);
        graphics.endFill();

        // // Sub Surface
        // graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
        // graphics.beginFill(0x676767, 1);
        // graphics.drawCircle(0, 0, diameter - 5);
        // graphics.endFill();

        // Boundry Circle
        graphics.lineStyle(2, 0xFEEB77, 1);
        graphics.drawCircle(0, 0, diameter  * 5);
        graphics.endFill();

        this.addChild(graphics);

        //Settings
        this.interactive = true;
        this.click = function(ev) { 
            console.log(this.data.name); 
        }
        this.mouseover = function(ev) { 
            console.log("over"); 
        }
    }
}
