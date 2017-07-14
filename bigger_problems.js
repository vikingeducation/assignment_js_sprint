var bubbleSort = function(arr) {
  // iterate through the unsorted array, comparing each element with the
  // following element
  var swapped = false;
  for (var i = 0; i < arr.length; i++) {
    var j = i + 1;
    if (j < arr.length) {
      var left = arr[i];
      var right = arr[j];
      // if the current element is greater than the next, swap their positions
      if (left > right) {
        swapped = true;
        arr[i] = right;
        arr[j] = left;
      }
    }
  }
  // start from the beginning of the array and continue this process
  // until the array is finally sorted (ie. no swaps are made in a
  // single trip through)
  if (swapped)
    return bubbleSort(arr);
  else
    return arr;
};

var merge = function(left, right, acc) {
  if ((left.length === 0) && (right.length === 0))
    return acc;
  if (right.length === 0)
    return merge(left.slice(1, left.length),
                 right,
                 acc.concat(left[0]));
  if (left.length === 0)
    return merge(left,
                 right.slice(1, right.length),
                 acc.concat(right[0]));
  var l = left[0];
  var r = right[0];
  if (l < r)
    return merge(left.slice(1, left.length), right, acc.concat(l));
  else
    return merge(left, right.slice(1, right.length), acc.concat(r));
}

var mergeSort = function(arr) {
  if (arr.length === 0) {
    return [];
  } else if (arr.length === 1) {
    return arr;
  } else {
    var middle = arr.length / 2;
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right), []);
  }
};

var quicksort = function(arr) {
  if (arr.length <= 1) return arr;
  var left = [], right = [], pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot)
      left.push(arr[i]);
    else
      right.push(arr[i]);
  }
  return quicksort(left).concat(pivot).concat(quicksort(right));
};
