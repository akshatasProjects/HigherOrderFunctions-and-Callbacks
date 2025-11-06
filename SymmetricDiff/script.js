/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Example:
Array A: ["diamond", "stick", "apple"]
Array B: ["stick", "emerald", "bread"]
Result: ["diamond", "apple", "emerald", "bread"]

STEPS:
.filter() → creates a new array with elements that pass a test.
!arr2.includes(item) → keeps only elements not present in the other array.
The spread operator ... merges both filtered arrays into a single one.

*/

function diffArray(arr1, arr2) {
  const uniqArr1 = arr1.filter((ele) => !arr2.includes(ele));
  const uniqArr2 = arr2.filter((ele) => !arr1.includes(ele));

  return [...uniqArr1, ...uniqArr2];
}

console.log(
  diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"])
);
