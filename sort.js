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
  var newArray = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] <= rightArray[0]) {
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
  
  var midPoint = Math.floor(array.length / 2);
  var leftArray = array.slice(0, midPoint);
  var rightArray = array.slice(midPoint, (array.length));
  
  return merge( mergeSort(leftArray), mergeSort(rightArray));
};

var quickSort = function(arr) {
  var pivot = arr[arr.length - 1];
  
  var sorted = [];
  var unsorted = arr;
  
  for (var i = 0; i < unsorted.length - 1; i++) {
    if (unsorted[i] < pivot) {
      //switching first element with element with value < pivot 
      var temp = unsorted[0];
      unsorted[0] = unsorted[i];
      unsorted[i] = temp;
      
      sorted.push(unsorted.shift());
    }
  }
  
  console.log(sorted);
  console.log(unsorted);
  
}

var arr1 = [6,5,1,3,8,4,7,9,2];
quickSort(arr1)