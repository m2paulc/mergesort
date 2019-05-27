function merge(arr1, arr2) {
  let sortedArray = [];
  let arr1Index = 0;
  let arr2Index = 0;
  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr2[arr2Index] > arr1[arr1Index]) {
      sortedArray.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      sortedArray.push(arr2[arr2Index]);
      arr2Index++;
    }
  }
  while (arr1Index < arr1.length) {
    sortedArray.push(arr1[arr1Index]);
    arr1Index++;
  }
  while (arr2Index < arr2.length) {
    sortedArray.push(arr2[arr2Index]);
    arr2Index++;
  }
  console.log(sortedArray);
  return sortedArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  console.log(left, right);
  return merge(left, right);
}

mergeSort([5, 2, 3, 1, 4]);
