// FILL IN THE FUNCTIONS BELOW

// Adding in a prototype for Strings to be able to 
// properly capitalize them.
String.prototype.capitalize = function(){
	return this.charAt(0).toUpperCase() + this.slice(1);
}

var sprintFunctions = { 

  largestEl: function(arr){  
    return arr.sort().pop();
  },
  
  reversed: function(str){  
    // This also works:
    //return str.split('').reverse().join('');
    
    output = '';
    for(var i = str.length-1;i >= 0;i--){
    	output += str[i];
    }
    return output;
  },

  loudSnakeCase: function(str){ 
    words = str.replace(/[\.!]/g, '').replace('  ',' ').split(' ');
    for(i=0;i<words.length;i++){
    	words[i] = words[i].capitalize();
    }

    return words.join('_');
  },

  compareArrays: function(arr1, arr2){ 
    if(arr1.length != arr2.length){
    	return false;
    }
    for(var i=0;i < arr1.length; i++){
    	if(arr1[i] != arr2[i]){
    		return false;	
    	}
    }
    return true;
  },

  fizzBuzz: function(l){
  	results = [];
    
    // But this is just so much cooler...
    // for(i=0;i++<l;results.push('FIZZBUZZ'.slice(i%3&&4,i%5?4:8)||i));
    
    for(var i=1;i<=l;i++){
    	if(i%15 == 0){
    		results.push("FIZZBUZZ");
    	}else if(i%3 == 0){
    		results.push("FIZZ");
    	}else if(i%5 == 0){
    		results.push("BUZZ");
    	}else{
    		results.push(i);
    	}
    }
    return results;
  },

  myMap: function(arr, block){  
    results = [];
    arr.forEach(function(e){
    	results.push(block(e));
    });
    return results;
  },

  primes: function(n){  
    // Give us a nice function to determine whether a number
    // is prime or not.
    isPrime = function(potentialPrime){
    	// B/C math
    	if(potentialPrime == 2){
    		return true;
    	}

    	for(i=2;i<=Math.ceil(Math.sqrt(potentialPrime));i++){
    		if(potentialPrime%i === 0){
    			return false;
    		}
    	}
    	return true;
    }

    // Now run our actual function.
    results = [];
    for(j=2;j<n;j++){
    	if(isPrime(j)){
    		results.push(j);
    	}
    }
    return results;
  },

  bubbleSort: function(arr){
  	// I see when to use a do loop now!
  	do{
  		var switched = false;
  		for(i=0;i<arr.length-1;i++){
  			if(arr[i] > arr[i+1]){
  				switched = true;
  				var temp = arr[i];
  				arr[i] = arr[i+1];
  				arr[i+1] = temp;
  			}
  		}
  	} while (switched);
  	return arr;
  }, 

  mergeSort: function(arr){
  	
  	compareAndMerge = function(arr1, arr2){
  		var temp = [];
  		while(arr1.length > 0 || arr2.length > 0){
  			if(arr1[0] < arr2[0] || arr2.length === 0){
  				temp.push(arr1[0]);
  				arr1.shift();
  			} else if(arr2[0] < arr1[0] || arr1.length === 0){
  				temp.push(arr2[0]);
  				arr2.shift();
  			}
  		}
  		return temp;
  	}
  	
  	// Get every element into its own small array
  	// initially.
  	var start = []
  	arr.forEach(function(el){
  		start.push([el]);
  	});

  	while(start[0].length != arr.length){
			var temp = [];
			for(i=0;i<=start.length-1;i=i+2){
				temp.push(compareAndMerge(start[i], start[i+1]));
			}
			start = temp;
  	}

  	return start[0];
  }, 

  quickSort: function(arr){
  	// @param {Array} range Array to be partitioned
  	// @param {Int} left Index of the leftmost element
  	// @param {Int} right Index of the rightmost element
  	
  	partition = function(range, left, right){
  		var pivot = Math.floor(range.length/2);
  		var pivotValue = range[pivot];
  	}

  	return false;
  }
}