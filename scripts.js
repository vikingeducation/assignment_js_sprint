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

    var arr = [];
    for (var i = 1; i <= count; i++)
    {
      if ( (i%3) === 0 && (i%5) === 0 )
      {
        arr.push("FIZZBUZZ");
        continue;
      }

      if ( (i%3) === 0)
      {
        arr.push("FIZZ");
      }
      else if ( (i%5) === 0 )
      {
        arr.push("BUZZ");
      }
      else
      {
        arr.push(i);
      }
      console.log(arr);
    }

    return arr;
  },

  myMap: function(arr, func){
    // your code here
  },

  primes: function(prime_ceil){
    // your code here
  },
};
