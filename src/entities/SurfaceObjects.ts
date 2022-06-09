import { Sprite, Texture, Graphics } from 'pixi.js';

export default class PixiPlanet extends Sprite {
    constructor() {
        super();

        this.interactive = true;
        this.texture = Texture.from('./assets/sprites/base.png');

        this.anchor.set(0.5,1);

        //this.addChild(graphics);
    }
}
