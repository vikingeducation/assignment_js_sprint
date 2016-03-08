// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    // your code here
    var largest = arr[0];
    for(var i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  },

  reversed: function(str){
    // your code here
    var len = str.length;
    var arr = [];
    for(var i = 0; i < len/2; i++) {
      arr[i] = str[len - 1 - i];
      arr[len - 1 - i] = str[i];
    }
    arr = arr.join("");
    return arr;
  },

  loudSnakeCase: function(str){
    var len = str.length;
    var arr = [];

    snakeString = str.replace(/[^A-Za-z ]+/g,"");
    snakeString = snakeString.replace(/[^A-Za-z]+/g,"_");
    snakeString = snakeString.replace(/_./g, function(letter) { return "_" + letter[1].toUpperCase(); });

    return snakeString;
  },

  compareArrays: function(arr1,arr2){

    if (arr1.length != arr2.length) {
      return false;
    };

    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      };

    };
    return true;
  },

  fizzBuzz: function(num){

    var arr = [];

    for (var i = 1; i <= num; i++) {

      if (i % 15 == 0) {
        arr.push("FIZZBUZZ");
      } else if (i % 5 == 0) {
        arr.push("BUZZ");
      } else if (i % 3 == 0) {
        arr.push("FIZZ");
      } else {
        arr.push(i);
      };
    };
    return arr;
  },

  myMap: function(arr, func){
    for (var i = 0; i < arr.length; i++) {
      arr[i] = func(arr[i]);
    }
    return arr;
  },

  primes: function(num){
    primes_arr = [];
    for (var i = 2; i < num; i++) {
      prime_bool = true;
      for (var j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
          prime_bool = false;
        }
      }
      if (prime_bool) {
        primes_arr.push(i);
      }
    }
    return primes_arr;
  },

  bubbleSort: function(arr){
    max = arr.length;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < max - 1; j++) {
        if (arr[j] > arr[j+1]) {
          temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
      max--;
    }
    return arr;
  },

  mergeSort: function(arr) {

    if (arr.length == 1) return arr;

    var mid = arr.length / 2;
    var left = this.mergeSort(arr.slice(0,mid));
    var right = this.mergeSort(arr.slice(mid));

    var left_index = 0;
    var right_index = 0;

    var merged_array = [];

    while (left[left_index] && right[right_index]) {
      if (left[left_index] < right[right_index]) {
        merged_array.push(left[left_index]);
        left_index++;
      } else {
        merged_array.push(right[right_index]);
        right_index++;
      }
    }

    for (var i = left_index ; i < left.length ; i++) {
      merged_array.push(left[i]);
    }

    for (var i = right_index ; i < right.length ; i++) {
      merged_array.push(right[i]);
    }

    return merged_array;
  },

  quickSort: function(arr) {
    if (arr.length === 0) {
      return [];
    }

    var left = [];
    var right = [];
    var pivot = arr[0];

    for (var i = 1; i < arr.length; ++i) {
      if ( arr[i] < pivot ) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return this.quickSort(left).concat(pivot, this.quickSort(right));
  }
}
