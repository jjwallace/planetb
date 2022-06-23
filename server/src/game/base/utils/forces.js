export function forces(entity) {
	if(entity.type == 'unit'){
		try {
			if ('location' in entity && 'acc' in entity){
				entity.location.x += entity.acc.x;
				entity.location.y += entity.acc.y;
				entity.location.r += entity.acc.r;
		}
		}catch (error){
			console.warn('Entity does not of acc or location', error)
		}
	
		
	}

	return {
		entity
	};
} 