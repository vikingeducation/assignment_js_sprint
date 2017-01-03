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
      console.log(`combined array ${combinedArray}`)
      combinedArray.push(array1.shift())
    } else {
      console.log(`combined array ${combinedArray}`)

      combinedArray.push(array2.shift())
    }
  }
  array1.forEach(function(num) {
    combinedArray.push(num)
  })
  array2.forEach(function(num) {
    combinedArray.push(num)
  })
  console.log(`combined array ${combinedArray}`)
  return combinedArray
};

var split_arr = function(array) {
  if (array.length <= 1) {
    console.log(array)
    return array
  } else {
    var array1 = array.splice(0, Math.floor(array.length / 2))
    var array2 = array
    console.log(`array1: ${array1}`)
    console.log(`array2: ${array2}`)
    var result = combine(split_arr(array1), split_arr(array2))
    console.log(result);
    return result
  }
};