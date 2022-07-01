export function gravity(entities, entity) {

  let velocityForce = {x: entity.velocity.x, y: entity.velocity.y, r: entity.velocity.r}
  var gravitationalConstant = 10; //0.0000000000667;

  if(entity.mass > 0) {
    entities.forEach(e => {
      if( 'mass' in e ) {
        // Calculate gravity power with Newton's formula:
        // F = G * m1 * m2 / r^2 

        var distance = Math.sqrt(
          Math.pow((entity.location.x - e.location.x), 2) 
          + Math.pow((entity.location.y - e.location.y), 2)
        )

        //Law of universal gravitation
        if(distance != 0){
          let xd = e.location.x - entity.location.x;  // X Component of distance
          let yd = e.location.y - entity.location.y;  // Y Component of distance
          let r2 = xd * xd + yd * yd;                 // Distance squared between stars
          let force  = gravitationalConstant / r2;    // Force due to gravity
          let theta = Math.atan2(xd, yd);             // Direction
          let fx = force * Math.sin(theta);           // X Component of Force
          let fy = force * Math.cos(theta);           // Y Component of Force
          if (e.x < entity.x) {fx = fx*-1}            // Recorrect direction
          if (e.y < entity.y) {fy = fy*-1}

          velocityForce.x += (fx * (e.mass + entity.mass))
          velocityForce.y += (fy * (e.mass + entity.mass))
          //return createVector(fx,fy);
        }
      }
    })
  }

  return {x: velocityForce.x, y: velocityForce.y, r: entity.velocity.r};
} 