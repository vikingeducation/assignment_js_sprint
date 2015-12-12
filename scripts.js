// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array) {
    var current,
        last;
    for (var i = 0; i < array.length; i++) {
      current = array[i];
      if (last !== undefined) {
        current = (current > last) ? current : last;
      }
      last = current;
    }
    return current;
  },
  
  reversed: function(str) {
    var retVal = '';
    for (var i = str.length - 1; i > -1; i--) {
      retVal += str[i];
    }
    return retVal;
  },

  loudSnakeCase: function(str) {
    var str = str.replace(/[\s]+/g, '_')
      .match(/[a-zA-Z_]/g)
      .join('')
      .replace(/_./g, function(s) {
        return '_' + s[1].toUpperCase()
      });
    if (str[0]) {
      str[0] = str[0].toUpperCase();
    }
    return str;
  },

  compareArrays: function(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  },

  fizzBuzz: function(n) {
    var a = [];
    for (var i = 1; i <= n; i++) {
      var j = i;
      if (i % 3 == 0) {
        j = 'FIZZ';
      }
      if (i % 5 == 0) {
        j = 'BUZZ';
      }
      if (i % 3 == 0 && i % 5 == 0) {
        j = 'FIZZBUZZ';
      }
      a.push(j);
    }
    return a;
  },

  myMap: function(array, func) {
    var retVal = [];
    array.forEach(function(i) {
      retVal.push(func(i));
    });
    return retVal;
  },

  primes: function(n) {
    var retVal = [];
    var j = 0;
    while (j <= n) {
      var i = 2;
      var isPrime = (j > 1);
      while (i <= Math.sqrt(j)) {
        if (j % i++ < 1) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        retVal.push(j);
      }
      j++;
    }
    console.log(retVal);
    return retVal;
  }
}















