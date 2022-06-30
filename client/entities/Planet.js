import Phaser from 'phaser'
import * as dat from 'dat.gui';

class Planet extends Phaser.GameObjects.Container {
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

		
		var planetOil = config.scene.add.circle(0, 0, object.radius/1.4, '0x434000');
		var planetCore = config.scene.add.circle(0, 0, object.radius/8, '0xff3333');

		var base = new Phaser.GameObjects.Sprite(this.scene, 0, -object.radius, "base");

		base.setOrigin(0.5,0.95) 
		base.setScale(0.02);
		
		config.scene.add.existing(this);
		//config.scene.add.existing(base);
		
		
		this.add(planetBody)
		this.add(planetOil)
		this.add(planetCore)
		this.add(base)

		// //ADD BOARDER LINE
		// let graphics = config.scene.add.graphics();

		// var color = 0xffff00;
		// var thickness = 1;
		// var alpha = 1;

		// graphics.lineStyle(thickness, color, alpha);

		// var a = new Phaser.Geom.Point(0, 0);
		// var radius = object.radius * 3;

		// graphics.strokeCircle(a.x, a.y, radius);

		this.add(graphics)
		
	}

	// preUpdate(time, delta) {
    //     super.preUpdate(time, delta);
    // }
}

export default Planet;