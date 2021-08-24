// Create a square object which holds the methods for calculating the geometry of a square.
// This should include the area and the perimeter of the square respectively.

const square = {
    area: (side) => {
        return Math.pow(side, 2);
    },
    perimeter: (side) => {
        return side * 4;
    }
}
