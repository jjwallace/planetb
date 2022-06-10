export function orbit(originObject, orbitObject) {
      
    orbitObject.orbit.angle +=  (1.0 / orbitObject.orbit.period);
    var ang = orbitObject.orbit.angle * 2.0 * Math.PI / 180.0;
    var r = orbitObject.orbit.distance; // also know as speed
    
    return {
      x: Math.cos(ang) * r - Math.sin(ang) * r + originObject.x,
      y: Math.sin(ang) * r + Math.cos(ang) * r + originObject.y
    };
  } 
  
  // rotate_point ref switched to distance ref
  // generic rendering of a unit orbital progression of a planet