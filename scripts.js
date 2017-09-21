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

  loudSnakeCase: function(sentence){  
	var stripNonCharElements = sentence.replace(/[^A-Za-z ]/g, '');
    var splitString = stripNonCharElements.split(" ");
    var answer = []
  	var newWord;
    
    for(var i = 0; i < splitString.length; i++){
      
      var firstLetter = splitString[i][0];
      var restOfWord = splitString[i].slice(1);
      
      if(splitString[i] !== ""){
        newWord = firstLetter.toUpperCase() + restOfWord;
        answer.push(newWord);
      }
    }
    return answer.join("_");
  },

  compareArrays: function(arr1, arr2){ 
  	lengthCheck = 0;
  	for(var i = 0; i < arr1.length; i++){
  		if(arr1[i] === arr2[i]){
  			lengthCheck++;
  			continue;
  		}
  		else{
  			return false;
  		}
  	}
  	if(lengthCheck === arr2.length){
  		return true;
  	}
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