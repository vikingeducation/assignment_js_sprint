// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr) {
    return arr.sort().pop();
  },
  reversed: function(str) {
    var newStr = [];
    for (var i = 0; i < str.length; i++) {
      newStr.unshift(str[i]);
    }
    return newStr.join('');
  },

  loudSnakeCase: function(s) {
    var res = [];
    for (var i = 0; i < s.length; i++) {
      if (i === 0) {
        res.push(s[i]);
      } else {
        if (s[i - 1] == ' ' && s[i].match(/[a-zA-Z]/)) {
          res.push('_' + s[i].toUpperCase());
        } else {
          if (s[i].match(/[a-zA-Z]/)) {
            res.push(s[i].toLowerCase());
          }
        }
      }
    }
    return res.join('');
  },

  compareArrays: function(a, b) {
    if (b.length !== a.length) {
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
    arr = [];
    for (var i = 1; i <= n; i++) {
      o = '';
      if (i % 3 === 0) {
        o += 'FIZZ';
      }
      if (i % 5 === 0) {
        o += 'BUZZ';
      }
      o === '' ? arr.push(i) : arr.push(o);
    }
    return arr;
  },

  myMap: function(arr, func) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
      res.push(func(arr[i]));
    }
    return res;
  },

  primes: function(num) {
    var res = [];
    for (var i = 2; i < num; i++) {
      if (i == 2) {
        res.push(i);
      }
      for (var j = 0; j < res.length; j++) {
        if (i % res[j] == 0) {
          break;
        }
        if (j == res.length - 1) {
          res.push(i);
        }
      }
    }
    return res;
  }
}