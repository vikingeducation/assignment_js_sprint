// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    // your code here
    var max = array[0];
    for (var i = 1; i < array.length; i++)
      max = Math.max(max, array[i]);
    return max;
  },
  
  reversed: function(str){  
    // your code here
    var n = str.length;
    letters = str.split('');
    for (var i = 0; i < n/2; i ++) {
      [letters[i], letters[n-i-1]] = [letters[n-i-1], letters[i]];
    };
    str = letters.join("");
    return str;
  },

  loudSnakeCase: function(sentence){  
    // your code here
    sentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    sentence = sentence.toLowerCase();
    var words = sentence.split(' ');
    words = words.filter(function(x) {return x!==""});
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    };
    sentence = words.join('_');
    return sentence;
  },

  compareArrays: function(array1, array2){ 
    // your code here (replace the return)
    var len = array1.length;
    if (len !== array2.length) {
      return false;
    };

    for (var i = 0; i < len; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    };

    return true;
  },

  fizzBuzz: function(n){  
    // your code here
    var list = [];
    for (var i = 1; i <= n; i++) {
      word = "";
      if (i%3 === 0) word = "FIZZ";
      if (i%5 === 0) word += "BUZZ";
      if (word) list.push(word);
      else list.push(i);
    }
    return list;
  },

  myMap: function(array, func){  
    // your code here
    for (var i = 0; i < array.length; i++) {
      array[i] = func(array[i]);
    }
    return array;
  },

  primes: function(n){  
    // your code here
    var primes = [];
    for (var i = 2; i <= n; i++) {
      var ok = true;
      for (var j = 2; j*j <= i; j++) {
        if (i%j === 0) {
          ok = false;
          break;
        }
      }
      if (ok) {
        primes.push(i);
      }
    }
    return primes;
  },
}