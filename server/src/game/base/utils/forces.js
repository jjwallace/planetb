export function forces (entity) {
  // if(entity.type == 'unit'){
  try {
    if ('location' in entity && 'velocity' in entity) {
      entity.location.x += entity.velocity.x
      entity.location.y += entity.velocity.y
      entity.location.r += entity.velocity.r
    }
  } catch (error) {
    console.warn('Entity does not of acc or location', error)
  }

  // }

  return {
    entity
  }
}
