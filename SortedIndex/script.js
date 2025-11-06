function getIndexToIns(arr, num) {
  // sort
  arr.sort((a, b) => a - b);

  let index = arr.findIndex((value) => num <= value);

  return index === -1 ? arr.length : index;
}

console.log(getIndexToIns([40, 60], 50)); // 1
