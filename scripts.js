// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(testArray){  
	  let x=testArray[1]
	  for(i=1; i<testArray.length; i++){
		  if(testArray[i] > x){
			  x = testArray[i]
		  }
	  }
	  return x

  },
  
  reversed: function(testArray){ 
	  let resultArray = ""
	  for(i=0; i<testArray.length; i++){
		  resultArray += testArray[testArray.length - (i + 1)]
	  }
	  return resultArray
  },

  loudSnakeCase: function(testString){  
	  let resultString = ""
	  //standard for loop along each character
	  for(i=0; i< testString.length; i++){
		  //test 1: to see if character is a space, the space is not a duplicate and the space is not the first character
		  //test 2: to see if the character is an alphanumeric character at the start of a word
		  //test 3: to see if the character is alphanumeric (not at the start of a word)
		  //if nothing applies (non-alphanumeric or duplicate space) the character is dropped
		  if(testString[i] === " " && testString[i-1] != " " && resultString != ""){
			  resultString += "_"
		  } else if(testString[i].match(/^[a-z0-9]+$/i) !== null && (testString[i-1] === " " || resultString == "")){
			  resultString += testString[i].toUpperCase()
		  } else if(testString[i].match(/^[a-z0-9]+$/i) !== null){
			  resultString += testString[i].toLowerCase()
		  } else {
		  }
	  }
	  return resultString
  },

  compareArrays: function(arrayOne, arrayTwo){ 
	  let result = false
	  if(arrayOne.length === arrayTwo.length){
		  for(i=0; i < arrayOne.length; i++){
			  if(arrayOne[i] != arrayTwo[i]){
				  break
			  } else if(i === (arrayOne.length - 1)) {
				  result = true
			  }
		  }
	  }
	  return result
  },

  fizzBuzz: function(number){
	  let resultArray = []
	  for(i=0; i<number; i++){
		  if((i + 1) % 3 === 0 && (i + 1) % 5 === 0){
			  resultArray[i] = "FIZZBUZZ"
		  }else if((i + 1) % 3 === 0){
			  resultArray[i] = "FIZZ"
		  }else if((i + 1) % 5 === 0){
			  resultArray[i] = "BUZZ"
		  }else{
			  resultArray[i] = (i + 1)
		  }
	  }
	  return resultArray
  },

  myMap: function(inputArray, func){
	  resultArray = []
	  for(i = 0; i < inputArray.length; i++){
		  resultArray[i] = func(inputArray[i])
	  }
	  return resultArray
  },

  primes: function(number){ 
	  let resultArray = []
	  if(number > 2){
		  for(i=2; i <= number; i++){
			  let factors = 0
			  if(i > 2){
				  for(j=2; j <= Math.floor(Math.sqrt(i)); j++){
					  if(i % j === 0){
						  factors += j
					  }
				  }
			  }
			  if (factors === 0){
				  resultArray.push(i)
			  }
		  }
	  }
	  return resultArray
  },
}
