// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    // your code here
    var idx = 0;
    largest = 0;
    while (idx < arr.length){
      if (arr[idx] > largest)
      {
        largest = arr[idx];
      }
      idx++;
    }
    return largest;
  },

  reversed: function(str){
    // your code here
    var str_array = str.split("");
    var n = str_array.length-1
    var x = 0;
    while(x < (Math.floor(str.length/2)))
    {
      temp = str_array[x];
      str_array[x] = str_array[n-x];
      str_array[n-x] = temp;
      x++;
    }
    str_reversed = str_array.join("");
    return str_reversed;
  },

  loudSnakeCase: function(str){
    // your code here
    loud_array = [];
    words_arr = str.split(" ");
    for(var i = 0; i < words_arr.length; i++)
    {
        if (words_arr[i] == ""){
          continue
        }else{
            words_arr[i] = words_arr[i].replace(/[^0-9A-Za-z]/gi, '');
            words_arr[i] = words_arr[i].charAt(0).toUpperCase()+words_arr[i].slice(1);
            loud_array.push(words_arr[i]);
        }
    }
    var str_loud = loud_array.join("_");
    return str_loud;
  },

  compareArrays: function(arr1, arr2){
    // your code here (replace the return)
    var equal = true;
    if (arr1.length === arr2.length)
    {
      for(var i = 0; i < arr1.length; i++)
      {
        if(arr1[i] !== arr2[i])
        {
          equal = false;
          break;
        }
      }
    }
    return equal;
  },

  fizzBuzz: function(num){
    // your code here
    var output_arr = [];
    for(var n = 1; n <= num; n++)
    {
      if(n%15 === 0)
      {
        output_arr.push("FIZZBUZZ");
      }else if(n%3 === 0){
        output_arr.push("FIZZ");
      }else if(n%5 === 0){
        output_arr.push("BUZZ");
      }else{
        output_arr.push(n);
      }
    }
    return output_arr;
  },

  myMap: function(array, func){
      final_array = [];
      var j = 0;
      for(var i = 0; i < array.length; i++){
          final_array[j] = func(array[i]);
          j++;
        }
      return final_array;
  },

  factors: function(num){
        factors_arr = [];
        limit = Math.floor(num/2);
        for(var x = 1; x <= limit; x++){
            if (num%x == 0){
                factors_arr.push(x);
                factors_arr.push(num/x);
            }
        }
        return factors_arr;
    },
  primes: function(num){
       primes_arr = [];
        for(var n = 2; n < num; n++){
            factor_arr = this.factors(n);
            if (factor_arr.length <= 2){
                primes_arr.push(n);
            }
        }
      return primes_arr;
  }
};