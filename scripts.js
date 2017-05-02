// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    var largest = arr[0],
      position = 1
    while( position <= arr.length ){
      number =  arr[position];
      if (number > largest){
        largest =  number;
        console.log("largest", largest);
        console.log("arr length", arr.length);
        console.log("round");
        position ++;
        console.log("position", position);
      } else{
        
        position ++;
      }
      console.log("testing", largest)
    }    
    console.log("end")
    return largest;
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