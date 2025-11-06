/*
User Stories:

You should have a destroyer function that accepts an array and one or more additional arguments.
The destroyer function should return a new array excluding all elements from the first argument that match any of the subsequent arguments.
The function must accept an indeterminate number of arguments.

ex: destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]

*/
function destroyer(arr, ...ele) {
  let otherEle = ele;
  let uniqArr = arr.filter((item) => !otherEle.includes(item));
  return uniqArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
