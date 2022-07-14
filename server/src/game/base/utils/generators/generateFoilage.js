export function generateFoilage(planet, profile) {

    //vegetative % 0 baren - 100 lush
    //sparseness % 0 clump - 100 spread (Placed irregularly and distantly; scattered)
    //Minimal distance between display objects
    let profileExampleDefault = {
        vegetative: 75,
        sparseness: 23,
        minimalItemSpacing: 20
    }

    let diameter = planet.features.size;
    let circumferenceOfCircle = Math.PI * diameter;

    // What is the angle from point A to point B along our arch
    let centralSliceAngle = (profileExampleDefault.minimalItemSpacing * 360) / circumferenceOfCircle;

    // How many arch lengths exist on our circle
    let totalArchSlices = 360 / centralSliceAngle;

    function random(min, max){
        return (Math.random() * max) + min;
    }

    let vegetation = [];

    //push a boolean value to each vegetation slot on the entire planetary surface
    for(let i = 0; i < totalArchSlices; i++){
        let randVegGen = random(0, profileExampleDefault.vegetative) / profileExampleDefault.vegetative;
        vegetation.push(randVegGen);
    }

    console.log('Total vegetation locations', vegetation.length)

    for(let i = 0; i < vegetation.length; i++){
        
    }

    return true;
}