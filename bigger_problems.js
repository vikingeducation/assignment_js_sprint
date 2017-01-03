var bubbleSort = function(array) {
  console.log(`Ran bubble sort on [${array}]. Got: `)
  unsortedLength = array.length
    while (unsortedLength > 1) {
      for (var i = 0; i < unsortedLength - 1; i++) {
        if (array[i] > array[i + 1]) {
          lower = array[i + 1]
          higher = array[i]
          array[i] = lower
          array[i + 1] = higher
        }
      }
      unsortedLength -= 1
    }
  console.log(array)
}

bubbleSort([5,2,7,9,4,0,-7])

var mergeSort = function(start_array) {
  split_arr(start_array)
};

var combine = function(array1, array2) {
  var combinedArray = [];

  while (array1[0] && array2[0]) {
    if (array1[0] <= array2[0]) {
      combinedArray.push(array1.shift())
    } else {
      combinedArray.push(array2.shift())
    }
  }
  array1.forEach(function(num) {
    combinedArray.push(num)
  })
  array2.forEach(function(num) {
    combinedArray.push(num)
  })
  return combinedArray
};

var split_arr = function(array) {
  if (array.length <= 1) {
    return array
  } else {
    var array1 = array.splice(0, Math.floor(array.length / 2))
    var array2 = array
    var result = combine(split_arr(array1), split_arr(array2))
    return result
  }
};

var quickSort = function(arr) {
  var left = []
  var right = []
  var pivot = arr[0]
  if (arr.length <= 1) {
    return arr;
  }
  for (i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    };
  };
  return quickSort(left).concat(pivot, quickSort(right))
};
