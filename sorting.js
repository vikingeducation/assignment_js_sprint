// bubble sort

var bubbleSort = function(array) {
  var holder;
  var n = array.length - 1;

  while ( n !== 0 ) {
    n--
    for( var i = 0; i < array.length-1; i++ ) {
      if ( array[i] > array[ i + 1 ] ) {
        holder = array[i];
        array[i] = array[i + 1];
        array[i + 1] = holder;
      }
    }  
  }
  return array;
};


// merge sort

var merge = function(left, right) {
  merged = [];
  while ( left.length > 0 || right.length > 0 ) {
    if ( left.length === 0 ) {
      merged = merged.concat(right);
      right = [];
    } else if ( right.length === 0 ) {
      merged = merged.concat(left);
      left = [];
    } else if ( left[0] <= right[0] ) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return merged;
};

var mergeSort = function(array) {
  var mergedArray = [];

  if (array.length === 1) {
    mergedArray = array;
  } else {
    // split array into 2
    var divisionAt = array.length / 2;
    var left = array.slice(0, divisionAt);
    var right = array.slice(divisionAt);
    // sort split arrays separately
    var mergedLeft = mergeSort(left);
    var mergedRight = mergeSort(right);
    // merge sorted lists
    mergedArray = merge(mergedLeft, mergedRight);
  }

  return mergedArray;
};


// quicksort

var quickSort = function(array) {
  if ( array.length === 0 ) {
    return array;
  }

  var left = [];
  var right = [];
  var pivot = array.shift();

  for ( var i = 0; i < array.length; i++ ) {
    if ( array[i] < pivot ) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};





