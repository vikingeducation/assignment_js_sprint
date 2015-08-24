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

<<<<<<< HEAD
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

//quicksort
//start is 1, end = array.length-1 to begin
function quicksort(array, start, last){
  if (start < last){
    var pivot = partition(array, start, last);
    quicksort(array, start, pivot-1);
    quicksort(array, pivot, last);
    return array;
  }

}

function partition(array, start, last){
  var pivot = array[last];
  var smallerNum;
  var swap_index = start; //index of where we swap for lower numbers
  //go through entire array to compare with pivot
  for (var i = start; i < last; i++){
    console.log("pivot: "+ pivot + ", array[i]: " + array[i]);
    if (array[i] <= pivot){
      console.log("in if statement");
      smallerNum = array[i];
      array[i] = array[swap_index];
      array[swap_index] = smallerNum;
      swap_index++;
      // console.log("p_i: "+ p_index + "array: "+ array);
    }
  }
  array[last] = array[swap_index];
  array[swap_index] = pivot;

  return swap_index;
}
// console.log(mergeSort([1,2,5,4]));

// function partition(array, start, last){
//   var pivot = array[last];
//   var p_index = last; //index of pivot
//   //go through entire array to compare with pivot
//   for (var i = start; i < last; i++){
//     console.log("pivot: "+ pivot + ", array[i]: " + array[i]);
//     if (array[i] > pivot){
//       console.log("in if statement");
//       array[last] = array[i];
//       array[i] = array[p_index-1];
//       array[p_index] = pivot;
//       p_index--;
//       console.log("p_i: "+ p_index + "array: "+ array);
//     }
//   }
//   return p_index;
// }


