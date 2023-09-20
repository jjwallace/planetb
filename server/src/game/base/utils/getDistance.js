export function getDistance (a, b) {
  const xDiff = a.x - b.x
  const yDiff = a.y - b.y
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff)
  // Returns the distance between object a and b
}
