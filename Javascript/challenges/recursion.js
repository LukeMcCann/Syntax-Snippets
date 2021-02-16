function sum(arr, n) {
  if (n <= 0) {
    return 0;
  }
  return sum(arr, n - 1) + arr[n - 1]
}

const arr = [1, 2, 5];

console.log(sum(arr, 2));