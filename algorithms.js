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
  } while (swapped == true);
  return arr;
};


// Tests

var testBubbleSort = function() {
  testArray1 = [6,3,8,3,1,4,12,3];
  expectedResult1 = [1,3,3,3,4,6,8,12];
  return compareArrays(bubbleSort(testArray1), expectedResult1);
};

var mergeSort = function(arr) {
  if (arr.length == 1) { return arr; }
  var midpoint = Math.floor(arr.length / 2);
  if (midpoint == 0) { return arr; }
  var arr1 = arr.slice(0,midpoint);
  var arr2 = arr.slice(midpoint);

  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);

  return merge(arr1, arr2);
};

var merge = function(oldArr1, oldArr2) {
  var newArr = [];
  arr1 = oldArr1.slice();
  arr2 = oldArr2.slice();

  while (arr1.length != 0 && arr2.length != 0) {
    newArr.push( arr1[0] < arr2[0] ? arr1.shift() : arr2.shift() );
  }

  newArr = newArr.concat(arr1);
  newArr = newArr.concat(arr2);

  return newArr;
};

var quickSort = function(arr) {
  if (arr.length === 0) { return arr; }
  var left = [];
  var right = [];
  var pivot = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};
