function bubbleSort(arr) {
  var counter = 1;
  while (counter !== 0) {
    // Boolean. Stop swapping when true.
    counter = 0;
    // Go through array
    for (var i = 0; i < arr.length-1; i++) {
      var j = i+1;
      if (arr[j] < arr[i]) {
        // Swap and set boolean to true.
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        counter++;
      }
    }
  }
  return arr;
}

// Sort helper.
function sorted(left,right) {
  var output;
  var lPtr = 0;
  var rPtr = 0;

  while (lPtr < left.length && rPtr < right.length) {
    if (left[lPtr] < right[rPtr]) {
      output.push(left[lPtr]);
      lPtr++;
    } else {
      output.push(right[rPtr]);
      rPtr++;
    }
  }

  while (lPtr < left.length) {
    output.push(left[lPtr]);
    lPtr++;
  }

  while (rPtr < right.length) {
    output.push(right[rPtr]);
    rPtr++;
  }

  return output;
}

function mergeSort(arr) {
  var len = arr.length;
  var mid = parseInt(len / 2);

  var leftSlice = arr.slice(0,mid);
  var rightSlice = arr.slice(mid,len-1);

  var slicedLeft = mergeSort(leftSlice);
  var slicedRight = mergeSort(rightSlice);

  return sorted(slicedLeft,slicedRight);
}

console.log(mergeSort([5,2,1,3,4]));
