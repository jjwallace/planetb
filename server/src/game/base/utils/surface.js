export function surface(entities, entity) {

	function CalcAngle(ax, ay){
   		return Math.atan(ax/ay);
	}

	function CalcAngle(cx, cy, ex, ey) {
		var dy = ey - cy;
		var dx = ex - cx;
		var theta = Math.atan2(dy, dx); // range (-PI, PI]
		theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
		//if (theta < 0) theta = 360 + theta; // range [0, 360)
		return theta;
	}

	//if(entity.type == 'unit'){
		try {
			var parentEntity = entities.find(e => e.uuid === entity.parent);
            entity.location.x = parentEntity.features.size * Math.sin(entity.location.s); // X Component of Force
            entity.location.y = parentEntity.features.size * Math.cos(entity.location.s); // Y Component of Force
			entity.location.r = CalcAngle(entity.location.x, entity.location.y, 0, 0);
			console.log(entity.uuid, entity.location.r)
			
		}catch (error){
			console.warn('Entity does not of acc or location', error)
		}
	
	//}

	return {
		entity
	};
} 