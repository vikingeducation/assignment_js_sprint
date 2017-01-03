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

  mergeSort: function(array) {
    if (array.length <= 1) return array;

    // break array in to 2, call mergeSort on each half
    var midpoint = Math.floor(array.length/2),
        left = array.slice(0, midpoint),
        right = array.slice(midpoint, array.length);

    return this.mergeArrays( this.mergeSort(left), this.mergeSort(right));
  },

  mergeArrays: function (arrL, arrR) {
    console.log("mergeArrays called with " + arrL +", "+ arrR);
    var mergedArr = [],
        indexL = 0,
        indexR = 0,
        counter = 0;

    while (indexL < arrL.length && indexR < arrR.length) {
      if (arrL[counter] < arrR[counter]) {
        mergedArr.push( arrL[counter] );
        indexL++;
      } else {
        mergedArr.push( arrR[counter] );
        indexR++;
      }
    }

    return mergedArr;
  },

  quickSort: function() {

  },
}


// sorts.bubbleSort([6,5,3,1,8,2,4]);
sorts.mergeSort([6,5,3,1,8,2,4]);
