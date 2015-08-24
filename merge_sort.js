var mergeSort = function(arr) {
  if(arr.length === 1) {
    return arr;
  } else {
    var arr_left = arr.slice(0, arr.length/2);
    var arr_right = arr.slice((arr.length/2), arr.length);
    arr_left = mergeSort(arr_left);
    arr_right = mergeSort(arr_right);
    return merge(arr_left, arr_right);
  };
};

var merge = function(left, right) {
  result = [];
  while (left.length > 0 || right.length > 0) {
    if (left[0] > right[0]) {
      result.push(right.shift);
    } else {
      result.push(left.shift);
    };
  };
  return result.concat(arr1).concat(arr2);
};

console.log(mergeSort([5,4,3,2,1]));