var sort = {  
  // Iteratively bubblesort
  bubbleSort: function(arr) {
    var unsorted = true;
    while (unsorted) {
      var count = 0;
      for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) { 
          var smallerNum = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = smallerNum;
          count += 1;
        }
      }
      if (count === 0) { unsorted = false };
    }
    return arr;
  },

  // Recursively bubblesort
  bubbleSortRec: function(arr, count = 0) {
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        var smallerNum = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = smallerNum;      
        count += 1;
      }
    }
    return count === 0 ? arr : this.bubbleSortRec(arr, 0);
  },

  // Merge sort
  mergeSort: function(arr) {
    if (arr.length === 1) {
      return arr;
    }

    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  },

  merge: function(left, right) { 
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  },

  // Quicksort
  quickSort: function(arr, left, right) {
    var len = arr.length;
    var pivot;
    var wallIndex;

    if (left < right) {
      pivot = right;
      wallIndex = this.partition(arr, pivot, left, right);

      this.quickSort(arr, left, wallIndex - 1);
      this.quickSort(arr, wallIndex + 1, right);
    }
    return arr;
  },

  partition: function(arr, pivot, left, right) {
    var pivotValue = arr[pivot];
    var wallIndex = left;

    for (var i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        this.swap(arr, i, wallIndex);
        wallIndex++;

      }
    }
    this.swap(arr, right, wallIndex);
    return wallIndex;
  },

  swap: function(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

}

