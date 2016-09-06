// SORT FUNCTIONS BELOW

var arr1 = [4, 7, 6, 9, 1, 3 ,5, 8]

var sortFunctions = {
  bubbleSort: function(arr) {
    // while not sorted
    var sorting = true;
    while (sorting) {
      sorting = false;
      for (var i = 0; i < arr.length - 1; i++) {
        var temp = arr[i];
        if (arr[i] > arr[i+1]) {
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          sorting = true;
        } 
      }      
    }
    return arr
  }, 
}