import { Sprite, Texture, Graphics } from 'pixi.js';
import Brain from '../base/Brain';
import Star from './Star';

export default class StarField extends Sprite {
    constructor(location) {
        super();

        this.x = location.x
        this.y = location.y

        

        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
          
          

        for (let index = 0; index < 10000; index++) {

            let rndIntx = randomIntFromInterval(-9000, 9000)
            let rndInty = randomIntFromInterval(-9000, 9000)

            let entity = new Star({x: rndIntx, y: rndInty});
            
    
        }

        console.log('Created Starfield')
        Brain.viewport.addChild(this);
    }
}
