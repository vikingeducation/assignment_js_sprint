
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
  var left = [array_left[0]];
  var right = [array_right[0]];

  if (typeof array_right !== 'undefined'){
    return array_right;
  }
  else if (typeof array_left !== 'undefined'){
    return array_left;
  }
  else if (array_left[0] < array_right[0]){
    return left.push(merge( array_left.slice(1, array_left.length), array_right ));
  }
  else {
    return right.push(merge( array_left, array_right.slice(1, array_right.length)));
  }
}

var merge_sort = function(array){

  //base case
  if (array.length <= 1){
    return array;
  }

  //split array
  var left_upper_bound = parseInt(array.length/2);
  var right_lower_bound = parseInt(array.length/2);

  //if array length is even
  if(array.length % 2 === 0){
    left_upper_bound--;
  }
  else{
    right_lower_bound++;
  }

  //defining left and right sides recursively
  var array_left = merge_sort(array.slice(0,left_upper_bound+1));
  console.log("left" + array_left);
  var array_right = merge_sort(array.slice(right_lower_bound));
  console.log("right" + array_right);

  //merge sides together
  return merge(array_left, array_right);

}

console.log(merge_sort([1,3,7,-2,0,5,8,-9,2,3,4]));

var quick_sort = function(array){
  //Base Case
  if (array.length === 0){
    return [];
  }

  //Instantiate Variables
  var left = [];
  var right = [];
  var pivot = array[0];

  //Loop Through array
  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot){
       left.push(array[i]);
     }
    else {
      right.push(array[i]);
    }
  }
  return quick_sort(left).concat(pivot, quick_sort(right));
}

console.log(quick_sort([1,3,7,-2,0,5,8,-9,2,3,4]));
