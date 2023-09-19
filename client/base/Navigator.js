export default class Navigator {
  constructor (Brain) {
    console.log('Spawner Present')
    this.brain = Brain
    this.lockedEntity = null
    this.targetLock = false
  }

  select (uuid) {
    this.brain.selected = uuid
    console.log('SELECTED', uuid)
    this.brain.connect.sendSelected()
  }

  navFollow (entity) {
    console.log('CLICK: ', entity)

    // Zoom Feature seems to not catch up with Orbit Speed (lets leave this here for now)
    //  this.brain.viewport.snapZoom(
    //     {
    //         center: {x: entity.x, y: entity.y},
    //         time: 100,
    //         interupt: false,
    //         width: 400,
    //         ease: "easeInOutCubic",
    //         removeOnComplete: true,
    //         removeOnInterupt: true
    //     }
    // )

    this.brain.viewport.zoom(entity.data.features.size / 100)

    this.targetLock = true
    this.lockedEntity = entity
  }

  targetLockUpdate () {
    if (this.targetLock === true && this.lockedEntity != null) {
      this.brain.viewport.moveCenter(this.lockedEntity.x, this.lockedEntity.y)
    }
  }
}
