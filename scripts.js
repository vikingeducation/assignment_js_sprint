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
    console.log(a, b);
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
      var str = '';
      str = (i % 3 === 0) ? 'FIZZ' : str;
      str += (i % 5 === 0) ? 'BUZZ' : '';
      var j = (str === '') ? i : str;
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
        if (j % i < 1) {
          isPrime = false;
          break;
        }
        i++;
      }
      if (isPrime) {
        retVal.push(j);
      }
      j++;
    }
    return retVal;
  },


  bubbleSort: function(array) {
    var n = array.length;
    var didSwap = true;
    while (didSwap) {
      didSwap = false;
      for (var i = 0; i <= n; i++) {
        var a = array[i];
        var b = array[i + 1];
        if (
            (a !== 'undefined' && b !== 'undefined') &&
            (a > b)
          ) {
          array[i] = b;
          array[i + 1] = a;
          didSwap = true;
        }
      }
      n--;
    }
    return array;
  },


  mergeSort: function(array) {
    if (array.length < 2) return array;
    
    var middle = Math.floor(array.length / 2);
    var left = this.mergeSort(array.slice(0, middle));
    var right = this.mergeSort(array.slice(middle));
    
    var result = [];
    while (left.length > 0 && right.length > 0) {
      result.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    result = result.concat(left.length ? left : right);

    return result;
  },


  quickSort: function(array) {
    var lo = 0;
    var hi = array.length - 1;
    this.doQuickSort(array, lo, hi);
    return array;
  },


  partition: function(array, lo, hi) {
    var pivot = array[hi];
    var i = lo;
    for (var j = lo; j < hi; j++) {
      if (array[j] <= pivot) {
        var a = array[i];
        var b = array[j];
        array[i] = b;
        array[j] = a;
        i++;
      }
    }
    var a = array[i];
    var b = array[hi];
    array[i] = b;
    array[hi] = a;
    return i;    
  },


  doQuickSort: function(array, lo, hi) {
    if (lo < hi) {
      var p = this.partition(array, lo, hi);
      this.doQuickSort(array, lo, p - 1);
      this.doQuickSort(array, p + 1, hi);
    }
  }
}















