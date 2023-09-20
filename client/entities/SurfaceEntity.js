import {
  Sprite,
  Texture,
  Graphics
} from 'pixi.js'
import Brain from '../base/Brain'

export default class SurfaceEntity extends Sprite {
  constructor (entityData) {
    super()

    this.data = entityData

    // FIND PARENT
    const parentEntity = Brain.gameData.entities.find(e => e.uuid === this.data.parent)
    // this.x = 30;//parentEntity.features.size * Math.sin(surfaceLocation) * 100; // X Component of Force
    // this.y = 30;// parentEntity.features.size * Math.cos(surfaceLocation) * 100; // Y Component of Force

    this.texture = Texture.from('./assets/sprites/' + this.data.features.image + '.png')
    this.anchor.set(0.5, 0.94)
    this.scale.set(this.data.features.size / 100)
    this.angle = this.data.location.r - 90

    const parentObject = Brain.entities.find(e => e.data.uuid === this.data.parent)
    console.log('parent parentObject', parentObject)
    parentObject.addChild(this)

    // Settings
    // this.interactive = true;
    // this.click = function(ev) {
    //   console.log('Surface Item', this.data.name);
    //   Brain.navigator.navFollow(this);
    // }
    this.mouseover = function (ev) {
      console.log('over')
    }
  }
}
