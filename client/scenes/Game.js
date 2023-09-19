import Phaser from 'phaser'
import * as dat from 'dat.gui'
import Planet from '../entities/Planet'

class Game extends Phaser.Scene {
  preload () {
    this.load.image('base', './assets/sprites/base.png')
    this.objects = [
      {
        name: 'sun',
        parent: null,
        radius: 200,
        zoom: { size: 0.1, speed: 100 },
        features: {
          color: 0xffff66
        },
        orbit: {
          angle: 0,
          period: 4,
          distance: 2000
        }
      },
      {
        name: 'planet',
        parent: 'sun',
        type: 'planet',
        radius: 10,
        zoom: { size: 100, speed: 1000 },
        features: {
          color: 0x564000,
          atmosphere: {
            size: 100,
            color: 0x7777ff
          }
        },
        orbit: {
          angle: 0,
          period: 9,
          distance: 2000
        }
      },
      {
        name: 'moon',
        radius: 50,
        parent: 'planet',
        type: 'planet',
        zoom: { size: 4, speed: 1000 },
        features: { color: 0x666666 },
        orbit: {
          angle: 0,
          period: 3,
          distance: 400
        }
      },
      {
        name: 'planet2',
        parent: 'sun',
        type: 'planet',
        radius: 100,
        zoom: { size: 2, speed: 1000 },
        features: { color: 0xee96ff },
        orbit: {
          angle: 98,
          period: 12,
          distance: 1400
        }
      },
      {
        name: 'building',
        parent: 'planet2',
        type: 'planet',
        radius: 6,
        zoom: { size: 20, speed: 2000 },
        features: { color: 0xff3333 },
        orbit: {
          angle: 98,
          period: 12,
          distance: 150
        }
      },
      {
        name: 'moon2',
        radius: 50,
        parent: 'planet2',
        type: 'planet',
        zoom: { size: 4, speed: 1000 },
        features: { color: 0x666666 },
        orbit: {
          angle: 45,
          period: 3,
          distance: 200
        }
      },
      {
        name: 'planet3',
        parent: 'sun',
        type: 'planet',
        radius: 100,
        zoom: { size: 2, speed: 1000 },
        features: { color: 0xeeff44 },
        orbit: {
          angle: 145,
          period: 15,
          distance: 800
        }
      },
      {
        name: 'moon3',
        radius: 50,
        parent: 'planet3',
        type: 'planet',
        zoom: { size: 4, speed: 1000 },
        features: { color: 0x666666 },
        orbit: {
          angle: 55,
          period: 2,
          distance: 200
        }
      },
      {
        name: 'meteor',
        parent: 'sun',
        type: 'planet',
        radius: 50,
        zoom: { size: 2, speed: 1000 },
        features: { color: 0x666666 },
        orbit: {
          angle: 220,
          period: 40,
          distance: 3000
        }
      },
      {
        name: 'meteor2',
        parent: 'sun',
        type: 'planet',
        radius: 50,
        zoom: { size: 2, speed: 1000 },
        features: { color: 0x666666 },
        orbit: {
          angle: 40,
          period: 40,
          distance: 3000
        }
      },
      {
        name: 'meteor3',
        parent: 'sun',
        type: 'planet',
        radius: 50,
        zoom: { size: 2, speed: 1000 },
        features: { color: 0x666666 },
        orbit: {
          angle: 120,
          period: 40,
          distance: 3000
        }
      },
      {
        name: 'meteor4',
        parent: 'sun',
        type: 'planet',
        radius: 50,
        zoom: { size: 2, speed: 1000 },
        features: { color: 0x666666 },
        orbit: {
          angle: 160,
          period: 40,
          distance: 3000
        }
      }
    ]

    this.surfaceObjects = [
      {
        name: 'base',
        parent: 'planet',
        type: 'planet',
        radius: 20,
        zoom: { size: 1, speed: 100 },
        features: { color: 0x33ffee },
        location: {
          x: 0,
          a: 0
        }
      }
    ]
  }

  create () {
    const d = new Date()
    const time = d.getTime()
    console.log('BUILDING SOLAR SYSTEM - STARDATE: ' + time)

    const cam = this.cameras.main
    const wx = window.innerWidth / 2
    const wy = window.innerHeight / 2
    console.log('WINDOW DIMENSIONS ', wx + ' : ' + wy)
    const boundSize = 10000
    cam.setBounds(-boundSize, -boundSize, boundSize * 2, boundSize * 2)
    cam.setScroll(-wx, -wy)
    cam.setOrigin(0.5, 0.5) // The values are given in the range 0 to 1 and are only used when calculating Camera rotation.
    cam.setZoom(1)

    // this.backgroundSky = this.add.image(0, 0, "sky");
    // this.backgroundSky.setScale(0.5);

    // = new Planet(
    //   {
    //     scene: this,
    //     x:0, y:0,
    //     radius: this.objects[index].radius,
    //     color: this.objects[index].features.color
    //   }
    // );

    for (let index = 0; index < this.objects.length; index++) {
      // this[this.objects[index].name + 'Object'] = this.add.circle(0, 0, this.objects[index].radius, this.objects[index].features.color);
      this[this.objects[index].name + 'Object'] = new Planet({ scene: this, object: this.objects[index] })
      this[this.objects[index].name + 'Object'].setSize(this.objects[index].radius * 2, this.objects[index].radius * 2)
      this[this.objects[index].name + 'Object'].setInteractive()
      this[this.objects[index].name + 'Object'].name = this.objects[index].name
      this[this.objects[index].name + 'Object'].data = this.objects[index]
      this[this.objects[index].name + 'Object'].on('pointerdown', function (pointer) {
        console.log(this)
        cam.zoomTo(this.data.zoom.size, this.data.zoom.speed, 'Sine.easeInOut', true)
        this.scene.selected = { obj: this, id: this.data }
      })
    }
    this.selected = { obj: this['sun' + 'Object'], id: this['sun' + 'Object'].data }

    // let myPlanet = new Planet({scene: this, x:0, y:0, radius: 10, color: '#ffffff'});

    // // BELOW IS CLICK ITERATION CODE TO SCAN THROUGH ALL THE PLANETS JUST FOR TESTING
    // // MAY BE USEFULL LATER SO JUST LEAVING
    // let pos = 0;
    // this.input.on('pointerdown', function () {
    //   console.log('CLICK', pos)

    //   const cam = this.cameras.main;
    //   var obj = this.planetObject;
    //   var id = this.planet

    //   for (let index = 0; index < this.objects.length; index++) {

    //     if (pos == this.objects.length){
    //       obj = this[this.objects[index].name + 'Object']
    //       id = this.objects[index]
    //       pos = 0;
    //       break;
    //     }

    //     if (pos == index){
    //       obj = this[this.objects[index].name + 'Object']
    //       id = this.objects[index]
    //       pos++;
    //       break;
    //     }

    //   }
    //   this.selected = {obj: obj, id: id};
    //   console.log('SELECTED: ', this.selected)
    //   //  cam.pan(obj.x, obj.y, 1000, 'Sine.easeInOut',true,function(camera){camera.pan(obj.x, obj.y, 1000, 'Sine.easeInOut')});
    //   cam.zoomTo(this.selected.id.zoom.size, this.selected.id.zoom.speed, "Sine.easeInOut",true)
    //   //cam.startFollow(obj,true,1,1)

    // }, this);

    // DAT GUI DEBUG GUI
    const cursors = this.input.keyboard.createCursorKeys()
    const controlConfig = {
      camera: this.cameras.main,
      left: cursors.left,
      right: cursors.right,
      up: cursors.up,
      down: cursors.down,
      zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
      zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
      acceleration: 0.6,
      drag: 0.0005,
      maxSpeed: 1.0
    }

    this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig)

    const gui = new dat.GUI()

    const help = {
      line1: 'Cursors to move',
      line2: 'Q & E to zoom'
    }

    const f1 = gui.addFolder('Camera')
    f1.add(cam, 'x').listen()
    f1.add(cam, 'y').listen()
    f1.add(cam, 'scrollX').listen()
    f1.add(cam, 'scrollY').listen()
    f1.add(cam, 'rotation').min(0).step(0.01).listen()
    f1.add(cam, 'zoom', 0.1, 2).step(0.1).listen()
    f1.add(help, 'line1')
    f1.add(help, 'line2')
    f1.open()
  }

  update (time, delta) {
    const cam = this.cameras.main
    const wx = window.innerWidth / 2
    const wy = window.innerHeight / 2
    const speed = 10 // smaller is faster

    cam.scrollX -= ((cam.scrollX + wx) - (this.selected.obj.x))
    cam.scrollY -= ((cam.scrollY + wy) - (this.selected.obj.y))

    this.controls.update(delta)

    // RIP THIS OUT TO THE BACKEND
    for (let index = 0; index < this.objects.length; index++) {
      const type = this.objects[index].type
      if (type != null) {
        if (type === 'planet') {
          var newPos = rotate_point(
            this[this.objects[index].parent + 'Object'],
            this.objects[index]
          )
          this[this.objects[index].name + 'Object'].x = newPos.x
          this[this.objects[index].name + 'Object'].y = newPos.y
        } else if (type === 'surface') {
          var newPos = surfaceStick(
            this[this.objects[index].parent + 'Object'],
            this[this.objects[index].name + 'Object'],
            this.objects[index]
          )
          this[this.objects[index].name + 'Object'].x = newPos.x
          this[this.objects[index].name + 'Object'].y = newPos.y
          this[this.objects[index].name + 'Object'].angle = newPos.angle
        }
      }
    }

    function surfaceStick (origin, child, objectData) {
      function getAngle (cx, cy, ex, ey) {
        const dy = ey - cy
        const dx = ex - cx
        let theta = Math.atan2(dy, dx) // range (-PI, PI]
        theta *= 180 / Math.PI // rads to degs, range (-180, 180]
        if (theta < 0) theta = 360 + theta // range [0, 360)
        return theta + 90
      }

      console.log('SURFACE', origin.x, origin.y, child.x, child.y)
      objectData.orbit.angle += (1.0 / objectData.orbit.period)
      const ang = objectData.orbit.angle * 2.0 * Math.PI / 180.0
      const r = origin.radius // also know as speed
      return {
        x: Math.cos(ang) * r - Math.sin(ang) * r + origin.x,
        y: Math.sin(ang) * r + Math.cos(ang) * r + origin.y,
        angle: getAngle(origin.x, origin.y, child.x, child.y)
      }
    } // rotate_point ref switched to distance ref
    // generic rendering of a unit orbital progression of a planet

    function rotate_point (origin, objectData) {
      objectData.orbit.angle += (1.0 / objectData.orbit.period)
      const ang = objectData.orbit.angle * 2.0 * Math.PI / 180.0
      const r = objectData.orbit.distance // also know as speed
      return {
        x: Math.cos(ang) * r - Math.sin(ang) * r + origin.x,
        y: Math.sin(ang) * r + Math.cos(ang) * r + origin.y
      }
    } // rotate_point ref switched to distance ref
    // generic rendering of a unit orbital progression of a planet
  }

  keyReleased () {
    console.log('Key released')
  }
}

export default Game
