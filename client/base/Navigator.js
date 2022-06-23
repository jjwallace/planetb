export default class Navigator {
    
    constructor(Brain){
        console.log('Spawner Present')

        this.brain = Brain;
        this.lockedEntity = null;
        this.targetLock = false;

        
    }

    select(uuid){
        this.brain.selected = uuid;
        console.log('SELECTED', uuid)
        this.brain.connect.sendSelected()
    }

    navFollow(entity){
        console.log('CLICK: ', entity); 

        // let accelerationRatio = 10;// * this.brain.viewport.scale;
        // let speedRatio = 1000;// * this.brain.viewport.scale;

        // this.brain.viewport.follow(
        //     entity,
        //     {
        //         speed: speedRatio, 
        //         acceleration: accelerationRatio, 
        //         radius: 0
        //     }
        // )

        //console.log(entity.data.features.size)

        this.brain.viewport.zoom(entity.data.features.size/100)

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

        this.targetLock = true;
        this.lockedEntity = entity;
    }

    targetLockUpdate(){
        //console.log('LOCK UPDATE LOOP')
        if(this.targetLock == true && this.lockedEntity != null){
            this.brain.viewport.moveCenter(this.lockedEntity.x, this.lockedEntity.y)
            
        }
    }

}