// BUBBLE SORT
var bubbleSort = function(arr){
  for (var i = 0; i < arr.length; i++){
    for (var k = i + 1; k < arr.length; k++ ){
      if ( arr[k] < arr[i]){
      var tmp = arr[k];
      arr[k] = arr[i];
      arr[i] = tmp;
    }
    }
  }
  return arr;
}

// MERGE SORT
var merge = function(left, right){
    var newArr = [];
    for (var i = 0; i < left.length; i++){
     left[i] < right[i] ? newArr.push(left[i], right[i]) : newArr.push(right[i], left[i]);
    }
    left.length < right.length ? newArr.push(right[right.length-1]) : '';

    return newArr;
  }

var mergeSort = function(arr){
  // if 1 element only, return it. no merge-sort necessary
  if (arr.length === 1){
    return arr;
  }
  // there is more than 1 element. we should split then merge them
  var n = parseInt(arr.length/2);
  var left = arr.slice(0, n);
  var right = arr.slice(n, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

// QUICK SORT
var partition = function(arr, low, high){
  pivot = arr[high];
  for (j = low; j < high; j++){
    if (arr[j] < pivot){
      swap(arr, j, low);
      low++;
    }
  }
  swap(arr, low, high);
  return low;
}
var swap = function(arr, a, b){
  var tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
var quickSort = function(arr, low, high){
  if (low < high){
    var i = partition(arr, low, high);
    quickSort(arr, low, i - 1);
    quickSort(arr, i + 1, high);
  }
  return arr;
}