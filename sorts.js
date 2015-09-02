var bubbleSort = function(array) {
  output = array;

  for (var end = array.length - 1; end >= 1; end--) {
    for(var j = 0; j < end; j++) {
      var pair = [output[j], output[j+1]].sort();
      output.splice(j, 2, pair[0], pair[1]);
    };
  };

  return output;
};



var mergeSort = function(array) {

  // merging 2 sorted arrays
  var mergeArrays = function(array1, array2) {
    var merged = [];
    var tracker1 = 0;
    var tracker2 = 0;

    while ((tracker1 < array1.length) || (tracker2 < array2.length )) {
      var value1 = array1[tracker1]
      var value2 = array2[tracker2]

      if (typeof value2 === 'undefined' || value1 <= value2) {
        merged.push(value1);
        tracker1++;
      }
      else {
        merged.push(value2);
        tracker2++;
      };
    };

    return merged;
  };


  // Create 1-cell arrays
  output = []
  array.forEach( function(element) {
    output.push([element]);
  } );


  while (output.length > 1) {
    for(i = 0; i < output.length - 1; i++) {
      output.splice(i, 2, mergeArrays(output[i], output[i+1]));
    };
  };

  return output;

};




var quickSort = function(array) {

  var pivotIndexQueue = [[0,(array.length - 1)]];


  var sortPartition = function(indexRange) {
    var firstIndex = indexRange[0];
    var lastIndex = indexRange[1];

    var pivotValue = array[lastIndex];
    var leftSide = array.slice(firstIndex, lastIndex);
    var partitionedSegment = [pivotValue];
    var newPivotIndex = firstIndex;

    leftSide.forEach( function(element) {
      if (element <= pivotValue) {
        partitionedSegment.unshift(element);
        newPivotIndex++;
      }
      else {
        partitionedSegment.push(element);
      };
    });

    //replace leftSide+1 with partitionedSegment
    var args = [firstIndex, leftSide.length + 1].concat(partitionedSegment);
    Array.prototype.splice.apply(array, args);

    //add newPivotIndex to queue
    if (newPivotIndex > firstIndex + 1) {
      pivotIndexQueue.push([firstIndex,newPivotIndex - 1]);
    };
    if (newPivotIndex < lastIndex - 1) {
      pivotIndexQueue.push([newPivotIndex + 1, lastIndex]);
    };
  };


  while (pivotIndexQueue.length > 0) {
    sortPartition(pivotIndexQueue.shift());
  };

};



  /*

  var getPartition = function(array, pivotIndex) {
    var pivotValue = array[pivotIndex];
    // don't work for indexes of 0 or -1
    var leftSide = array[0..(pivotIndex - 1)];
    var rightSide = array[(pivotIndex + 1)..-1];
  };


  var partition = function(array) {
    var pivotValue = array.pop()
    var partitioned = [pivotValue];
    var pivotIndex = 0;

    array.forEach( function(element) {
      if (element <= pivotValue) {
        partitioned.unshift(element);
        pivotIndex++;
      }
      else {
        partitioned.push(element);
      };
    });

    var leftSide = partitioned


    return {
      pivotIndex: pivotIndex,
      partitionedArray: partitioned
    };

  };

*/
  // split result in 2, run partition on each


