// SORT FUNCTIONS BELOW

var arr1 = [4, 7, 6, 9, 1, 3 ,5, 8]

var sortFunctions = {
  bubbleSort: function(arr) {
    // while not sorted
    var sorting = true;
    while (sorting) {
      sorting = false;
      for (var i = 0; i < arr.length - 1; i++) {
        var temp = arr[i];
        if (arr[i] > arr[i+1]) {
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          sorting = true;
        } 
      }      
    }
    return arr
  }, 
}


var merge = function(leftArray, rightArray) {
  newArray = []
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] <= rightArray[0]) {
      console.log(leftArray)
      newArray.push(leftArray.shift());
    } else {
      newArray.push(rightArray.shift());
    }
  };
  while (leftArray.length > 0) {
    newArray.push(leftArray.shift());
  };
  while (rightArray.length > 0) {
    newArray.push(rightArray.shift());
  };
  return newArray;
};

var mergeSort = function(array) {
  if (array.length <= 1) {
    return array
  }
  
  midPoint = Math.floor(array.length / 2);
  leftArray = array.slice(0, midPoint);
  rightArray = array.slice(midPoint, (array.length));

  console.log("Left array is " + leftArray);
  console.log("Right array is " + rightArray);
  
  leftArray = mergeSort(leftArray);
  rightArray = mergeSort(rightArray);
  console.log(merge(leftArray, rightArray));
  
};

var arr1 = [4, 7, 6, 9, 1, 3 ,5, 8]
console.log(mergeSort(arr1))