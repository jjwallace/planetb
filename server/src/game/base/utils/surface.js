export function surface(entities, entity) {
	//if(entity.type == 'unit'){
		try {
			var parentEntity = entities.find(e => e.uuid === entity.parent);
            entity.location.x = parentEntity.features.size * Math.sin(entity.location.s); // X Component of Force
            entity.location.y = parentEntity.features.size * Math.cos(entity.location.s); // Y Component of Force

		}catch (error){
			console.warn('Entity does not of acc or location', error)
		}
	
	//}

	return {
		entity
	};
} 