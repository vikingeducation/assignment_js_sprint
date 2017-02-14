// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function (arr) {
    var largest = 0;
    for (var el in arr) {
      if (arr[el] > largest) {
        largest = arr[el];
      }
    }
    return largest;
  },

  reversed: function (str) {
    var arr = str.split('');
    var revArr = [];
    for (i in arr) {
      revArr.push(arr[arr.length - i - 1]);
    }
    return revArr.join('');
  },

  loudSnakeCase: function (str) {
    str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    var arr = str.split(' ');
    var capArr = [];

    for (var el in arr) {
      capArr.push(arr[el].charAt(0).toUpperCase() + arr[el].slice(1))
    }
    return capArr.join('_');
  },

  compareArrays: function (arr1, arr2) {
    var compArr = [];

    for (el in arr1) {
      if (arr1[el] === arr2[el])
        compArr.push(el);
    }
    return compArr.length === arr1.length ? true : false;
  },

  fizzBuzz: function (index) {
    var arr = [];

    for (var i = 1; i < index + 1; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push('FIZZBUZZ');
      } else if (i % 3 === 0) {
        arr.push('FIZZ');
      } else if (i % 5 === 0) {
        arr.push('BUZZ');
      } else {
        arr.push(i);
      }
    }
    return arr;
  },

  myMap: function (arr, fn) {
    var newArr = []

    for (var i = 0; i < arr.length; i++) {
      newArr.push(fn(arr[i]));
    }
    return newArr;
  },

  primes: function (val) {
    var arr = [];
    var primes = [];

    for (var i = 2; i < val; i++) {
      arr.push(i);
    }
    for (var j = 0; j < arr.length; j++) {
      var notPrime = [];
      for (var num = 2; num < arr[j]; num++) {
        if (arr[j] % num === 0) {
          notPrime.push('x');
        }
      }
      if (!notPrime.length) {
        primes.push(arr[j]);
      }
    }
    return primes
  },
}