export function pointMove(entity) {

  console.log('ANGLE', entity.location)
  let angle = entity.location.r - 90;
  let acceleration = entity.features.acceleration;

  entity.velocity.x += acceleration * Math.cos(angle);
  entity.velocity.y += acceleration * Math.sin(angle);

  return {
    x: entity.velocity.x,
    y: entity.velocity.y,
    r: entity.velocity.r
  }
}