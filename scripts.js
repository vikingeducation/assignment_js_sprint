// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    var largest = 0
    array.forEach(function(i){
      largest = i > largest ? i : largest;
    });
    return largest;
  },
  
  reversed: function(string){  
    var reversed = [];
    for( i = string.length; i >= 0; i-- ) {
      reversed.push(string[i]);
    }
    return reversed.join('');
  },

  loudSnakeCase: function(string){  
    var newString = [];
    string.split(" ").forEach(function(word) {
      if (word) {
        new_word = "";      
        for( i = 0; i < word.length; i++ ) {
          if ( /[a-z]/i.test( word[i] ) ) {
            if ( i === 0 ) {
              new_word += word[i].toUpperCase();
            } else {
              new_word += word[i];
            }
          }
        }
        newString.push(new_word);
      }
    })
    return newString.join("_");
  },

  compareArrays: function(arr1, arr2){ 
    if ( arr1.length === arr2.length ) {
      for ( i=0; i < arr1.length; i++ ) {
        if ( arr1[i] !== arr2[i] ) {
          return false;
        };
      };
      return true;
    } else {
      return false;
    }
  },

  fizzBuzz: function(number){
    var fizzyArr = [];  
    for ( i=1; i<=number; i++ ) {
      if ( i % 15 === 0 ) {
        fizzyArr.push("FIZZBUZZ");
      } else if ( i % 5 === 0 ) {
        fizzyArr.push("BUZZ");
      } else if ( i % 3 === 0 ) {
        fizzyArr.push("FIZZ");
      } else {
        fizzyArr.push(i);
      }
    }
    return fizzyArr;
  },

  myMap: function(startArray, func){  
    for( i=0; i < startArray.length; i++) {
      startArray[i] = func(startArray[i]);
    }
    return startArray;
  },

  primes: function(number){  
    primesArr = [];
    for ( i=1; i <= number; i++ ) {
      for ( j=(i-1); j >= 1; j-- ) {
        if ( j === 1 ) {
          primesArr.push(i);
        } else if ( i % j === 0 ) {
          break;
        }
      }
    }
    return primesArr;
  },

  bubbleSort: function(arr) {
    do {      
      var sorting = false;
      arr.forEach(function(el, ind) {
        if (el > arr[ind + 1]) {
          sorting = true;
          arr[ind] = arr[ind + 1]; 
          arr[ind + 1] = el;
          console.log(arr);
        }
      }) 
    } while(sorting);
    return arr;
  },

  mergeSort: function(arr) {
    if (arr.length === 1) {
      
      return arr;
    
    } else {
      
      var left = this.mergeSort( arr.slice(0, arr.length/2) );
      var right = this.mergeSort(arr.slice(arr.length/2, arr.length));
      
      var sortedArray = [];

      while ( left.length > 0 || right.length > 0 ) {

        if ( right.length === 0 ) {
          sortedArray.push( left.shift() );
        } else if ( left.length === 0 ) {
          sortedArray.push( right.shift() );
        } else if ( left[0] === right[0] ) {
          sortedArray.push( right.shift() );
        } else {
          sortedArray.push( left[0] < right[0] ? left.shift() : right.shift() );
        }

        console.log(sortedArray);

      }
    }
    return sortedArray;
  },

  quickSort: function(arr) {
    if (arr.length === 0) {
      return [];
    } 

    var left = [];
    var right = [];
    var compare = arr[0];

    for ( i=1; i<arr.length; i++ ) {
      if (arr[i] < compare) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return this.quickSort(left).concat(compare, this.quickSort(right));
  }
}