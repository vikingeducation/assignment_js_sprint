// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(input){
      // spread method (not all browsers support)
    // return Math.max( ...input );

      // built in Math.max operator
    // return Math.max.apply(null, input);

      // for loop (only works for positive numbers)
    var topNum = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i] > topNum) {
        topNum = input[i];
      }
    }
    return topNum;
  },

  reversed: function(str){
      // using three built in methods
    // var splitStr = str.split("")
    // var reverseStr = splitStr.reverse()
    // var joinStr = reverseStr.join("")
    // return joinStr

      // Chained methods
    // return str.split("")
    //           .reverse()
    //           .join("")

      // for loop
    // var returnString = "";
    // for (var i = str.length - 1; i >= 0; i--) {
    //   returnString += str[i];
    // }
    // return returnString;

      // recursive
    if (str === "")
      return "";
    else
      return this.reversed(str.substr(1)) + str.charAt(0);
  },

  loudSnakeCase: function(s){
      // regex
    // var sNoSym = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    // var sCase = sNoSym.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    // var sScores = sCase.replace(/\s/g, "_");
    // var sSingleScores = sScores.replace(/__/g, "_");
    // return sSingleScores;

      // split and join
    sNoPeriods = s.replace(/\. /g, "");
    return sNoPeriods.split(" ")
                     .map(function(word) {
                     return (word.charAt(0)
                     .toUpperCase() + word.slice(1));})
                     .join('_')
                     .substr(0, sNoPeriods.length - 1);
  },

  compareArrays: function(firstArr, secondArr){
    if (firstArr.length != secondArr.length)
      return false;
    else
      for (var i = 0; i < firstArr.length -1; i++) {
        if (firstArr[i] != secondArr[i])
          return false;
      }
    return true;
  },

  fizzBuzz: function(num){
    returnArr = [];
    for (var i = 1; i <= num; i++) {
      if ((i % 3 === 0) && (i % 5 === 0))
        returnArr.push("FIZZBUZZ");
      else if (i % 3 === 0)
        returnArr.push("FIZZ");
      else if (i % 5 === 0)
        returnArr.push("BUZZ");
      else
        returnArr.push(i);
    }
    return returnArr;
  },

  myMap: function(arr, func){
    returnArr = [];
    for (var i = 0; i < arr.length; i++) {
      returnArr.push(func(arr[i]));
    }
    return returnArr;
  },

  primes: function(num){
    var arr = [], upperLimit = Math.sqrt(num), primes = [];

    // Make an array of true values from 2 to (num - 1)
    for (var i = 0; i < num; i++) {
      arr.push(true);
    }

    // Set multiples to false
    for (var i = 2; i <= upperLimit; i++) {
      if (arr[i]) {
        for (var j = i * i; j < num; j += i) {
            arr[j] = false;
        }
      }
    }
    // All arr[i] set to true are primes
    for (var i = 2; i < num; i++) {
      if(arr[i]) {
          primes.push(i);
      }
    }
    return primes;
  },

  bubbleSort: function(arr) {
    var changed;
    do {
      changed = false;
      for (var i = 0; i < arr.length -1; i++) {
        if (arr[i] > arr[i + 1]){
          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          changed = true;
        }
      }
    } while (changed);
    return arr;
  },

  mergeSort: function(arr) {
    if (arr.length < 2)
      return arr;
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
  },

  merge: function(left, right) {
    var returnArr = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
          returnArr.push(left.shift());
      } else {
          returnArr.push(right.shift());
      }
    }
    while (left.length)
      returnArr.push(left.shift());
    while (right.length)
      returnArr.push(right.shift());
    return returnArr;
  },

  quickSort: function(arr) {
    if (arr.length === 0)
      return [];
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }
}
