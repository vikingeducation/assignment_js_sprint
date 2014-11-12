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
    console.log(str);
    // unicode punct blocks in regular expression
     var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#\$%&\(\)\*\+,\-\.\/:;<=>\?@\[\]\^_`\{\|\}~]/g;
    // var spaceRE = /\s+/g;

    var nstr = str.split(' ');

    // TODO - fix this super ghetto lazy search and removal of an empty string
    var n = nstr.indexOf("");
    if (n) {nstr.splice(n,1);}
    console.log(nstr);

    for (var i = 0; i < nstr.length; i++) {
      nstr[i] = (nstr[i].charAt(0).toUpperCase() + nstr[i].substr(1).toLowerCase()).replace(punctRE, '');
    }

    str = nstr.join('_').toString();
    return str;
  },

//-------------

  compareArrays: function(){
    // your code here (replace the return)
    return "Finish compareArrays first!"
  },

//-------------

  fizzBuzz: function(index_limit){
    // your code here
  },

  myMap: function(arr, func){
    // your code here
  },

  primes: function(prime_ceil){
    // your code here
  },
};
