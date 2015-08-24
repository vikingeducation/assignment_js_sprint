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
  } else {
    var mid = Math.floor(array.length/2);
    //slice(starting_index, num_elements)
    var array1 = mergeSort(array.slice(0, mid));
    var array2 = mergeSort(array.slice(mid, array.length));
    merge(array1,array2);
  }
}

function merge(array1, array2){
  var sortedArray = [];
  var num1;
  console.log("before while: array1: "+ array1 +", array2: "+ array2);
  while (array1.length > 0 && array2.length > 0){
    console.log("in while loop")
    if (array1[0] > array2[0]){
      num1 = array2.shift;
      sortedArray.push(num1);
      console.log("in if statement")
    } else {
      num1 = array1.shift;
      sortedArray.push(num1);
      console.log("in else statement")
    }
  console.log("end of while: array1: "+ array1 +", array2: "+ array2);
  }
  // console.log("array1: " + array1);
  // console.log("array2: " + array2);
  if (array1.length > 0){
    sortedArray.concat(array1);
  }else if (array2.length > 0){
    sortedArray.concat(array2);
  }
  return sortedArray;
}



//quicksort