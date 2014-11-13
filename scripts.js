// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {

  largestEl: function(arr)
  {
    var largestElement = null;
    for (var i = arr.length - 1; i >= 0; i--)
    {
      if ( arr[i] > largestElement )
      {
        largestElement = arr[i];
      }
    }
    return largestElement;
  },

//-------------

  reversed: function(str){
    return str.split('').reverse().join('');
  },

//-------------

  loudSnakeCase: function(str){
    // unicode punct blocks in regular expression - http://stackoverflow.com/a/25575009/2483733
     var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#\$%&\(\)\*\+,\-\.\/:;<=>\?@\[\]\^_`\{\|\}~]/g;
    // var spaceRE = /\s+/g;

    var nstr = str.split(' ');

    // function findAndRemoveElement( ele ){
    //   var n = nstr.indexOf(ele);
    //   if (n) {nstr.splice(n,1);}
    // }

    // TODO - fix this super ghetto lazy search and removal of an empty string
    var n = nstr.indexOf("");
    if (n) {nstr.splice(n,1);}

    // var space_arr;

    for (var i = 0; i < nstr.length; i++) {
      // if ( nstr[i] === "" ) { space_arr.push(i);}
      nstr[i] = (nstr[i].charAt(0).toUpperCase() + nstr[i].substr(1).toLowerCase()).replace(punctRE, '');
    }

    // for (var i = 0; i < space_arr.length; i++) {
    //   space_arr[i]
    // };
    // nstr.forEach( findAndRemoveElement );

    str = nstr.join('_').toString();
    return str;
  },

//-------------

  compareArrays: function(arr1, arr2){

    // same size?
    if (arr1.length != arr2.length) {
      return false;
    }

    // 1-1 matching on the elements?
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }

    // everything matches
    return true;
  },

//-------------

  fizzBuzz: function(count){

    var EMPTY_STR = "";

    var ret_arr = [];
    var item;

    // 2D array holding [target, replacement] elements
    var target_arr = [ [3, "FIZZ"], [5, "BUZZ"] ];

    // console.log("target arr = "+target_arr[0][0]); //3
    // console.log("target arr = "+target_arr[0][1]); //"FIZZ"

    for (var i = 1; i <= count; i++)
    {

      item = EMPTY_STR; // re-init on every pass

//------------- LOOPY AND EASILY EXTENSIBLE

      for (var k = 0; k < target_arr.length; k++) {
        if ( i % (target_arr[k][0]) === 0 ) {
            item += target_arr[k][1];
        }
      }
//------------- FLAT AND LONGFORM

      // if ( (i%3) === 0) {
      //   item += "FIZZ";
      // }

      // if ( (i%5) === 0 ) {
      //   item += "BUZZ";
      // }
//-------------

      // if nothing has been assigned already
      if (item === EMPTY_STR) {
        // just set it to the iterator count
        item = i;
      }

      // add it to the tail of the array
      ret_arr.push( item );

    } // end for

    // console.log("arr value: " + ret_arr);
    return ret_arr;
  },

//-------------

  myMap: function(arr, func){




  },

  primes: function(prime_ceil){
    primes_arr = [];

    for (var k = 0; k < prime_ceil; k++)
    {
      // console.log(" -> checking num: " + k );
      if (isPrime(k)) { primes_arr.push(k); }
      // else { console.log(k + " is not a prime"); }
      // console.log(" ->  Curr arr: " + primes_arr);
    }

    // helper function - http://studymaths.co.uk/topics/checkIfPrime.php
    function isPrime(n)
    {
       // If n is less than 2 or not an integer then by definition cannot be prime.
       if (n < 2) {return false;}
       if (n != Math.round(n)) {return false;}

       // Now assume that n is prime, we will try to prove that it is not.
       var b_isPrime = true;

       // Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
       for (var i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {b_isPrime = false;}
       }

       // Finally return whether n is prime or not.
      return b_isPrime;
    }

    // console.log(" => Returned arr: " + primes_arr);
    return primes_arr;
  },
};
