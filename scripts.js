// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
      array.sort(descendingOrder);
      return array[0];
  

    function descendingOrder(a, b) {
      if (typeof a == 'string') {
        if (a.length > b.length) {
          return -1;
        }
        if (a.length < b.length) {
          return 1;
        }
        return 0;
      }
      else
      {
        return b-a;
      }
    }
  },

  reversed: function(){
    // your code here
  },

  loudSnakeCase: function(){
    // your code here
  },

  compareArrays: function(){
    // your code here (replace the return)
    return "Finish compareArrays first!"
  },

  fizzBuzz: function(){
    // your code here
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
