var bubbleSort = function(arr){
  var sorted = false;
  do {
    sorted = false;
    for(var i = 0; i < arr.length - 1 ; i++) {
      if(arr[i] > arr[i+1]) {
        var holder = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = holder;
        sorted = true;
      };
    };
  } while(sorted === true);
  return arr
};

[2,3,5,6]