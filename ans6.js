// Function to get the missing number
function getMissingNo(a, n) {
  let total = Math.floor(((n + 1) * (n + 2)) / 2); // sum of all n elements by this Fourmula  n*(n+1)/2

  for (let i = 0; i < n; i++) {
    total -= a[i]; // subtract it from the sum of first n natural numbers, it will be the value of the missing element.
    //console.log(total);
  }
  return total;
}

// Driver Code

let arr = [1, 2, 4, 5, 6];
let n = arr.length;
let miss = getMissingNo(arr, n);
console.log(miss);
