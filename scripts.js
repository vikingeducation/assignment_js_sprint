// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(){
    var arr = arguments[0];
    return arr.reduce(function(prev, next) {
      if (prev > next) {
        return prev;
      } else {
        return next;
      }
    });
  },

  reversed: function(){
    var str = arguments[0];
    return str.split('').reverse().join('');
  },

  loudSnakeCase: function(){
    var sentence = arguments[0];
    return sentence.split(' ')
    .filter(function(item){return item !== ""})
    .map(function(item){return item.charAt(0).toUpperCase() + item.slice(1).replace(/\W/g, '');})
    .join('_');
  },

  compareArrays: function(){
    var startArr = arguments[0];
    var diffArr = arguments[1];
    if (startArr.length !== diffArr.length) {
      return false;
    } else {
      for (var i = 0; i < startArr.length; i++) {
        if (startArr[i] !== diffArr[i]) {
          return false;
        }
      }
      return true;
    }
  },

  fizzBuzz: function(){
    var num = arguments[0];
    var result = [];
    for (var i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
        result.push("FIZZ");
      } else if (i % 5 === 0) {
        result.push("BUZZ");
      } else {
        result.push(i);
      }
    }
    return result;
  },

  myMap: function(){
    var arr = arguments[0];
    var func = arguments[1];
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      result.push(func(arr[i]));
    }
    return result;
  },

  primes: function(){
    var num = arguments[0];
    var result = [];
    for (var i = 2; i < num; i++) {
      if (test(i)) {
        result.push(i);
      }
    }

    function test(value) {
      var sqrt = Math.floor(Math.sqrt(value));
      for (var i = 2; i <= sqrt; i++) {
        if (value % i === 0) {
          return false;
        }
      }
      return true;
    };

    return result;
  },

}








