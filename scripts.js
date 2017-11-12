// FILL IN THE FUNCTIONS BELOW
var sprintFunctions = {
  largestEl: function( array ){  
    // your code here
    let i = 0;
    let largest = 0;
    while ( i < array.length ){
      if ( array[i] > largest ){
        largest = array[i];
      }
      i += 1;
    }
    return largest;
  },
  reversed: function( string ){  
    // your code here
    var str = "";
    var i = string.length - 1;
    while ( i >= 0 ){
      str += string[i];
      i -= 1;
    }
    return str;
  },
  loudSnakeCase: function( sentence ){  
    // your code here
  var chars = /[^A-Za-z\s0-9]/g;
  var capArray = function (sentence){
    return sentence.map( function(item){
      return item[0].toUpperCase() + item.slice(1)
    })
  }
  var add = function( sentence, match, separator ){
    return sentence.replace( match, separator )
  }
  loudSnakeCaseWorks =  add( capArray( sentence.replace(/\s\s+/, " ").replace(chars, "").split(" ") ).join(" "), /\s/g, "_") 
    return loudSnakeCaseWorks
  },
  compareArrays: function(arr1, arr2){ 
    // your code here (replace the return)
    let index = 0;
    let equal = true;
    while (index < arr1.length) {
      if ( arr1[ index ] !== arr2[ index ]) {
        equal = false;
      }
      index += 1;
    }     
    // your code here ( replace the return )
    return equal; 
  },
  fizzBuzz: function( number ){  
    // your code here
    let numbers = [];
    let index = 1;
    while ( index <= number ) {
    if ( index % 3 === 0 && index % 5 !== 0 ){
        numbers.push( "FIZZ" );
    } else if ( index % 5 === 0 && index % 3 !== 0 ){
        numbers.push( "BUZZ" );
    } else if ( index % 3 === 0 && index % 5 === 0 ){
        numbers.push( "FIZZBUZZ" );
    } else {
      numbers.push( index );
    }
      index += 1;
   }
   return numbers;
  },
  myMap: function( array, func ){  
    // your code here
    let newArray = []
    array.forEach( function( item ){
      newArray.push( func( item ) ) 
    } )
    return newArray
  },
  primes: function( choice ){  
    // your code here
    var decarray = function(number){
      var array = []
      while( number > 1 ){
        array.push( number )
        number --
      }
      return array
    } 
    var prime = function(number){
      var match = number - 1;
      var isPrime = true;
      while( match > 1){
        if (number % match === 0){
          isPrime = false
        }
        match --
      }
      return isPrime
    }
    let filtered = decarray(choice).filter(prime).reverse()
    return filtered
  }
}