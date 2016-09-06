var bubble = function(arr) {
  for (var j = 1; j < arr.length; j++) {
    var count = 0;
    for (var i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        count++
      };
    };
    if (count === 0) { return arr; };
  };
  return arr;
};

var merge = function(left, right) {
  var newArr = [];
  var left_count = 0;
  var right_count = 0;

  while (newArr.length < left.length + right.length) {
    if (left_count === left.length) {
      newArr.push(right[right_count]);
      right_count++;
    } else if (right_count === right.length) {
      newArr.push(left[left_count]);
      left_count++;
    } else {
      if (left[left_count] < right[right_count]) {
        newArr.push(left[left_count]);
        left_count++;
      } else {
        newArr.push(right[right_count]);
        right_count++;
      };
    };
  };
  return newArr;
};

var merge_sort = function(arr) {
  if (arr.length === 1) { return arr; };

  var half = Math.floor(arr.length / 2) - 1;
  var left = arr.slice(0,half + 1);
  var right = arr.slice(half + 1);

  var new_left = merge_sort(left);
  var new_right = merge_sort(right);

  var end = merge(new_left, new_right);

  return end;

};


var quick = function(arr) {
  if (arr.length === 0) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
         left.push(arr[i]);
      } else {
         right.push(arr[i]);
      }
  }
  return quicksort(left).concat(pivot, quicksort(right));
}
