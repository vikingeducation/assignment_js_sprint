// Bubble Sort

var bubbleSort = function(array){
  var totalSort = false;

  while (totalSort === false){
    totalSort = true;

    for (var i = 0; i < (array.length - 1); i++){
      var currentElement = array[i];

      if (array[i] > array[i + 1]){
        totalSort = false;
        array[i] = array[i + 1];
        array[i + 1] = currentElement;
      }
    }
  }

  return array;
};

var myList = [4, 3, 10, 2, -3, 9, 11, 0, 4];
// console.log(bubbleSort(myList));

var merge = function(leftArray, rightArray){
  var mergedArray = [];

  while(leftArray.length > 0 || rightArray.length > 0) {
    if (leftArray.length === 0) {
      mergedArray = mergedArray.concat(rightArray);
      rightArray = [];
    } else if (rightArray.length === 0) {
      mergedArray = mergedArray.concat(leftArray);
      leftArray = [];
    } else if (leftArray[0] < rightArray[0]){
      mergedArray.push(leftArray.shift());
    } else {
      mergedArray.push(rightArray.shift());
    }
  }

  return mergedArray;
};

// console.log(merge([1,2,5,6], [3,3,4]));

var mergeSort = function(array) {
  if (array.length === 1){
    return array;
  }

  var half = Math.floor(array.length / 2);
  var leftArray = mergeSort(array.slice(0, half));
  var rightArray = mergeSort(array.slice(half));
  return merge(leftArray, rightArray);
};

// console.log(mergeSort(myList));

var quickSort = function(array) {
  if (array.length === 0) {
    return [];
  }

  var pivot = array.shift(),
      leftArray = [],
      rightArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  return quickSort(leftArray).concat(pivot, quickSort(rightArray));
};

console.log(quickSort(myList));
