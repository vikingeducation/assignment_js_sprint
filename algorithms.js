// ALGORITHMS

// Helpers

var compareArrays = function(arr1, arr2){
  if (arr1.length != arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
};

// Algorithms

var bubbleSort = function(arr) {
  do {
    var swapped = false;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        swapped = true;
        arr[i+1] = [arr[i], arr[i] = arr[i+1]][0]; // swap elements
      }
    }
  } while (swapped == true)
  return arr;
};



// Tests

var testBubbleSort = function() {
  testArray1 = [6,3,8,3,1,4,12,3];
  expectedResult1 = [1,3,3,3,4,6,8,12];
  return compareArrays(bubbleSort(testArray1), expectedResult1);
};
