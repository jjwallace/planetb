import Phaser from 'phaser'
import * as dat from 'dat.gui';

class Planet extends Phaser.GameObjects.Sprite {
	constructor(config) {
		super(config.scene, 0, 0);
		

		console.log("PLANET CREATED", config.radius, config.color)
    var planetBody = new Phaser.GameObjects.Arc(this.scene, 0, 0, config.radius, config.color);
		var base = new Phaser.GameObjects.Sprite(this.scene, 0, 0, "base");

		base.setScale(1);

		config.scene.add.existing(this);
	}

	// preUpdate(time, delta) {
    //     super.preUpdate(time, delta);
    // }
}

export default Planet;