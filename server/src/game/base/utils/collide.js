export function collide (entities, entity) {
  if (entity.type == unit) {
    entities.forEach(e => {
      const distance = Math.sqrt(
        Math.pow((entity.location.x - e.location.x), 2) +
        Math.pow((entity.location.y - e.location.y), 2)
      )

      if (distance < e.features.size) {
        if (e.uuid != entity.uuid) {
          console.log('COLLIDE!!!!!')
          return true
        }
      }
    })
  }

  return false
}
