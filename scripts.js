// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arrayToTest){  
    var largestIndex = 0;

    for (let i = 0; i < arrayToTest.length; i++) {
      if (arrayToTest[i] > arrayToTest[largestIndex]) {
        largestIndex = i;
      }
    }
    return arrayToTest[largestIndex];
  },
  
  reversed: function(string){  
    return string.split('').reverse('').join('');
  },

  loudSnakeCase: function(myString){  
    stringArray = myString.split(/\W+/).filter(function(word) {
      return word.length > 0;
    })

    capitalizedArray = [];

    for (let i = 0; i < stringArray.length; i++) {
      const capitalizedString = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
      capitalizedArray.push(capitalizedString);
    }
    return capitalizedArray.join('_');
  },

  compareArrays: function(firstArray, secondArray){ 
    if (firstArray.length !== secondArray.length) {
      return false;
    }
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true; 
  },

  fizzBuzz: function(size){  
    var fizzArray = [];
    for (let i = 1; i <= size; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        fizzArray.push("FIZZBUZZ")
      } else if (i % 3 === 0) {
        fizzArray.push("FIZZ");
      } else if (i % 5 === 0) {
        fizzArray.push("BUZZ");
      } else {
        fizzArray.push(i);
      }
    }
    return fizzArray;
  },

  myMap: function(myArray, myFunction) {  
    // your code here
    var returnArray = [];
    for (let i = 0; i < myArray.length; i++) {
      returnArray.push(myFunction(myArray[i]));
    }

    return returnArray;
  },

  primes: function(length){  
    // your code here
    let primesArray = [2];

    if (length < 2) {
      return [];
    } else if (length === 2) {
      return primesArray;
    }

    for (let i = 3; i < length; i++) {
      let isPrime = true;

      // tests each i for primeness
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
        }
      }

      if (isPrime){
        primesArray.push(i);
      }
    }

    return primesArray;
  },
}

// my test suite
console.log(sprintFunctions.primes(8));