function bubbleSort(array){
  var sorted = false;

  do {
    sorted = true;
    for(var i = 0; i < array.length - 1; i++){
      if(array[i] > array[i+1]){
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        sorted = false;
      };
    };
  } while(sorted === false);

  return array;
};



function mergeSort(array){
  var length = array.length;
  if(length === 1){
    return array;
  };
  
  var mid_point = (length === 2 ? 0 : length / 2);
  var spliceLength = length/2;
  var left = array.splice(0,spliceLength)
  var right = array;
 
  var sortedLeft = mergeSort(left);
  
  var sortedRight = mergeSort(right);
  

  return merge(sortedLeft, sortedRight);
};


function merge(left, right){
  var newArray = [];
  var lptr = 0, rptr = 0;
  
  
  if(typeof right === "undefined"){
    return [left];
  } else if(typeof left === "undefined"){
    return [right];
  };

  while(lptr < left.length && rptr < right.length){
    var compared = comparison(left[lptr], right[rptr]);
    
    if(compared === -1){
      newArray.push(left[lptr]);
      lptr++;
    } else if(compared === 1){
      newArray.push(right[rptr]);
      rptr++
    } else {
      newArray.push(left[lptr]);
      lptr++;
    };
  };

  while(lptr < left.length){
    newArray.push(left[lptr])
    lptr++
  };

  while(rptr < right.length){
    newArray.push(right[rptr]);
    rptr++;
  };


  return newArray
};

function comparison(first, second){
  if(first > second){
    return 1;
  } else if(second > first){
    return -1
  } else {
    return 0
  };
};


// QUICK SORT



function quickSort(arr){
//if array is empty
if (arr.length === 0) {
return [];
}
  var left = [];
  var right = [];
  var pivot = arr[0];
  //go through each element in array
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
         left.push(arr[i]);
      } else {
         right.push(arr[i]);
      }
  }
  return quickSort(left).concat(pivot, quickSort(right));
};