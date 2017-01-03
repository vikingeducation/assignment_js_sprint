// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var highest_element = array[0];
    for(var i = 1; i < array.length; i++){
      if (array[i] > highest_element){
        highest_element = array[i];
      }
    }
    return highest_element;
  },

  reversed: function(string){
    var reversed = '';
    for(var i = string.length - 1; i >= 0; i-- ){
      reversed += string[i]
    }
    return reversed
  },

  loudSnakeCase: function(string){
    // your code here

    var words = string.replace(/([^a-zA-Z\s\d]+)/g, "").replace(/[ ]+/g, " ").split(" ");
    for(var i = 0; i < words.length; i++){
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
    }
    return words.join("_")
  },

  compareArrays: function(arr1, arr2){
    // your code here (replace the return)
    if(arr1.length !== arr2.length)
      return false
    else{
      for(i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i])
          return false
      }
      return true
    }
  },

  fizzBuzz: function(num){
    // your code here
    var arr = []
    var fizz = function(num){
      return num % 3 == 0
    }
    var buzz = function(num){
      return num % 5 == 0
    }
    for(i = 1; i <= num; i++){
      if(fizz(i)){
        if(buzz(i))
          arr.push("FIZZBUZZ");
        else {
          arr.push("FIZZ");
        }
      }else if(buzz(i)){
        arr.push("BUZZ");
      }else{
        arr.push(i);
      }
    }
    return arr
  },

  myMap: function(arr, func){
    // your code here
    var newArr = []
    arr.forEach(function(elem){
      newArr.push(func(elem));
    });
    return newArr;
  },

  primes: function(num){
    var primes = [null, null]
    var final = [];
    for(i = 2; i < num; i++){
      primes.push(i);
    }
    for(i=2; i <= Math.sqrt(num); i++){
      if(primes[i]){
        for(m = i*i;  m < num; m += i){
          primes[m] = null
        }
      }
    }
    primes.forEach(function(elem){
      if(elem){
        final.push(elem);
      }
    });
    return final
  },
}

sprintFunctions.bubbleSort = function(arr){

  var swapped;
  var start = 0;
  do {
    swapped = false
    var s, s2;
    start += 1
    for(i = start; i < arr.length; i++) {
      console.log(arr)
      if(arr[i] < arr[i-1]){
        swapped = true;
        s = arr[i];
        s2 = arr[i-1];
        arr[i] = s2;
        arr[i-1] = s;
      }
      else{
        start += 1
      }
    }
  } while (swapped);
  return arr;
}


sprintFunctions.mergeSort = function(arr){
  return sprintFunctions.mergeSort.sort(arr)

}


sprintFunctions.mergeSort.merge = function(left, right){
  var arr = [];
  while(left[0] && right[0]){
    if(left[0] <= right[0])
      arr.push(left.shift());
    else
      arr.push(right.shift());
  }

  left.forEach(function(elem){
    arr.push(elem)
  })

  right.forEach(function(elem){
    arr.push(elem)
  })

  return arr
}

sprintFunctions.mergeSort.sort = function(arr){
  if(arr.length <= 1)
    return arr;
  else{
    var half = Math.floor(arr.length/2);
    var left = arr.slice(0,half);
    var right = arr.slice(half);
    return sprintFunctions.mergeSort.merge(this(left),this(right));
  }
}

/*
def quick_sort(arr)

  return arr if arr.length <= 1

  arr = arr.dup

  pivot = arr.length-1
  compare = 0

  begin

    if arr[pivot] < arr[compare]
      arr[compare], arr[pivot-1], arr[pivot] = arr[pivot-1], arr[pivot], arr[compare]
      pivot -= 1
    else
      compare += 1
    end

  end until pivot == compare

  arr[0...pivot] = quick_sort(arr[0...pivot])
  arr[pivot+1..-1] = quick_sort(arr[pivot+1..-1])

  arr

end
*/

sprintFunctions.quickSort = function(arr) {
  if(arr.length <= 1) {
    return arr
  }
  else{
    var pivot = arr.length - 1;
    var compare = 0;
    do{
      if (arr[pivot] < arr[compare]){
        temp = arr[pivot];
        temp2 = arr[compare];
        temp3 = arr[pivot - 1];

        arr[compare] =  temp3;
        arr[pivot-1] = temp;
        arr[pivot] = temp2;

        pivot -= 1;
      }
      else{
        compare += 1;
      }
    }while(pivot !== compare)
    return sprintFunctions.quickSort(arr.slice(0, pivot)).concat(sprintFunctions.quickSort(arr.slice(pivot)))
  }
}
