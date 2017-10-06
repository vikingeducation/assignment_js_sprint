// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  
  largestEl : function(array){ 
   	var larger = array[0]
  		for (var i = 0; i < array.length; i++) {
  			if (larger < array[i]) {
  				larger = array[i];
  				} 
 		}
    return larger;
  },
    
  reversed: function(word){  
    var arrayOfWord = [];
  		arrayOfWord=Array.from(word);
  		var reversedArray=arrayOfWord.reverse();
  		var reversedWord=reversedArray.join('');
  		return reversedWord;
  },

  loudSnakeCase: function(sentence){
  		var cleanArray= sentence.toLowerCase().replace(/[^\w\s]|_/g, "").replace('  ',' ').split(" ");
   		var capInit = function() {
   			for (i=0; i<cleanArray.length; i++) {
      			cleanArray[i]=cleanArray[i].charAt(0).toUpperCase() + cleanArray[i].substring(1); 
      			}   
        	return cleanArray.join('_');  
  			};  
  	return	capInit();
  },

  compareArrays: function(array1, array2){ 
       if (array1.length !== array2.length) return false;
    	for (var i = 0; i < array1.length; i++){
			if (array1[i] !== array2[i]){return false;}
    		}
    		return true; 
   },

  fizzBuzz: function(m){  
  var emptyArray=[];
  for (i=1; i<=m; i++) {
    if (i%3===0 && i%5===0) {emptyArray.push('FIZZBUZZ');}
    else if (i%3===0) {emptyArray.push('FIZZ');}
    else if (i%5===0) {emptyArray.push('BUZZ');}
    else {emptyArray.push(i);}
    } //end of for
    
  return emptyArray;
  },//endof fizzBuzz

  myMap: function(arr, func){  
   var newArray= [];  
  	for (i=0; i<arr.length;i++) {
    var y = func(arr[i]);
    newArray.push(y);
     } //end for
  
  return newArray;
  },//my map end

  primes: function(n){  
  var newArray=[];
  var counter=0;
  	for(var j=1;j<=n;j++){
    	for(var i=1;i<=j;i++){if(j%i===0){counter++;}}
        	if(counter===2){newArray.push(j);}
    			counter=0;
    }
return newArray;
},

}