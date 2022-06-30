export function getDistance(a, b) { 
	var xDiff = a.x - b.x; 
	var yDiff = a.y - b.y;
	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    //Returns the distance between object a and b
}