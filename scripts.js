// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    return arr.sort().splice(-1);
  },
  
  reversed: function(str){  
    return str.split("").reverse().join("");
  },

  loudSnakeCase: function(str){  
    var arr = str.split(/\W+/);
    if( arr[arr.length-1] == "" ){
      arr.pop();
    };
    var output = [];
    arr.forEach( function(word){
      var firstLetter = word.slice(0,1).toUpperCase();
      var restOfWord = word.slice(1);
      var capWord = firstLetter + restOfWord;
      output.push(capWord);
    });
    return output.join("_")
  },

  compareArrays: function(arr1, arr2){ 
    matched = true
    if(arr1.length != arr2.length){
      matched = false;
    }
    arr1.forEach( function(el,index){
      if(el != arr2[index]){
        matched = false;
      };
    });
    return matched;
  },

  fizzBuzz: function(num){  
    var output = [];
    for( var i = 1; i <= num; i++){
      if( i%15 == 0 ){
	output.push("FIZZBUZZ");
      } else if( i%3 == 0 ){
	output.push("FIZZ");
      } else if( i%5 == 0 ){
	output.push("BUZZ");
      } else { 
	output.push(i);
      };
    };
    return output;
  },

  myMap: function(arr,inputFunction){  
    var output = [];
    arr.forEach( function(el){
      output.push(inputFunction(el));
    });
    return output;
  },

  primes: function(max){
    var output = [];
    for(i = 1; i < max; i++){
      if(is_prime(i)){
        output.push(i);
      };
    };
    return output;
  },

  is_prime: function(num){
    if( num == 1) {
      return false;
    }
    for(i = 2; i < num; i++){
      if( num%i == 0 ){
	return false;
      };
    };
    return true;
  }
}
