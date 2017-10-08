// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    // your code here
    var largest = array[0];
    array.forEach(function(element){
      if (element > largest){
        largest = element;
      }
    });
    return largest;
  },
  
  reversed: function(string){  
    // your code here
    var charArray=string.split("");
    var newString=[];
    charArray.forEach(function(element){
      newString.unshift(element);
    });
    newString = newString.join("");
    return newString;

  },

  loudSnakeCase: function(sentence){  
    // your code here
    var sentenceArray=sentence.split("");
    sentenceArray = sentenceArray.filter(function(element){
      if (element.match(/[a-zA-Z ]/)){
        return true;
      }

    });
    var strippedSentence=sentenceArray.join("");
    var wordArray = strippedSentence.split(/ +/g);
    
    wordArray = wordArray.map(function(element){
      element=element.split("");
      element[0]=element[0].toUpperCase();
      element=element.join("");
      return element;
    });
    return wordArray.join("_");

  },

  compareArrays: function(array1, array2){ 
    // your code here (replace the return)
    if (array1.length!=array2.length){
      return false;
    }
    var same=true;
    for (var i=0;i<array1.length;i++){
      if (array1[i]!==array2[i]){
        same=false;
      }
    }
    return same;
  },

  fizzBuzz: function(number){  
    // your code here
    var array=[];
    for (var i=1;i<(number+1);i++){
      array.push(i);
    }
    array=array.map(function(element){
      var output="";
      if (element%3==0){
        output+="FIZZ";
      }
      if (element%5==0){
        output+="BUZZ";
      }
      if (output==""){
        output=element;
      }
      return output;
    });
    return array;
  },

  myMap: function(array, func){  
    // your code here
    for (var i=0;i<array.length;i++){
      array[i] = func(array[i]);
    }
    return array;
  },

  primes: function(number){  
    // your code here
    var numberArray=[];
    var primesArray=[];
    for (var i=2;i<=number;i++){
      numberArray.push(i);
    }

    numberArray.forEach(function(num){
      var isPrime = true;
      primesArray.forEach(function(prime){
        if ((num%prime)===0){
          isPrime=false;
        }
      });
      if (isPrime ===true){
        primesArray.push(num);
      }
    });
    return primesArray;
  },
}