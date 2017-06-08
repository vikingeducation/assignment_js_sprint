
var sprintFunctions = {
  largestEl: function(array){
    array.sort( function(a,b){
      return b - a;
    });
    return array[0];
  },

  reversed: function(string){
    return string.split("").reverse().join("");
  },

  loudSnakeCase: function( string ){
    //I wonder if "jack-o'-latern" should become
      //"Jack_O_Latern" or "Jackolatern"
      //looking at this case hyphenated words seem to be clearly treated like separate words
    //how to erase non alpha chars?
    //how to separate/detect hyphenated words correctly?

    //this smells hacky
    //lowerCase everything
    string = string.toLowerCase();
    //split into different words
    s_array = string.split(" ");

    //remove non [a-z] in the separate strings
    let pattern = /[^A-z]/g
    s_array = s_array.map( function(string_element) {
      //capitalize the first letters of the words
      string_element = string_element.charAt(0).toUpperCase() + string_element.slice(1, string_element.length);
      //remove non [a-z]
      //return string_element.replace(pattern, "");
      string_element = string_element.replace(pattern, "");
      //could rewrite as (string_element)
      if (string_element != ""){
        return string_element
      }
    });
    //remove undefined elements
    for (i = 0; i < s_array.length; i++){
      //undefined is falsy
      if (!s_array[i]){
        //check for contiguous undefined values
        do {
          s_array.splice(i, 1)
        }while(!s_array[i]);
      }
    }
    //join("_")
    string = s_array.join("_");
    return string;
  },

  compareArrays: function(array1, array2){
    if (array1.length != array2.length){
      return false
    }else{
      for(i = 0; i < array1.length; i++){
        if (array1[i] != array2[i]){
          return false
        }
      }
    }
    return true
  },

  fizzBuzz: function(n){
    var array= []
    for (i = 1; i <= n; i++){
      array.push(i)
    }
    var i = 1
    //loop through the multiples of 3 and set them to FIZZ
    while((number = i++ * 3) <= n){
      array[number - 1] = "FIZZ"
    }
    //loop through the multiples of 5 and set them to BUZZ
    i = 1
    while((number = i++ * 5) <= n){
      array[number - 1] = "BUZZ"
    }
    //loop through the multiples of 15 and set them to FIZZBUZZ
    i = 1
    while((number = i++ * 15) <= n){
      array[number - 1] = "FIZZBUZZ"
    }
    return array
  },

  myMap: function(array, funk){
    //create a new array to store the returns
    var result_array = []
    //iterate through array elements, passing them to funk (the function)
    array.forEach( function(element) {
      result_array.push(funk(element))
    })
    //return the results array
    return result_array
  },

  //find all primes < n
  primes: function(n){
    //make a sieve of size n
    let primes = []
    let sieve = [false, false]  //sieve, indexes represent the numbers, so 0 = non-prime; 1 = non-prime; 2 = prime
    //populate the sieve with truth, we'll iterate to find composites next
    //sieve size n, because it's 0-indexed, so it's a sieve of numbers 0 -> (n-1)
    for (i = 3; i <= n; i++){
      sieve.push(true)
    }
    //find composites
    for (i = 2; i < n; i++){
      let q = 2
      while (i * q < n) {
        let composite = i * q
        sieve[composite] = false
        q++
      }
    }
    //sift out the primes into the prime array
    for (i = 0; i <= n; i++){
      if (sieve[i]){
        primes.push(i)
      }
    }
    return primes
  },
}
