/* jshint esversion:6 */

// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function( arr ){  
    return arr.reduce( ( acc, val ) => acc > val ? acc : val );
  },
  
  reversed: function( str ){  
    return str.split("").reverse().join("");
  },

  loudSnakeCase: function( str ){
    const arr = str.split(" ");
    const answer_arr = []; 
    const re = /[^a-z0-9]/gi;

    arr.forEach( ( word, i, arr ) => {
      if ( word.length > 0 ) {
        let new_word = word.replace(re, "");
        new_word = new_word.charAt(0).toUpperCase() + new_word.slice(1);
        answer_arr.push(new_word);
      }
    } );
    return answer_arr.join("_");
  },

  compareArrays: function( arr1, arr2 ){ 
    if ( arr1.length !== arr2.length ) {
      return false;
    }
    for ( let i = 0; i < arr1.length; i++ ) {
      if ( arr1[i] != arr2[i] ) {
        return false;
      }
    }
    return true;
  },

  fizzBuzz: function( num ){  
    const arr = [];
    for ( let i = 1; i <= num; i++ ) {
      if ( i % 3 === 0 && i % 5 === 0 ) {
        arr.push("FIZZBUZZ");
      } else if ( i % 3 === 0 ) {
        arr.push("FIZZ");
      } else if ( i % 5 === 0 ) {
        arr.push("BUZZ");
      } else {
        arr.push(i);
      }
    }
    return arr;
  },

  myMap: function( arr, fn ){  
    return arr.map( fn );
  },

  primes: function( num ){  
    function isPrime( x ) {
      for ( let i = 2; i < x; i++ ) {
        if ( x % i === 0 ) {
          return false;
        }
      }
      return x > 1;
    }

    const arr = [];
    for ( let i = 0; i < num; i++ ) {
      // console.log(i);
      if ( isPrime(i) ) {
        arr.push(i);
      }
    }
    return arr;
  },
}