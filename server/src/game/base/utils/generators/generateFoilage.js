export function generateFoilage (planet, profile) {
  // vegetative % 0 baren - 100 lush
  // sparseness % 0 clump - 100 spread (Placed irregularly and distantly; scattered)
  // Minimal distance between display objects
  const profileExampleDefault = {
    vegetative: 75,
    sparseness: 23,
    minimalItemSpacing: 20
  }

  const diameter = planet.features.size
  const circumferenceOfCircle = Math.PI * diameter

  // What is the angle from point A to point B along our arch
  const centralSliceAngle = (profileExampleDefault.minimalItemSpacing * 360) / circumferenceOfCircle

  // How many arch lengths exist on our circle
  const totalArchSlices = 360 / centralSliceAngle

  function random (min, max) {
    return (Math.random() * max) + min
  }

  const vegetation = []

  // push a boolean value to each vegetation slot on the entire planetary surface
  for (let i = 0; i < totalArchSlices; i++) {
    const randVegGen = random(0, profileExampleDefault.vegetative) / profileExampleDefault.vegetative
    vegetation.push(randVegGen)
  }

  console.log('Total vegetation locations', vegetation.length)

  for (let i = 0; i < vegetation.length; i++) {

  }

  return true
}
