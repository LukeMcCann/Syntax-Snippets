let recursiveFunction = function (arr, x, start, end) {
       
    // Base Condition
    if (start > end) return false;
   
    // Find the middle index
    let mid=Math.floor((start + end)/2);
   
    // Compare mid with given key x
    if (arr[mid]===x) return true;
          
    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x) 
        return recursiveFunction(arr, x, start, mid-1);
    else
  
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid+1, end);
}
   
// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;
   
if (recursiveFunction(arr, x, 0, arr.length-1))
    document.write("Element found!<br>");
else document.write("Element not found!<br>");
   
x = 6;
   
if (recursiveFunction(arr, x, 0, arr.length-1))
    document.write("Element found!<br>");
else document.write("Element not found!<br>");
</script>                                      
Output:

Element found!
Element not found!
Time Complexity: O(logN).

Iterative Approach : In this iterative approach instead of recursion, we will use a while loop and the loop will run until it hits the base condition i.e start becomes greater than end.

Below is the implementation of Binary Search(Iterative Approach) in JavaScript:


<script>
// Iterative function to implement Binary Search
let iterativeFunction = function (arr, x) {
   
    let start=0, end=arr.length-1;
          
    // Iterate while start not meets end
    while (start<=end){
  
        // Find the mid index
        let mid=Math.floor((start + end)/2);
   
        // If element is present at mid, return True
        if (arr[mid]===x) return true;
  
        // Else look in left or right half accordingly
        else if (arr[mid] < x) 
             start = mid + 1;
        else
             end = mid - 1;
    }
   
    return false;
}
   
// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;
   
if (iterativeFunction(arr, x, 0, arr.length-1))
    document.write("Element found!<br>");
else document.write("Element not found!<br>");
   
x = 6;
   
if (iterativeFunction(arr, x, 0, arr.length-1))
    document.write("Element found!<br>");
else document.write("Element not found!<br>");
