var sorts = {
  bubbleSort: function(array) {
    // set swapped var to false
    var swapped = false,
        counter = 0;
    // console.log("setup swapped" + swapped);
    // console.log("setup counter" + counter);

    // do while
    do {
      // console.log("in the while loop");

      swapped = false;

      for (var i = 0; i < array.length - counter; i++) {
        // console.log("in the for loop");
        if (array[i] > (array[i + 1])) {
          // if true, swap the elements
          var temp = array[i];
          array[i] = array[i + 1];
          array[i + 1]= temp;
          swapped = true;
        };
      };

      counter++;
    } while (swapped === true);

    return array;
  },

  mergeSort: function() {

  },

  quickSort: function() {

  },
}


sorts.bubbleSort([6,5,3,1,8,2,4]);
