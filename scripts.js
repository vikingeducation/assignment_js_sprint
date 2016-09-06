// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    var largest = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] >= largest) {
        largest = array[i];
      };
    };
    return largest;
  },
  
  reversed: function(string){  
    var reverse = "";
    for (var i = string.length - 1; i >= 0; i--) {
      reverse += string[i];
    };
    return reverse;
  },

  loudSnakeCase: function(string){  
    // your code here
    var return_string = "";
    for (var i = 0; i < string.length; i++) {
      var letter = string[i].toLowerCase();
      if (letter.match(/[a-z]/)) {
        if (i === 0 || return_string.slice(-1) === "_") {
          return_string += string[i].toUpperCase();
        }
        else{
          return_string += string[i].toLowerCase();
        }
      }
      else {
        if (return_string.slice(-1) !== "_") {
          if (i !== string.length - 1) {
            return_string += "_"; 
          }
        }
      }
    }
    return return_string;
  },

  compareArrays: function(array1, array2){ 
    if (array1.length !== array2.length) {
      return false;
    };
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      };
    };
    console.log("Finish compareArrays first!");
    return true;
  },

  fizzBuzz: function(max){
  var finalFizzBuzz = [];
  for (var i = 1; i <= max; i++) {
    if (i % 15 === 0) {
      finalFizzBuzz.push("FIZZBUZZ");
    }
    else if (i % 3 === 0) {
      finalFizzBuzz.push("FIZZ");
    }
    else if (i % 5 === 0) {
      finalFizzBuzz.push("BUZZ");
    }
    else {
      finalFizzBuzz.push(i);
    };
  };  
  return finalFizzBuzz;  
  },

  myMap: function(array, func){  
    var finalArray = [];
    for(var i = 0; i < array.length; i++) {
      finalArray.push(func(array[i]));
    };
    return finalArray;
  },

  primes: function(max){  
    var primeArray = [];
    for (var i = 2; i <= max; i++) {
      if (i === 2 || i === 3 || i === 5) {
        primeArray.push(i);
      }
      if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
        primeArray.push(i);
      };
    };
    return primeArray;
  },
}

var BubbleSort = function(array) {
  var timesThrough = 0;
  do {
    var swaps = 0;
    for (var i = 0; i < array.length - 1 - timesThrough; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp; 
        swaps += 1;
      };
    };
    timesThrough += 1
  }
  while (swaps === 1);
  return array;
};

var mergeSort = function(array) {
  if (array.length <= 1) {
    return array;
  };
  var midPoint = array.length / 2;
  var firstList = mergeSort(array.slice(0, midPoint));
  var secondList = mergeSort(array.slice(midPoint));
  return merge(firstList, secondList);
};

var merge = function(first, second) {
  var finalArray = [];
  var i = 0;
  var j = 0;
  var first_length = first.length;
  var second_length = second.length;
  var length = first_length + second_length;
  while (finalArray.length < length) {
    if (i === first.length)  {
      for(var a = j; a < second.length; a++ ) {
        finalArray.push(second[a]);
      };
    }
    else if (j === second.length) {
      for(var b = i; b < first.length; b++) {
        finalArray.push(first[b]);
      };
    }
    else {
      if (first[i] <= second[j]) {
        finalArray.push(first[i]);
        i++;
      }
      else {
        finalArray.push(second[j]);
        j++;
      }
    }
  }
return finalArray;
};

var QuickSort = function(array) {
  if (array.length <= 1) {
    return array;
  }
  var pivot = array.slice(array.length);
  var lessThan = [];
  var greaterThan = [];
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] > pivot) {
      greaterThan.push(array[i]);
    }
    else {
      lessThan.push(array[i]);
    }
  }
  var sortedLessThan = QuickSort(lessThan);
  var sortedGreaterThan = QuickSort(greaterThan);
  return sortedLessThan.concat(pivot).concat(sortedGreaterThan);
}







