// Bring in the phaser library
import Phaser from 'phaser'
import CONFIG from './config.js'

// Bringing in our base example scene
import GameScene from './scenes/Game.js'

const config = {
  // Configure Phaser graphics settings
  type: Phaser.AUTO,
  scale: {
    parent: 'game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    width: "100%",
    height: "100%",
  },

  // width: CONFIG.DEFAULT_WIDTH,
  // height: CONFIG.DEFAULT_HEIGHT,

}

// Initialize the base phaser game object (must always be done once)
const game = new Phaser.Game(config)

// Add and auto-starting ExampleScene
game.scene.add('GameScene', GameScene)
game.scene.start('GameScene')
