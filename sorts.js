function bubble_sort (array) {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 0; j < array.length - i; j++) {
      if ( array[j] > array[j + 1] ) {
        var temp = array[j];
        array[j] = array[j+1];
        array[j + 1] = temp;
      };
    };
  };
  return array;
}

// console.log( bubble_sort([6,5,4,3,2,1]) );
// console.log( bubble_sort([1,7,3,2,9,0,5]) );
// console.log( bubble_sort([1,2,3,4,5,6,7,8]) );

function merge_sort (array) {
  // console.log("full array is: " + array);
  if (array.length <= 1) {
    return array;
  } else {
    var first_half = merge_sort(array.slice(0, Math.floor(array.length / 2) ));
    var second_half = merge_sort(array.slice( Math.floor(array.length / 2), array.length ));
    // console.log("first half is: " + first_half);
    // console.log("second half is: " + second_half);
    return merge(first_half, second_half);
  };
}

function merge (array1, array2) {
  sorted_array = [];
  array1_index = 0;
  array2_index = 0;
  while (array1_index < array1.length || array2_index < array2.length) {
    // console.log("Comparing: " + array1[array1_index] + " with " + array2[array2_index]);
    if (array1[array1_index] < array2[array2_index] || array2[array2_index] == undefined) {
      sorted_array.push(array1[array1_index]);
      array1_index++;
    } else {
      sorted_array.push(array2[array2_index]);
      array2_index++;
    };
  };
  // console.log("we are returning: " + sorted_array);
  return sorted_array;
}

//console.log( merge_sort([6,5,4,3,2,1]) );
//console.log( merge_sort([1,7,3,2,9,0,5]) );
//console.log( merge_sort([1,2,3,4,5,6,7,8]) );




function quick_sort(arr)
{
    var stack = [arr];
    var sorted = [];

    while (stack.length > 0) {

        var temp = stack.pop(),
            temp_length = temp.length;

        if (temp_length == 1) {
            sorted.push(temp[0]);
            continue;
        }
        var pivot = temp[0];
        var left = [],
            right = [];

        for (var i = 1; i < temp_length; i++) {
            if (temp[i] < pivot) {
                left.push(temp[i]);
            } else {
                right.push(temp[i]);
            }
        }

        left.push(pivot);

        if (right.length > 0)
            stack.push(right);
        if (left.length > 0)
            stack.push(left);

    }

    console.log(sorted);
}



function quicksort(arr)
{
    if ((arr.length == 0) ||  (arr.length === 1))
        return [];

    var left = new Array();
    var right = new Array();
    var pivot = arr[Math.floor(Math.random() * (arr.length))];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
           left.push(arr[i]);
        } else {
           right.push(arr[i]);
        }
    }

    return quicksort(left).concat(pivot, quicksort(right));
}


// console.log( quick_sort([6,5,4,3,2,1]) );
// console.log( quick_sort([1,7,3,2,9,0,5]) );
// console.log( quick_sort([1,2,3,4,5,6,7,8]) );


// console.log( quicksort([6,5,4,3,2,1]) );
// console.log( quicksort([1,7,3,2,9,0,5]) );
// console.log( quicksort([1,2,3,4,5,6,7,8]) );