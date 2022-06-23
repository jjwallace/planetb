
export function pointMove(entity) {

    console.log('ANGLE', entity.location)
    let angle = entity.location.r - 90;
    let velocity = 0.2;


    entity.acc.x += velocity * Math.cos(angle);
    entity.acc.y += velocity * Math.sin(angle);

    return {x: entity.acc.x, y: entity.acc.y , r: entity.acc.r}
}