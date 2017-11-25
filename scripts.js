// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    // store largest element 
    let largestEl = 0;
    // iterate through array
    array.forEach((el)=>{
      // check if element > current largest
      if(el > largestEl){
        // update if true
        largestEl = el;
      }
    });
    return largestEl;
  },
  
  reversed: function(string){  
    // convert string to array
    let array = string.split('');
    // reverse elements
    array.reverse();
    // convert back to string and return
    return array.join('');
  },

  loudSnakeCase: function(string){  
    // reformat multiple spaces
    let formattedString = string.replace(/\s\s+/g, ' ');

    // convert sentence to array of words
    let wordArray = formattedString.split(' ');

    // iterate through words
    wordArray.forEach(function(word, idx){
      // break word into array of letters
      let letters = word.split('');

      // filter out punctuation
      let filteredLetters = letters.filter(function(letter){
        return letter.match(/[a-z]/i);
      });

      // join back into word
      let filteredWord = filteredLetters.join('');

      // get first letter 
      let firstLetter = filteredWord.slice(0,1);
      
      // change first letter to uppercase
      let uppercase = filteredWord.replace(firstLetter, firstLetter.toUpperCase());
      
      // update word
      wordArray[idx] = uppercase;
    });

    // return updated words joined by `_`
    return wordArray.join('_');
  },
  
  compareArrays: function(arr1, arr2){ 
    // tracker
    let result = true;
    // iterate through arr1
    arr1.forEach(function(value, idx){
      // compare value to second array
      if(arr1[idx] !== arr2[idx]){
        result = false;
      }
    });

    return result; 
  },

  fizzBuzz: function(number){  
    // store array
    let array = [];
    // loop up to number
    for(let i = 1; i <= number; i++){
      if(i % 15 == 0){
        array.push('FIZZBUZZ');
      } else if(i % 5 === 0){
        array.push('BUZZ');
      } else if(i % 3 === 0){
        array.push('FIZZ');
      } else {
        array.push(i);
      }
    }
    return array;
  },

  myMap: function(arr, func){  
    // new array
    let array = [];
    // pass every element into function
    // store push return values into new array
    arr.forEach( el => array.push(func(el)));
    // return new array
    return array;
  },

  primes: function(num){  
    // store primes
    let primes = [];
    // no primes if num < 2  
    if(num < 2){
      return primes;
    } else if(num === 2){
      // 2 is prime
      primes.push(num);
    }
    // loop through numbers up to num
    for(let i = 2; i < num; i++){
      // tracker
      let prime = true;
      // check if prime
      for(let j = 2; j < i; j++){
        // check for remainder 
        if(i%j === 0){
          prime = false; 
        } 
      }
      // if prime push i to array
      if(prime){
        primes.push(i);
      }
    }
    // return array
    return primes;
  },
}
