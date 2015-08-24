var quickSort = function qSort (arr) {
  var result = []
  var pivot_index = Math.floor((Math.random()*arr.length));
  var pivot_value = arr[pivot_index];
  var left_arr = [];
  var right_arr = [];

  console.log(pivot_value);

  if (arr.length <= 1) {
    return arr;
  };

  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] < pivot_value) {
      left_arr.push(arr[i]);
    } else {
      right_arr.push(arr[i]);
    };
  };

  result = qSort(left_arr).concat(qSort(right_arr));
  return result;
};

// Pick an element, called a pivot, from the array.
// Reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.
// Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.
