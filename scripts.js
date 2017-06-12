// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(ar){  
    let max = ar[0];
    for(const el of ar) {
      if(el > max) {
        max = el;
      }
    }
    return max;
  },
  
  reversed: function(str){  
    let nStr = "";
    for(let i = str.length; i > 0; i--) {
      nStr += str.charAt(i-1);
    }
    return nStr;
  },

  loudSnakeCase: function(str){
    str = str.replace(/[!.?]/g, "").replace(/\s\s/g, " ").replace(/\b[a-z]/g, function(s) {
      return s.toUpperCase();
    }).replace(/\s/g, "_");
    return str;
  },

  compareArrays: function(ar1, ar2){ 
    if(ar1.length != ar2.length) {
      return false;
    }
    for(let i = 0; i < ar1.length; i++) {
      if(ar1[i] !== ar2[i]) {
        return false;
      }
    }
    return true;
  },

  fizzBuzz: function(num){  
    let ar = [];
    for(let i = 1; i <= num; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        ar.push("FIZZBUZZ");
      } else if (i % 5 === 0) {
        ar.push("BUZZ");
      } else if (i % 3 === 0) {
        ar.push("FIZZ");
      } else {
        ar.push(i);
      }
    }
    return ar;
  },

  myMap: function(ar, f){  
    let newAr = [];
    for(let i of ar) {
      newAr.push(f(i));
    }
    return newAr;
  },

  primes: function(num){  
    let p = [];
    let found = false;
    for(let i = 2; i < num; i++) {
      found = false;
      for(let j = 2; j < i; j++) {
        if(i % j === 0) {
          found = true;
          break;
        }
      }
      if(!found) {
        p.push(i);
      }
    }
    return p;
  },
}