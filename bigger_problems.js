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
  var output = [];
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
  if (arr.length <= 1) {
    return arr;
  }
  var len = arr.length;
  var mid = Math.floor(len / 2);

  var leftSlice = arr.slice(0, mid);
  var rightSlice = arr.slice(mid, len);

  var slicedLeft = mergeSort(leftSlice);
  var slicedRight = mergeSort(rightSlice);

  return sorted(slicedLeft,slicedRight);
}


//quick sort

function quickSort(arr) {
  var len = arr.length;
  for (var wallPointer = 0; wallPointer < len; wallPointer++) {
    var searching = true;
    var i = wallPointer;
    while(i < len-1 && searching) {
      if (arr[i] < arr[len-1]) {
        var temp = arr[wallPointer];
        arr[wallPointer] = arr[i];
        arr[i] = temp;
        searching = false;
      }
      i++;
    }
    if (i === len-1) {
      var finalTemp = arr[wallPointer];
      arr[wallPointer] = arr[len-1];
      arr[len-1] = finalTemp;
    }
  }
  return arr;
}
