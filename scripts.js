// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(submission){  
    let largest;

    submission.forEach( function(element) {
      if ((largest === undefined) || (element > largest)) {
        largest = element;
      };
    });

    return largest;
  },
  
  reversed: function(submission){  
    return submission.split("").reverse().join("");
  },

  loudSnakeCase: function(submission){  
    let response = [];
    prepped = submission.replace(/[^\w\ ]/gi, '');
    prepped.split(' ').forEach( function(element) {
      if (element.length > 0) {
        response.push(element[0].toUpperCase() + element.substring(1));
      };
    });

    return response.join('_');
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
