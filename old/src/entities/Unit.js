import Phaser from 'phaser'
import * as dat from 'dat.gui';

class Unit extends Phaser.GameObjects.Container {
	constructor(config) {
		super(config.scene, 0, 0);
		var object = config.object;
		
		console.log("PLANET CREATED", config)

		var planetBody = config.scene.add.circle(0, 0, object.radius, object.features.color);
		console.log(object.features.atmosphere)
		if(object.features.atmosphere != undefined){
			//if ('key' in myObj)
			var atmosphere = config.scene.add.circle(0, 0, object.radius + object.features.atmosphere.size, object.features.atmosphere.color);
			this.add(atmosphere)
		}


		var base = new Phaser.GameObjects.Sprite(this.scene, 0, -object.radius, "base");

		base.setOrigin(0.5,0.95) 
		base.setScale(0.02);
		
		config.scene.add.existing(this);
		//config.scene.add.existing(base);
		
		
		this.add(planetBody)
		this.add(base)
	}

	// preUpdate(time, delta) {
    //     super.preUpdate(time, delta);
    // }
}

export default Unit;