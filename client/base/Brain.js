// Libraries
import * as PixiPlugin from 'gsap/PixiPlugin'
import * as Keyboard from 'pixi.js-keyboard'

// Components
import Connect from './Connect'
import Spawner from './Spawner'
import Update from './Update'
import Navigator from './Navigator'
// import Renderer from './Renderer'; //Need to build out to handle window resize

class Brain {
  //* *** WARNING: APPLICATION GOD CLASS *****   Static Instance / Singleton

  constructor () {
    if (!instance) {
      var instance = this
    }
    this.time = new Date()

    this.app = null
    this.socket = null
    this.viewport = null
    this.entities = []
    this.gameData = null

    this.spawner = new Spawner()
    this.update = new Update()
    this.connect = new Connect(this)
    this.navigator = new Navigator(this)
    this.background = null

    this.selected = null
    this.keyboard = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false
    }

    Keyboard.events.on('pressed', null, (keyCode, event) => {
      if (keyCode.includes('Arrow')) {
        this.keyboard[keyCode] = true
        this.connect.sendKeyboard(this)
      }
      console.log('pressed', keyCode)
    })
    Keyboard.events.on('released', null, (keyCode, event) => {
      if (keyCode.includes('Arrow')) {
        this.keyboard[keyCode] = false
        this.connect.sendKeyboard(this)
      }
      console.log('released', keyCode)
    })
  }

  tick () {
    this.update.UpdateUtils()
    this.update.updateEntitiesRender()
    this.navigator.targetLockUpdate()
    Keyboard.update()
  }

  entityUpdateZoom () {
    console.log('ZOOM UPDATE', this.viewport.scale)
  }
}

export default new Brain()
