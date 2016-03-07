
//switch method
var swap = function(array, i){
  first = array[i];
  array[i] = array[i+1];
  array[i+1] = first;
  return array;
}

//comparison method
var bubble_sort = function(array){
  counter = true;
  while(counter === true){
    counter = false;
    for (var i = 0; i < array.length; i++){
      if (array[i] > array[i+1]){
        array = swap(array, i);
        counter = true;
      }
    }
  }
  return array;
}


console.log(bubble_sort([5, 3, 8, 1, 0]));

//merge sort

var merge = function(array_left, array_right){
  if (array_left.length === 0){
    array_right;
  }
  if (array_right.length === 0){
    array_left;
  }
}

var merge_sort = function(array){

  //base case
  if (array.length <= 1){
    return array;
  }

  //split array
  var left_upper_bound = var right_lower_bound = array.length/2;

  //if array length is even
  if(array.length % 2 === 0){
    left_upper_bound--;
  }
  else{
    right_lower_bound++;
  }

  //defining left and right sides recursively
  var array_left = merge_sort(array.slice(0,left_upper_bound+1));
  var array_right = merge_sort(array.slice(right_lower_bound, array.length));

  //merge sides together
  merge(array_left, array_right);

}