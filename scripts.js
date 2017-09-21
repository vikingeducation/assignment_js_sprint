// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
  	largestNumber = arr[0]  
    for(var i = 1; i < arr.length; i++){
    	if(arr[i] > largestNumber){
    		largestNumber = arr[i];
    	}
    }
    return largestNumber;
  },
  
  reversed: function(str){  
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
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