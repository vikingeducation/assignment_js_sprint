// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {



  // largestEl takes an array and returns the largest element.
  largestEl: function(userArray){

    var largestValue = userArray[0];
    for (var i = 0; i < userArray.length; i++) {
      if (userArray[i] > largestValue) {
        largestValue = userArray[i];
      }
    }

    return largestValue;

  },

  // reversed takes a string and reverses it.
  reversed: function(string){

    var revString = "";
    for (var i = string.length - 1; i > -1; i--) {
      revString += string[i];
    }

    return revString;

  },

// loudSnakeCase takes a full sentence and puts it into "Loud_Snake_Case" format but strips out any non-character elements (like punctuation).
  loudSnakeCase: function(sentence){

    var snakeSentence = sentence.toLowerCase();
    snakeSentence = snakeSentence.replace("[^a-zA-Z\\s]", "");
    snakeSentence = snakeSentence.split(" ");

    for (var i = 0; i < snakeSentence.length; i++) {
      snakeSentence[i] = snakeSentence[i].charAt(0).toUpperCase() + snakeSentence[i].slice(1);
    }

    return snakeSentence.join('_');

  },

// compareArrays takes two arrays and checks to see if they are equal (same contents in the same order). Assume they're not nested.
  compareArrays: function(a, b){

    if (a.length >= b.length) {
      var maxLength = a.length;
    }
    else {
      var maxLength = b.length;
    }

    var isSame = true;

    for (var i = 0; i < maxLength; i++) {
      if (a[i] != b[i]) {
        isSame = false;
        break;
      }

    }

    return isSame;

  },

// fizzBuzz takes an input of a number and returns an array containing all the elements from 1 to that number. Each element divisible by 3 is replaced by "FIZZ", each element divisible by 5 is replaced by "BUZZ" and each element divisible by both 3 and 5 is replaced by "FIZZBUZZ". Eg. fizzBuzz(6) => [ 1, 2, "FIZZ", 4, "BUZZ", "FIZZ" ]
  fizzBuzz: function(num){

    var arr = [num];

    for (var i = num - 1; i > 0; i--) {
      arr.unshift(i);
    }

    for (var i = 0; i < arr.length; i++) {
      if (arr[i]%3 === 0 && arr[i]%5 === 0) {
        arr[i] = "FIZZBUZZ";
      }
      else if (arr[i]%3 === 0 && arr[i]%5 !== 0) {
        arr[i] = "FIZZ";
      }
      else if (arr[i]%3 !== 0 && arr[i]%5 === 0) {
        arr[i] = "BUZZ";
      }
      else {
        arr[i] = arr[i];
      }
    }

    return arr;

  },

// myMap takes an array and a function. It passes every element from the array into that function, in turn, running the function. The returned array should be filled with each of the return statements from that function.
  myMap: function(arr,fun){

    var finalArr = [];

    for (i = 0; i < arr.length; i++) {
      finalArr[i] = fun(arr[i]);
    }

    return finalArr;

  },

// primes takes a number and outputs an array containing all prime numbers that occur prior to that number, e.g. primes(8) => [2,3,5,7]
  primes: function(num){

    var arr = [];
    var primeArr = [];

    for (i = num - 1; i > 0; i--) {
      arr.unshift(i);
    }

    for (i = 1; i < arr.length; i++) {

      var counter = 0;

      for (j = 2; j < arr[i] - 1; j++) {
        if (arr[i] % j === 0) {
          counter++;
        }
      }

      if (counter === 0) {
        primeArr.push(arr[i]);
      }

    }

    return primeArr;

  },
}
