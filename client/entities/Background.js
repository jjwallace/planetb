import { Sprite, Texture, Graphics } from 'pixi.js';
import Brain from '../base/Brain';

export default class Background extends Sprite {
    constructor() {
        super();

        this.x = 0
        this.y = 0

        const background = Sprite.from('./assets/textures/huge-space.jpg');

        this.addChild(background);
    }
}
