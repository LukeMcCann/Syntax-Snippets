// create a function multiplyAll() so that it returns the product 
// of all numbers in the sub-arrays of array.

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  arr.forEach((item) => {
    item.forEach((subItem) => {
      product = subItem * product;
    });
  });
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]); // should return 54
multiplyAll([[1,2],[3,4],[5,6,7]]); // should return 5040
multiplyAll([[1],[2],[3]]); // should return 6