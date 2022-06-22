
export function orbit(entity) {

    let angle = entity.r;
    let velocity = 10;

    let xVelocity = velocity * cos(angle);
    let yVelocity = velocity * sin(angle);

    return {acc: {x: xVelocity, y: yVelocity}}
}