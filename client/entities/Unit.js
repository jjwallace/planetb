import { Sprite, Texture, AnimatedSprite } from 'pixi.js';
import Brain from '../base/Brain';
import Entity from './Entity';

export default class Unit extends Entity {
    constructor(entity) {
        super();

        this.data = entity

        // Loader.shared.add("./assets/sprites/" + unit.image + ".json").load(setup);
        
        // let sheet = Loader.shared.resources["images/spritesheet.json"].spritesheet;

        // this.interactive = true;
        // this.texture = Texture.from('./assets/sprites/' + unit.image + '.png');

        // let unitSprite = new AnimatedSprite(sheet.animations["anim_name"]);
        console.log(this.data.features)
        const unitSprite = Sprite.from('./assets/sprites/' + entity.features.image + '.png');
        unitSprite.scale.set(this.data.features.size/10)
        unitSprite.anchor.set(0.5, 0.5);

        this.addChild(unitSprite);
        Brain.viewport.addChild(this);

        

        //Settings
        this.interactive = true;
        this.click = function(ev) { 
            //console.log(this.data.name); 
            Brain.navigator.navFollow(this);
            Brain.navigator.select(this.data.uuid);
            
        }
        this.mouseover = function(ev) { 
            console.log("over"); 
        }

        //this.addChild(graphics);
    }
}
