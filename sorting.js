"use strict";
//bubble sort
function bubbleSort(array){
  var swapped = true;
  while(swapped){
  //for(var i = 0; i < array.length; i++){
    swapped = false;
    for(var j = 1; j < array.length; j++){
      if (array[j-1] > array[j]){
        var smaller = array[j];
        array[j] = array[j-1];
        array[j-1] = smaller;
        swapped = true;
      }
    }
  }
  return array;
}

//merge sort
function mergeSort(array){
  if(array.length <= 1){
    return array;
  }
  else {
    var mid = Math.floor(array.length/2);
    //slice(starting_index, num_elements)
    var array1 = mergeSort(array.slice(0, mid));
    var array2 = mergeSort(array.slice(mid, array.length));
    return merge(array1,array2);
  }
}

function merge(left, right){
    var result  = [],
        il      = 0,
        ir      = 0;

    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}
// console.log(mergeSort([1,2,5,4]));



//quicksort