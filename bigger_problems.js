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

var mergeSort = function(array) {
  var combine = function(array1, array2) {
    var combinedArray = [];
    var index1 = 0;
    var index2 = 0;
    if (array1 && array2) {
      while (index1 < array1.length && index2 < array2.length) {
        if (array1[index1] < array2[index2]) {
          combinedArray.push(array1[index1]);
          index1++;
        } else {
          combinedArray.push(array2[index2]);
          index2++;
        }
      };
      if (index1 < array1.length) {
        for (var i = index1; i < array1.length; i++) {
          combinedArray.push(array1[i]);
        };
      };
      if (index2 < array2.length) {
        for (var i = index2; i < array2.length; i++) {
          combinedArray.push(array2[i]);
        };
      };
    } else if (array1) {
      for (var i = 0; i < array1.length; i++) {
        combinedArray.push(array1[i]);
      }
    } else {
      for (var i = 0; i < array2.length; i++) {
        combinedArray.push(array2[i]);
      };
    }
    console.log(combinedArray);
    return combinedArray
  };

  var split = function(array) {
    if (array.length <= 2) {
      console.log(array)
      return array
    } else {
      array1 = array.splice(0, Math.floor(array.length / 2))
      array2 = array
      console.log(`array1: ${array1}`)
      console.log(`array2: ${array2}`)
      var result = combine(split(array1), split(array2))
    }
    console.log(result);
    return result
  };
  split(array)
};
