// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    // your code here
    return Math.max(...arr);
  },

  reversed: function(str){
    return str.split('').reverse().join('');
  },

  loudSnakeCase: function(sentence){
    // your code here
    words = sentence.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ").split(" ");
    new_words = words.map(function(word) {
                return word[0].toUpperCase() + word.substring(1).toLowerCase();
              });

    return new_words.join("_")

  },

  compareArrays: function(arr_1, arr_2){
    if (arr_1.length !== arr_2.length){
      return false;
    }
    for (var i = 0; i < arr_1.length; i++){
      if (arr_1[i] !== arr_2[i]){
        return false;
      }
    }
    return true;
  },

  fizzBuzz: function(input){
    var result = []
    for (var i = 1; i <= input; i++){
      if (i%15===0){
        result[i-1] = "FIZZBUZZ";
      }
      else if (i%5===0){
        result[i-1] = "BUZZ";
      }
      else if (i%3===0){
        result[i-1] = "FIZZ";
      }
      else{
        result[i-1] = i;
      }
    }
    return result
  },

  myMap: function(arr, callback){
    var result = [];
    for(i in arr){
      result[i] = callback(arr[i]);
    }
    return result
  },

  primes: function(n){
    // your code here
    var primes = [];

    var is_prime = function(num) {
      for(var i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) { return false };
      };
      return true;
    };


    for(var i = 2; i <= n ; i++ ){
      if(is_prime(i)){ primes.push(i) };
    };
    return primes;
  },

  bubbleSort: function(arr) {
    var swapped = true;

    while(swapped){
      swapped = false;

      var i = 0;
      while(i < arr.length - 1){
        if(arr[i] > arr[i + 1]){
          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        };
        i++;
      };
    };
    return arr;
  },

  mergeSort: function mergeSort(arr){
    var merge = function(left, right){
      var mergedArray = [];
      while(left.length > 0 || right.length > 0){


        if (left.length === 0){
          mergedArray.push(right.shift());
        }
        else if (right.length === 0){
          mergedArray.push(left.shift());
        }
        else if (left[0] <= right[0]){
          mergedArray.push(left.shift());
        }
        else{
          mergedArray.push(right.shift());
        }
      }
      return mergedArray;
    };

   if (arr.length <= 1) { return arr; }

   var midpoint = Math.floor(arr.length/2);

   var left = arr.slice(0, midpoint);
   var right = arr.slice(midpoint, arr.length);

   return merge(mergeSort(left), mergeSort(right));
  },

  quickSort: function quickSort(arr, low=0, high=arr.length-1){

   var swap = function(arr, idx_1, idx_2){
    var temp = arr[idx_1];
    arr[idx_1] = arr[idx_2];
    arr[idx_2] = temp;
   }

   var partition = function(arr, low, high){
    var pivot = Math.floor((high-low)/2);
    var left = low;
    var right = high;

    while(left < right){
      while (arr[left] <= arr[pivot] && left < pivot){
        left++;
      }
      while (arr[right] > arr[pivot] && right > pivot){
        right--;
      }

      swap(arr, left, right);
      left++;
      right--;
    }

    return left;
   } // end partition

    if (high <= low) { return arr; }

    var splitPoint = partition(arr, low, high)

    if(low < splitPoint - 1) {
      quickSort(arr, low, splitPoint - 1)
    }

    if(high > splitPoint){
      quickSort(arr, splitPoint, high)
    }
    return arr
  } 
}
