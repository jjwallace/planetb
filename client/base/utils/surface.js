export function surface(entities, entity) {
	//if(entity.type == 'unit'){
		try {
            entity.location.s += 0.01;
			let surfaceLocation = entity.location.s;

            var parentEntity = entities.find(e => e.uuid === entity.parent);

            entity.rotation = surfaceLocation;
            entity.x =  300;//parentEntity.features.size * Math.sin(surfaceLocation) * 100; // X Component of Force
            entity.y =  300;//parentEntity.features.size * Math.cos(surfaceLocation) * 100; // Y Component of Force
		}catch (error){
			console.warn('Entity does not of acc or location', error)
		}
	
	//}

	return {
		entity
	};
} 